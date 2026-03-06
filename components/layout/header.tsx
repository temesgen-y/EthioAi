'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link href={href} className="relative py-1">
      <span
        className={cn(
          'relative z-10 block px-3 py-2 text-sm font-medium transition-colors duration-200 ease-out',
          isActive
            ? 'text-primary'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        {label}
      </span>
      {isActive && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-border/60 bg-background/80 shadow-sm backdrop-blur-md'
          : 'border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      )}
    >
      <nav className="flex h-14 min-h-[56px] w-full items-center justify-between gap-4 px-3 py-2 sm:h-16 sm:px-5 sm:gap-6 md:h-[72px] md:px-6 md:gap-8 lg:px-8 xl:px-10 2xl:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
        >
          <Image
            src="/logo.png"
            alt="EthioTech AI solutions plc"
            width={160}
            height={44}
            className="h-8 w-auto object-contain sm:h-9 md:h-10 lg:h-11"
            priority
          />
        </Link>

        <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2 xl:gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href))
              }
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <ThemeToggle />
          <Button
            variant="default"
            size="default"
            asChild
            className="hidden xs:inline-flex rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background text-sm px-3 sm:px-4"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="flex md:hidden min-w-[44px] min-h-[44px] touch-manipulation"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border/40 bg-background md:hidden safe-area-pb"
          >
            <div className="space-y-0.5 px-3 py-4 pb-6 sm:px-5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-3 min-h-[44px] flex items-center text-sm font-medium transition-colors duration-200 touch-manipulation',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-accent/10 hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full rounded-xl shadow-sm"
                  size="lg"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
