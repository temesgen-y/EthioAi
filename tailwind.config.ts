import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primitive: {
          green: '#1f7a4a',
          teal: '#0ea5a4',
          navy: '#0f172a',
          light: '#f6fbff',
          white: '#ffffff',
          gray: '#475569',
        },
        surface: {
          background: 'rgb(var(--surface-background) / <alpha-value>)',
          card: 'rgb(var(--surface-card) / <alpha-value>)',
          dark: 'rgb(var(--surface-dark) / <alpha-value>)',
          muted: 'rgb(var(--surface-muted) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          inverse: 'rgb(var(--text-inverse) / <alpha-value>)',
        },
        brand: {
          primary: 'rgb(var(--brand-primary) / <alpha-value>)',
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
        },
        border: {
          subtle: 'rgba(15, 23, 42, 0.1)',
          DEFAULT: 'rgb(var(--border) / <alpha-value>)',
          input: 'rgb(var(--border-input) / <alpha-value>)',
        },
        state: {
          success: 'rgb(var(--state-success) / <alpha-value>)',
          destructive: 'rgb(var(--state-destructive) / <alpha-value>)',
        },
        background: 'rgb(var(--surface-background) / <alpha-value>)',
        foreground: 'rgb(var(--text-primary) / <alpha-value>)',
        card: 'rgb(var(--surface-card) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--brand-primary) / <alpha-value>)',
          foreground: 'rgb(var(--text-inverse) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--surface-muted) / <alpha-value>)',
          foreground: 'rgb(var(--text-primary) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--brand-accent) / <alpha-value>)',
          foreground: 'rgb(var(--text-inverse) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--surface-muted) / <alpha-value>)',
          foreground: 'rgb(var(--text-secondary) / <alpha-value>)',
        },
        input: 'rgb(var(--border-input) / <alpha-value>)',
        ring: 'rgb(var(--brand-primary) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
