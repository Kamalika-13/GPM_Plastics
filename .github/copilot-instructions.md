# GMP Plastics Website

## Project guidance

- This is a React + JavaScript single-page site built with Vite and Tailwind CSS v4.
- Keep reusable product information in `src/products.js`; product cards support local images with built-in vector fallbacks.
- Brand and product images are stored under `public/images/`. The About section uses `about-factory.png`.
- Theme: crimson gradient. Palette: wine `#3A0118`, deep crimson `#8B0236`, rose `#C4034C`, ember `#811014`, blush `#FFF3F7`, white. Typeface: Inter (variable, self-hosted via `@fontsource-variable/inter`).
- Do not invent certifications, production capacity, materials, client names, operating hours, or other unsupported claims.
- Describe custom mould development as exploratory and subject to design feasibility, technical requirements, and production suitability.
- The enquiry form validates in the browser and opens WhatsApp with the enquiry prefilled; the visitor must send it in WhatsApp. There is no backend.
- Run `npm run build` to validate changes.
