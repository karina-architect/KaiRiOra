# KaiRiOra compliance-first production website

Languages: English, Spanish, Portuguese, French, German, Russian and Hungarian.

The marketing text has been rewritten to focus on lawful cross-border work, compliance, transparency and professional advice. The calculators use user-entered assumptions and do not promise tax savings.

Upload the project contents to the root of a clean GitHub repository and deploy with Vercel. Connect `/api/quote` and `/api/labour-law-assistant` before production use. Update privacy and legal entity details before launch.

## Environment variables

Copy `.env.example` to `.env.local` for local development and set real values:

- `NEXT_PUBLIC_SITE_URL` — public URL of the site (e.g. `https://example.com`)
- `QUOTE_API_KEY` — API key for the quote backend
- `LABOUR_LAW_ASSISTANT_API_KEY` — API key for the labour law assistant backend
- `SENTRY_DSN` (optional) — Sentry DSN for error tracking

The app validates environment variables at startup via `src/config/env.ts` and fails fast when required values are missing.

## Security headers

Global HTTP security headers are set in `next.config.mjs`, including:

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

## Development quality gates

This repository enforces baseline quality checks:

- TypeScript type check: `npm run typecheck`
- ESLint: `npm run lint`
- Prettier formatting check: `npm run format:check`
- Production build check: `npm run build`

### Local setup

```bash
npm install
npm run prepare
```

### Git hooks

A pre-commit hook runs `lint-staged` to auto-fix lint/format issues on staged files.

### CI

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push and pull requests targeting `main`.
