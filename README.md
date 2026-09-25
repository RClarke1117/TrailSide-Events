# TrailSide Events PA

Marketing site for [TrailSide Events PA](https://www.facebook.com/trailsideeventspa), a historic wedding and event venue at 201 North Main Lane, Lehighton, Pennsylvania. Designed and built by [Clarke Design Studio](https://clarkedesignstudio.com).

The site is a static Astro build meant for Cloudflare Pages. It tells the story of the house, shows the kinds of gatherings the owners have described publicly, holds a gallery of clearly marked photograph placeholders, lists only verified public dates, and routes every page toward a date inquiry.

## Run locally

Requires Node.js 22+.

```bash
npm install
npm run dev
```

The dev server prints a local URL. Other commands:

```bash
npm test          # availability data-layer checks
npm run build     # static site in dist/
npm run preview   # serve the production build
```

Copy `.env.example` to `.env` if you want the inquiry form to POST to Formspree or a Worker. With `PUBLIC_FORM_ENDPOINT` empty, the form opens a `mailto:` to trailsidepa@gmail.com.

## Deploy to Cloudflare Pages

1. Connect this repository.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Environment variable (optional): `PUBLIC_FORM_ENDPOINT` — see [docs/forms.md](docs/forms.md).
5. Set `site` in `astro.config.mjs` once the production domain is chosen. It is intentionally unset so the project does not invent a URL.

`public/_headers` ships security headers Pages will apply.

A later admin calendar can sit on a Cloudflare Worker, D1, or KV without changing the page. The read path is `getAvailability(month)` in `src/lib/availability.ts`. See [docs/admin-plan.md](docs/admin-plan.md) and [docs/availability.md](docs/availability.md).

## Typography

Display type is Fraunces. Interface and body type is Schibsted Grotesk. The pairing is explained in [docs/typography.md](docs/typography.md).

## What is real, and what is not

Facts are taken from the owners’ May 2, 2024 Times News interview, the November 22, 2025 Times News report of the Carbon County Chamber award, the chamber listing, and the brief for this project. Prices, guest capacity, hours, unpublished reviews, and upcoming events are not invented. The availability calendar ships with a labeled sample dataset.

Gallery frames are placeholders driven by `data/gallery.json`. Set `image` only for a venue photograph with no people. Public events live in `data/events.json` and are marked upcoming or past from the start date. Photographs are omitted unless they can be confirmed to contain no people. Facebook recommendations are quoted from the public reviews page.

## Docs

- [docs/forms.md](docs/forms.md) — inquiry delivery
- [docs/availability.md](docs/availability.md) — editing the calendar
- [docs/admin-plan.md](docs/admin-plan.md) — future owner login
- [docs/typography.md](docs/typography.md) — typefaces
- [docs/qa.md](docs/qa.md) — responsive QA
- [docs/twenty-five-upgrades.md](docs/twenty-five-upgrades.md) — ranked next steps
