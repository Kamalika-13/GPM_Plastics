# GMP Plastics Website

A responsive React + JavaScript website for GMP Plastics, built with Vite and Tailwind CSS v4. Product and brand imagery is currently represented by local vector product illustrations, so the site works without catalogue assets.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The static production output is written to `dist/`.

## Deploy

### Vercel

Import this repository into Vercel and use the Vite preset, or configure:

- Build command: `npm run build`
- Output directory: `dist`

### Other static hosts

Run `npm run build` and publish the contents of `dist/`. The site uses client-side interactions but no client-side router, so standard static hosting is sufficient.

## Theme and hero media

- Crimson gradient theme with Inter (self-hosted via `@fontsource-variable/inter`). Colour tokens are CSS variables at the top of `src/styles.css`.
- Hero video: `public/videos/hero.mp4` (poster `public/images/hero-poster.jpg`). Hero image: `public/images/hero-products.webp`. These are generated illustrations; replace them with real factory or product footage/photos using the same filenames (or edit the paths at the top of `src/App.jsx`). The video pauses automatically for visitors with reduced-motion enabled and has a pause button.

## Replaceable imagery

- The current header and footer logo is `public/images/gmp-logo.png`.
- The About section uses the GMP Plastics manufacturing photo at `public/images/about-factory.png`.
- Put the catalogue at `public/images/product-catalogue.jpg` for future reference/use.
- Product cards use built-in vector illustrations until individual images are supplied. To use real product images, add files under `public/images/products/` and set each product's optional `image` property in `src/products.js`; a failed image load falls back to the illustration.

Product image paths: `ball-cup.png`, `mango-cup.png`, `strawberry-cup.png`, `matka-cup.png`, `custom-cup.png`, `curd-cup.png`, `ice-cream-spoon.png`, and `wooden-spoon.png`.

## Enquiry form

The form validates fields in the browser but is not connected to a backend. After successful validation, it opens WhatsApp with the enquiry details prefilled; the visitor must review and send the message in WhatsApp. Connect an email service, CRM, or server endpoint for server-side lead capture.
