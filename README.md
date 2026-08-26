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
npm run format
npm run format:check
npm run test
npm run test:run
npm run build
npm run start
```

`npm run test` executa os testes em modo watch. Use `npm run test:run` para uma unica execucao, como em ambientes de CI.

## Deploy

This project is ready for Vercel:

1. Import the repository into Vercel.
2. Keep the detected framework as `Next.js`.
3. Use the default build command: `npm run build`.

No extra environment variables are required for the current version.

### Web Analytics

Vercel Web Analytics is integrated through `@vercel/analytics`. Enable it in the project's **Analytics** section in the Vercel dashboard, then deploy to begin collecting production page views.

### Continuous deployment

Pushes to `master` run lint and unit tests in GitHub Actions before creating a Vercel production deployment.

Every pull request also runs lint and unit tests. The `master` branch requires this validation and an approved pull request before changes can be merged.

Configure these repository secrets in `Settings > Secrets and variables > Actions`:

- `VERCEL_TOKEN`: a Vercel access token.
- `VERCEL_ORG_ID`: the `orgId` from the local `.vercel/project.json` file.
- `VERCEL_PROJECT_ID`: the `projectId` from the local `.vercel/project.json` file.
