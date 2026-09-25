# QA

Pass completed against the production build (`npm run build`, then `astro preview` on port 4321). Every public page was captured full-page at three widths. A script also measured horizontal overflow and exercised the calendar and the mobile menu.

Viewports:

- Desktop, 1280×900
- Tablet, 768×1024
- Mobile, 390×844

Pages: Home, The House, Gatherings, Gallery, Happenings, Availability, Inquire, and the 404.

## Checks

- Content stays on the shared column. No page scrolled sideways at any of the three widths (`scrollWidth` matched the viewport).
- Interior pages clear the fixed header. The home hero sits under it on purpose.
- Each page ends with one next step, except Inquire, where the next step is the form itself, and the 404, which offers Check a date.
- The calendar legend, previous/next month controls, and the sample disclaimer are visible on Inquire.
- Open days show the date numeral. Booked, Hold, and Past keep a text label, so status is not color alone.
- The calendar is only on `/availability`. Inquire keeps the form and a Check availability link.
- An open day is a link to `/inquire?date=YYYY-MM-DD`. Opening that URL set Preferred date to `2026-09-28`. The inquire page does not render the calendar.
- `trailsidepa@gmail.com` is visible on the inquiry form.
- At 768 and 390 the header collapses to Menu. Opening it shows The House, Gatherings, Gallery, Happenings, and Check a date on a cream panel (`aria-expanded` becomes true).

## Availability page

The month grid, sample note, holiday note, legend, and display-only copy live on `/availability`. Availability is in the desktop and mobile navigation. The home Check a date button points there. No horizontal overflow at 1280, 768, or 390, and the header still fits at 1040.

## Facebook content pass

Reviews, gatherings, happenings, gallery labels, and the calendar notes were updated from the public Facebook page. The sports card sale renders as upcoming, with a small photo of that sale on the listing. July 4 and the ribbon cutting render as past. Quotes use first names only. Gallery frames use photographs of the room. The card-sale photograph is not in the gallery.

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
| Availability | [availability-desktop.png](availability-desktop.png) | [availability-tablet.png](availability-tablet.png) | [availability-mobile.png](availability-mobile.png) |
| Inquire | [inquire-desktop.png](inquire-desktop.png) | [inquire-tablet.png](inquire-tablet.png) | [inquire-mobile.png](inquire-mobile.png) |
| 404 | [not-found-desktop.png](not-found-desktop.png) | [not-found-tablet.png](not-found-tablet.png) | [not-found-mobile.png](not-found-mobile.png) |

Also: [inquire-date-prefilled.png](inquire-date-prefilled.png) after choosing October 1, and [home-mobile-menu.png](home-mobile-menu.png) with the menu open.
