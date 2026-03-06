'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema, type ContactFormInput } from '@/lib/validations/contact';
import { Loader2 } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    setStatus('idle');
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(json.message ?? 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-state-success/30 bg-state-success/10 p-6 text-center">
        <p className="font-medium text-state-success">
          Thank you. Your message has been received. We will respond within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === 'error' && errorMessage && (
        <div className="rounded-lg border border-state-destructive/30 bg-state-destructive/10 p-4 text-sm text-state-destructive">
          {errorMessage}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
            Name *
          </label>
          <Input
            id="name"
            {...register('name')}
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-state-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-state-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-primary">
            Subject
          </label>
          <Input
            id="subject"
            {...register('subject')}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-primary">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
          Comment *
        </label>
        <Textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder="Your message..."
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-state-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
