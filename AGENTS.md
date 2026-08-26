<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guidelines

- Preserve the clean architecture boundaries: domain and application layers must not depend on infrastructure, presentation, or framework code.
- Keep Portuguese (Brazil) as the default locale and update `pt-br`, `en`, and `es` content together when changing user-facing copy.
- Reuse the existing presentation components, semantic theme tokens, and icon components. Do not introduce hard-coded color values in Tailwind classes.
- Add or update colocated Vitest tests for changes to domain logic, use cases, and interactive UI behavior.
- Before committing, run `npm run format:check`, `npm run lint`, and `npm run test:run`. Run `npm run build` when changing Next.js configuration, routes, or production behavior.
- Work from `development` and merge changes into `master` through a pull request. Do not push directly to `master`.
- The `Validate` check must pass before merging. Pushes to `master` trigger the Vercel production deployment workflow.
- Never commit `.vercel`, `.env*`, Vercel tokens, or GitHub Actions secrets. The deployment workflow uses `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` repository secrets.
