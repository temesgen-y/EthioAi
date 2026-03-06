# EthioAi

Website for Ethio AI tech. Enterprise-grade marketing site for an AI & Custom Software Engineering company. Built with Next.js 14+, React 19, TypeScript, TailwindCSS, ShadCN-style UI, and Framer Motion.

## Tech Stack

- **Frontend:** Next.js 14 (App Router), React 19, TypeScript, TailwindCSS, Framer Motion
- **Backend:** Next.js API Routes, PostgreSQL, Prisma ORM, Zod validation
- **Deployment:** Vercel-optimized

## Prerequisites

- Node.js 18+
- PostgreSQL (local or hosted)

## Setup

1. **Clone and install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment**

   Copy `.env.example` to `.env` and set your database URL:

   ```bash
   cp .env.example .env
   ```

   Edit `.env`:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/ai_engineering_website?schema=public"
   ```

3. **Initialize the database**

   ```bash
   npx prisma migrate dev
   ```

   Or, for an initial push without migrations:

   ```bash
   npx prisma db push
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/app
  /                    # Home
  /services            # Services overview
  /services/custom-software
  /services/ai-development
  /services/machine-learning
  /services/mobile-development
  /industries
  /about
  /careers
  /contact
/components
  /layout              # Header, Footer
  /ui                  # Button, Input, Textarea
  /sections            # Page sections (Hero, Services, etc.)
/lib
  prisma.ts            # Prisma client
  utils.ts             # cn() helper
  rate-limit.ts        # Contact form rate limiting
  /validations         # Zod schemas
/prisma
  schema.prisma
```

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint
- `npx prisma studio` – Open Prisma Studio to inspect the database

## Contact Form

The contact form submits to `/api/contact`. Submissions are stored in PostgreSQL via Prisma. Features:

- Zod validation
- Rate limiting (5 submissions per IP per hour)
- Basic spam protection
- Success/error handling

## License

Private / All rights reserved.
