# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

EthioAi — an enterprise marketing site for an AI & Custom Software Engineering company (brand: "EthioTech AI Solutions", Addis Ababa). Next.js 14 App Router, React 18, TypeScript (strict), TailwindCSS, Framer Motion. Heavily SEO-driven; the only backend is a single contact-form endpoint backed by PostgreSQL via Prisma.

Note: `package.json` pins React 18 even though `README.md` says React 19 — trust `package.json`.

## Commands

```bash
npm run dev        # dev server at http://localhost:3000
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint (next lint)
npx prisma studio  # inspect the DB / contact submissions
npx prisma db push # apply schema.prisma to the DB (no migration files)
npx prisma migrate dev   # create + apply a migration
npx prisma generate      # regenerate client (also runs on postinstall)
```

There is no test setup in this repo.

## Environment

Copy `.env.example` to `.env`. Two vars matter:
- `DATABASE_URL` — PostgreSQL connection string (required for the contact API / Prisma).
- `NEXT_PUBLIC_SITE_URL` — base URL used for canonical URLs, sitemap, OpenGraph, and JSON-LD. Falls back to `https://ethiotech.ai` in `lib/seo.ts`.

## Architecture

- **Path alias:** `@/*` maps to repo root (e.g. `@/lib/seo`, `@/components/ui/button`).
- **Pages** live in `app/*/page.tsx`. Most pages are thin: they export `metadata` (via `generatePageMetadata`), render JSON-LD, and compose reusable section components from `components/sections/`.
- **Section components** (`components/sections/`) are the real content — Hero, Services, FAQ, Testimonials, etc. Pages assemble these; edit content here rather than in page files.
- **UI primitives** (`components/ui/`) are ShadCN-style: built with `cva` (class-variance-authority) for variants and the `cn()` helper (`lib/utils.ts`, clsx + tailwind-merge). `Button` supports `asChild` for composing with `next/link`.
- **Service pages** (`app/services/*/page.tsx`) all render the shared `ServicePageTemplate` (`components/sections/service-page-template.tsx`), passing problem/solution/techStack/process/engagement props plus a `slug`.

### SEO system (central to this codebase)

This is a marketing site, so SEO infrastructure is first-class — touch it carefully:

- `lib/seo.ts` — single source of truth for site config, `NAP` (Name/Address/Phone for local SEO), `SEO_CONFIG`, `ORGANIZATION_SCHEMA`, `buildCanonicalUrl()`, and `generatePageMetadata()`. **Every page builds its `metadata` export via `generatePageMetadata()`** — it auto-truncates titles to 60 / descriptions to 160 chars and merges default keywords. Don't hand-roll `Metadata` objects.
- `lib/structured-data.ts` — JSON-LD schema builders (`getServiceSchema`, `getBreadcrumbSchema`, `getLocalBusinessSchema`, …). Rendered via `<JsonLd>` (`components/seo/json-ld.tsx`).
- `lib/internal-links.ts` — canonical service link map + `getRelatedServices(slug)` for cross-linking; keep this in sync when adding/renaming a service.
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` — generated metadata routes.

When adding a service: create `app/services/<slug>/page.tsx` using `ServicePageTemplate`, add the entry to `SERVICE_LINKS`/`SLUG_TO_KEY` in `lib/internal-links.ts`, and wire breadcrumb + service JSON-LD.

### Contact form / backend

- `POST /api/contact` (`app/api/contact/route.ts`) is the only API route. Flow: derive client IP → `isRateLimited()` → Zod `contactSchema.safeParse` → regex spam filter → persist via Prisma.
- Validation: `lib/validations/contact.ts` (`contactSchema`). The schema accepts more fields (`subject`, `phone`, `company`) than the DB stores — the route folds `phone` into the `message` text and maps `subject ?? company` into the `company` column.
- Rate limiting: `lib/rate-limit.ts` is an **in-memory `Map`** (5 submissions/IP/hour). This resets on every deploy/restart and is per-instance — not durable across serverless instances.
- DB schema: `prisma/schema.prisma` has a single `ContactSubmission` model. `lib/prisma.ts` is the singleton client.

### Theming

- Custom theme provider (`components/theme-provider.tsx`, `useTheme`) — hand-rolled, not `next-themes`. Persists to `localStorage` key `ui-theme`, toggles `.light`/`.dark` on `<html>`.
- Tailwind colors are **semantic design tokens** backed by CSS variables (`tailwind.config.ts` + `styles/globals.css`): use `bg-brand-primary`, `text-text-primary`, `bg-surface-card`, `border-border`, `text-muted-foreground`, etc. Raw `primitive.*` colors exist but prefer the semantic tokens so dark mode works.

## Conventions

- Prettier + ESLint (`eslint-config-next`) are configured; run `npm run lint` before finishing.
- Server Components by default; add `'use client'` only when needed (forms, theme, animations).
- Remote images are restricted to `images.unsplash.com` in `next.config.js` — add hostnames there before using other remote images.
