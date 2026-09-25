# QA

Pass completed against the production build (`npm run build`, then `astro preview` on port 4321). Every public page was captured full-page at three widths. A script also measured horizontal overflow and exercised the calendar and the mobile menu.

Viewports:

- Desktop, 1280×900
- Tablet, 768×1024
- Mobile, 390×844

Pages: Home, The House, Gatherings, Gallery, Happenings, Inquire, and the 404.

## Checks

- Content stays on the shared column. No page scrolled sideways at any of the three widths (`scrollWidth` matched the viewport).
- Interior pages clear the fixed header. The home hero sits under it on purpose.
- Each page ends with one next step, except Inquire, where the next step is the form itself, and the 404, which offers Check a date.
- The calendar legend, previous/next month controls, and the sample disclaimer are visible on Inquire.
- Open days show the date numeral. Booked, Hold, and Past keep a text label, so status is not color alone.
- Clicking Next month, then the open day October 1, 2026, set Preferred date to `2026-10-01` and announced that the day is a request, not a booking.
- `trailsidepa@gmail.com` is visible on the inquiry form.
- At 768 and 390 the header collapses to Menu. Opening it shows The House, Gatherings, Gallery, Happenings, and Check a date on a cream panel (`aria-expanded` becomes true).

## Fixes during this pass

- The full navigation was still inline at tablet width, because the menu only appeared below 760px. The menu now takes over at 980px, before the links collide with the wordmark.
- Every open day was labeled “Open”, which crowded the cells on a phone. Those labels are now available to assistive tech and hidden visually. Booked, Hold, and Past stay visible. Cell height on small screens was reduced so the numerals sit inside the day.
- The last gallery frame occupied seven of twelve columns and left a gap. It now spans the row.
- The grand-opening title on Happenings was body type. It now uses the same serif as the other section titles.

## Screenshots

Stored in this folder:

| Page | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Home | [home-desktop.png](home-desktop.png) | [home-tablet.png](home-tablet.png) | [home-mobile.png](home-mobile.png) |
| The House | [the-house-desktop.png](the-house-desktop.png) | [the-house-tablet.png](the-house-tablet.png) | [the-house-mobile.png](the-house-mobile.png) |
| Gatherings | [gatherings-desktop.png](gatherings-desktop.png) | [gatherings-tablet.png](gatherings-tablet.png) | [gatherings-mobile.png](gatherings-mobile.png) |
| Gallery | [gallery-desktop.png](gallery-desktop.png) | [gallery-tablet.png](gallery-tablet.png) | [gallery-mobile.png](gallery-mobile.png) |
| Happenings | [happenings-desktop.png](happenings-desktop.png) | [happenings-tablet.png](happenings-tablet.png) | [happenings-mobile.png](happenings-mobile.png) |
| Inquire | [inquire-desktop.png](inquire-desktop.png) | [inquire-tablet.png](inquire-tablet.png) | [inquire-mobile.png](inquire-mobile.png) |
| 404 | [not-found-desktop.png](not-found-desktop.png) | [not-found-tablet.png](not-found-tablet.png) | [not-found-mobile.png](not-found-mobile.png) |

Also: [inquire-date-prefilled.png](inquire-date-prefilled.png) after choosing October 1, and [home-mobile-menu.png](home-mobile-menu.png) with the menu open.
