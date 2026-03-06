import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { prisma } from '@/lib/prisma';
import { isRateLimited } from '@/lib/rate-limit';

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIp) return realIp;
  return '127.0.0.1';
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Basic spam protection: reject if message contains common spam patterns
    const message = parsed.data.message.toLowerCase();
    const spamPatterns = [
      /\b(via|http:\/\/|https:\/\/)[^\s]*\.(ru|xyz|top)\b/i,
      /\b(crypto|bitcoin|investment opportunity)\b/i,
      /(.)\1{10,}/, // repeated characters
    ];
    if (spamPatterns.some((p) => p.test(message))) {
      return NextResponse.json(
        { message: 'Invalid submission.' },
        { status: 400 }
      );
    }

    const messageParts = [parsed.data.message];
    if (parsed.data.phone) messageParts.push(`Phone: ${parsed.data.phone}`);

    await prisma.contactSubmission.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.subject ?? parsed.data.company ?? null,
        message: messageParts.join('\n'),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
