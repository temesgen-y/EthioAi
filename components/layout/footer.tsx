import Link from 'next/link';
import Image from 'next/image';
import {
  Linkedin,
  Facebook,
  Send,
  Instagram,
  Youtube,
  Music2,
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Custom Software', href: '/services/custom-software' },
    { label: 'AI Development', href: '/services/ai-development' },
    { label: 'Machine Learning', href: '/services/machine-learning' },
    { label: 'Mobile Development', href: '/services/mobile-development' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  industries: [{ label: 'Industries', href: '/industries' }],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Send, href: 'https://t.me', label: 'Telegram' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Music2, href: 'https://tiktok.com', label: 'TikTok' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="block w-fit">
              <Image
                src="/logo.png"
                alt="EthioTech AI solutions plc"
                width={140}
                height={40}
                className="h-8 w-auto object-contain sm:h-9 md:h-10"
              />
            </Link>
            <p className="mt-4 max-w-sm text-xs text-muted-foreground sm:text-sm">
              Enterprise-grade AI and custom software engineering. Building scalable
              solutions for businesses across Africa and beyond.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-accent/50 bg-surface-card text-text-primary transition-colors hover:border-brand-accent hover:text-brand-accent"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Industries</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 sm:mt-12 sm:pt-8">
          <p className="text-center text-xs text-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} EthioTech AI Solutions. Enterprise-grade AI &amp; Software Engineering.
          </p>
          <p className="mt-2 text-center text-xs text-muted-foreground sm:text-sm">
            Powered by{' '}
            <a
              href="https://www.gedebtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-brand-accent"
            >
              Gedeb Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
