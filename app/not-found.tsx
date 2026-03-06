import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found</p>
      <Button asChild className="mt-6">
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}
