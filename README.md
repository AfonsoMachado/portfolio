# Afonso Machado Portfolio

Multilingual portfolio built with Next.js 16.3.2, App Router, TypeScript, Tailwind CSS 4, and a simple clean architecture split.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root route redirects to `pt-br`, which is the default locale.

## Available locales

- `pt-br`
- `en`
- `es`

## Architecture

```text
src/
  app/              # routes, layouts, locale entry points
  core/
    application/    # use cases
    domain/         # entities and repository contracts
    infrastructure/ # static content source and repository implementation
  presentation/     # UI components
  shared/           # shared locale config
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Deploy

This project is ready for Vercel:

1. Import the repository into Vercel.
2. Keep the detected framework as `Next.js`.
3. Use the default build command: `npm run build`.

No extra environment variables are required for the current version.
