# TrailSide Events PA

Marketing site for [TrailSide Events PA](https://www.facebook.com/trailsideeventspa), a historic wedding and event venue at 201 North Main Lane, Lehighton, Pennsylvania. Designed and built by [Clarke Design Studio](https://clarkedesignstudio.com).

The site is a static Astro build meant for Cloudflare Pages. It tells the story of the house, shows the kinds of gatherings the owners have described publicly, holds photographs of the room, lists only verified public dates, and routes every page toward a date inquiry.

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

The inquiry form POSTs to FormSubmit for trailsidepa@gmail.com. Copy `.env.example` to `.env` only if you want `PUBLIC_FORM_ENDPOINT` to replace that URL.

## Deploy to Cloudflare Pages

The current production site is [https://trailside-events.pages.dev](https://trailside-events.pages.dev), project `trailside-events` on the Clarke Pages account (direct upload, same pattern as Milk Street Distillery).

To publish a new build:

```bash
npm run build
npx wrangler pages deploy dist --project-name trailside-events --branch main
```

`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` must be set for that command. Wrangler is not a project dependency; `npx wrangler` is enough.

Git-connected deploys use the same project:

1. Build command: `npm run build`
2. Build output directory: `dist`
3. Environment variable (optional): `PUBLIC_FORM_ENDPOINT` — see [docs/forms.md](docs/forms.md). `PUBLIC_` values are inlined at build time.
4. Set `site` in `astro.config.mjs` to `https://trailside-events.pages.dev`, or to the custom domain once one is attached.

`public/_headers` ships security headers Pages will apply.

A later admin calendar can sit on a Cloudflare Worker, D1, or KV without changing the page. The read path is `getAvailability(month)` in `src/lib/availability.ts`. See [docs/admin-plan.md](docs/admin-plan.md) and [docs/availability.md](docs/availability.md).

## Typography

Display type is Fraunces, in the plain optical-size cut. Interface and body type is Outfit. The pairing is explained in [docs/typography.md](docs/typography.md).

## What is real, and what is not

Facts are taken from the owners’ May 2, 2024 Times News interview, the November 22, 2025 Times News report of the Carbon County Chamber award, the chamber listing, and the brief for this project. Prices, guest capacity, hours, unpublished reviews, and upcoming events are not invented. The availability calendar ships with a labeled sample dataset.

Gallery frames are driven by `data/gallery.json`. Public events live in `data/events.json` and are marked upcoming or past from the start date. The sports-card sale photograph is a thumbnail on that event only. Facebook recommendations are quoted from the public reviews page.

## Docs

- [docs/forms.md](docs/forms.md) — inquiry delivery
- [docs/availability.md](docs/availability.md) — editing the calendar
- [docs/admin-plan.md](docs/admin-plan.md) — future owner login
- [docs/typography.md](docs/typography.md) — typefaces
- [docs/qa.md](docs/qa.md) — responsive QA
- [docs/twenty-five-upgrades.md](docs/twenty-five-upgrades.md) — ranked next steps
