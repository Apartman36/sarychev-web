# sarychev-web

Bilingual personal website for Antonii Sarychev - AI/LLM Developer and AI Integration Engineer.

The site is a static Astro casebook for AI integration work: agents, MCP tools, RAG pipelines, document processing, async backends, and focused business MVPs.

## Stack

- Astro
- TypeScript
- Tailwind CSS v4
- MDX
- Astro Content Collections
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deployment is handled by `.github/workflows/deploy.yml`.

The current GitHub Pages project URL is:

```text
https://apartman36.github.io/sarychev-web/
```

Astro is configured for a repository project path:

```js
site: "https://apartman36.github.io"
base: "/sarychev-web/"
```

To switch to a custom domain later, update `astro.config.mjs` and `src/utils/site.ts`:

- set `site` / `siteUrl` to the custom domain
- set `base` / `basePath` to `/`
- add the custom domain in GitHub Pages settings

## Content

Work case studies live in:

```text
src/content/work/en
src/content/work/ru
```

To add a new case:

1. Add an English MDX file to `src/content/work/en`.
2. Add a Russian MDX file to `src/content/work/ru`.
3. Use the same `canonicalSlug` in both files.
4. Set `featured: true` only if the case should appear on the homepage.
5. Keep claims specific and avoid invented metrics.

## Notes

- npm only
- no pnpm required
- no GitHub CLI required
- no API keys required
- no backend runtime
- no real LLM chatbot
- no contact form
