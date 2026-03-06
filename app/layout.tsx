import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  SITE_URL,
  SEO_CONFIG,
  ORGANIZATION_SCHEMA,
} from '@/lib/seo';
import { getLocalBusinessSchema } from '@/lib/structured-data';
import '@/styles/globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: [...SEO_CONFIG.defaultKeywords],
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: SEO_CONFIG.openGraph.type,
    locale: SEO_CONFIG.locale,
    siteName: SEO_CONFIG.openGraph.siteName,
    url: SITE_URL,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.defaultTitle,
      },
    ],
  },
  twitter: {
    card: SEO_CONFIG.twitter.card,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: SEO_CONFIG.robots,
  alternates: {
    canonical: SITE_URL,
  },
  verification: {},
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1f7a4a' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = { ...ORGANIZATION_SCHEMA, url: SITE_URL };
  const localBusinessJsonLd = getLocalBusinessSchema();

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k='ethioai-theme';var t=document.documentElement;try{var v=localStorage.getItem(k);if(v==='dark'||(v==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){t.classList.add('dark');t.classList.remove('light');}else{t.classList.add('light');t.classList.remove('dark');}}catch(e){t.classList.add('light');}})();`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="ethioai-theme">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
