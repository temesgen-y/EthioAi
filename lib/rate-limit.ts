const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_IP = 5;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) ?? [];

  const recentTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (recentTimestamps.length >= MAX_SUBMISSIONS_PER_IP) {
    submissions.set(ip, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  submissions.set(ip, recentTimestamps);
  return false;
}
