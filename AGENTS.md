# Repository Guidelines

## Project Structure & Module Organization
- `src/layouts/Layout.astro` holds the global shell (head, nav, footer, tokens). Reuse it for all pages.
- `src/pages/` contains route files; put new pages here (e.g., `downloads.astro`, `gruppen.astro`). Nested folders map to routes.
- `src/components/` is empty; add reusable UI or data utilities there as the site grows.
- `public/` serves static assets at the web root; place images, PDFs, and icons here.
- Configuration: `astro.config.mjs` for site-level settings; `package.json` for scripts and deps; `tsconfig.json` keeps Astro defaults.

## Build, Test, and Development Commands
- `npm install` – install dependencies.
- `npm run dev` – start Astro dev server with live reload (default on http://localhost:4321).
- `npm run build` – produce static output in `dist/`.
- `npm run preview` – serve the built site locally to verify production output.

## Coding Style & Naming Conventions
- Use Astro/Markdown/MDX for content pages; prefer `.astro` components for layout logic.
- Typography currently uses Google Fonts Alice (headings) and Manrope (body) with accent `#a10d59`. Keep palette consistent.
- Favor semantic HTML5, accessible labels, and minimal JS. If adding interactivity, colocate scripts inside `.astro` islands.
- Keep file names lowercase/kebab or snake (e.g., `gruppen.astro`, `kontakt.astro`); avoid spaces in asset names.

## Testing Guidelines
- No automated tests yet; rely on manual checks after changes.
- Verify pages in dev and `npm run preview`: navigation links, hero/CTA buttons, downloads, responsive layout (desktop and mobile).
- Run a quick Lighthouse/axe check in the browser when altering layout or contrast.

## Commit & Pull Request Guidelines
- Use clear, imperative commit messages (`Add gruppen page`, `Refine layout spacing`).
- For PRs include: summary of changes, affected pages, screenshots (desktop + mobile) for visual updates, and manual test notes (dev/preview).

## Migration & Content Tips
- Move existing HTML copy into `.astro` pages or Markdown for maintainability; keep shared metadata in `Layout.astro`.
- Place images/PDFs in `public/` and reference with root-relative URLs (e.g., `/downloads/beitragsordnung.pdf`).
