# Waldorfkindergarten Idstein Website

Static Astro site for the Waldorfkindergarten Idstein e.V. with information for families, staff, and prospective parents. The site highlights the kindergarten’s pedagogical focus, group offerings, downloadable registration forms, and contact details, all set against a watercolor-inspired layout with an optional animated background.

## Project Overview

- **Framework:** [Astro](https://astro.build/) with minimal client-side JavaScript (only for the watercolor background toggle and canvas animation).
- **Pages:**
  - `/` – Start page with hero content, program highlights, and a watercolor canvas accent.
  - `/gruppen` – Overview of Wiegenstube, Familiengruppe, and Kindergarten group details.
  - `/downloads` – Direct links to registration forms, fee schedule, and association statutes.
  - `/kontakt` – Contact options, address, and opening hours.
  - `/impressum`, `/datenschutz`, `/intern` – Legal notice, privacy policy, and internal link hub.
- **Design tokens:** Typography uses Cormorant Infant (headings) and Quicksand (body), with accent color `#a10d59`. A background wash can be toggled via the “Animierter Hintergrund an/aus” button in the footer.

## Getting Started

1. Install dependencies (Node 18+ recommended):

   ```bash
   npm install
   ```

2. Start the local dev server at `http://localhost:4321`:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Project Structure

- `src/layouts/Layout.astro` – Global shell with header nav, footer, and watercolor toggle logic.
- `src/pages/` – Individual routes for start page, groups, downloads, contact, legal pages, and internal links.
- `src/components/` – Shared pieces like the watercolor canvas (`watercolor-canvas.astro` and `watercolor-canvas.client.ts`).
- `public/` – Static assets, including PDFs linked from the downloads page and images like `logo-tinted.png` and `background-fallback.png`.

## Conventions

- Use semantic HTML and accessible labels; keep filenames lowercase with hyphens.
- Keep styling consistent with the existing palette and typography.
- Place new documents or media under `public/` and reference them with root-relative URLs (e.g., `/downloads/new-form.pdf`).
