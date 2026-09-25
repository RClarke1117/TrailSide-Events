# Twenty-five upgrades

Ranked for TrailSide after this first public site. Effort is the size of the change. Impact is what a guest or the owners would feel. The list assumes prices, capacity, hours, and real photography are still unpublished, and that the calendar is still a sample.

| Rank | Upgrade | Effort | Impact |
| --- | --- | --- | --- |
| 1 | Add more empty-room details (timber close-up, brick, stove, the trail) beside the photographs already in the gallery. | M | The bar, banquet, set tables, green wall, and lane are in. Detail crops would still help. |
| 2 | Connect real bookings. Set `source` to `live` or swap `getAvailability` to a Worker. | M | Stops the sample disclaimer and makes “check a date” true. |
| 3 | Build the owner admin described in `docs/admin-plan.md`, with Cloudflare Access for Jordan and Brandon. | L | The calendar stays current without a developer. |
| 4 | Turn on `PUBLIC_FORM_ENDPOINT` so inquiries land in trailsidepa@gmail.com without a mail app, and send the guest a plain confirmation. | S | Fewer lost inquiries from blocked mailto. |
| 5 | Publish a real capacity, rate, and hours only after the owners write them down. One clear sheet, not a package maze. | S | Removes the largest trust gap on Gatherings. |
| 6 | Add a named list of the trusted local caterers Jordan mentioned, with permission and links. | S | Makes the BYO-or-caterer choice concrete. |
| 7 | Pull upcoming public events from a file the owners edit, the same way availability works. No invented dates. | S | Gives Happenings a reason to exist week to week. |
| 8 | With permission, quote a small number of real Facebook recommendations instead of only the 100% / 10 figure. | S | Social proof with names, still honest. |
| 9 | Commission a measured floor sketch: where the stove sits, where a table can go, where guests enter. No fake dimensions. | M | Helps couples picture a wedding without a tour. |
| 10 | Offer two inquiry paths that share one form: wedding and everything else, with the event type already chosen. | S | Shorter path from Gatherings, which already deep-links. |
| 11 | Add an “add to email” follow-up the owners can send: date requested, what happens next, phone number. | S | Sets expectations after the form. |
| 12 | Set the production domain in `astro.config.mjs` and add a sitemap plus canonical URLs. | S | Search can index the real house, not a preview host. |
| 13 | Open Graph images made from the real empty-room photography, one per page. | S | Shares on Facebook look like the venue. |
| 14 | A print stylesheet or one-page PDF of the house facts for couples who visit in person. | M | Useful on a tour when the site is not open. |
| 15 | Privacy-respecting analytics (Plausible or Cloudflare Web Analytics) on the inquiry click and form submit. | S | Shows whether the date path is the one people use. |
| 16 | Keyboard and screen-reader pass on the calendar with a local tester, beyond the labels already in the grid. | S | The month grid is the most complex control. |
| 17 | iCal feed of booked dates for the owners’ own phones, generated from the same records. Not a public feed of private names. | M | Stops double-checking two calendars. |
| 18 | A short “day of” checklist grounded in the amenities they actually listed: refrigerator, chafing dishes, coffee, what the renter brings. | S | Reduces day-of surprises. |
| 19 | Trail note: how a guest walking or biking the D&L finds North Main Lane. Copy written on site, not guessed. | S | Fits the name and the neighbors who already use the trail. |
| 20 | Evening and daytime photo pairs, still without people, so the amber-light story matches both kinds of rental. | M | The brand is as much light as it is brick. |
| 21 | A quiet 404 and offline state if Pages or the future availability API fails, with the phone number always visible. | S | The phone is the real booking system. |
| 22 | Component inventory in Storybook or a single `/system` page: buttons, fields, frames, calendar states. | M | Keeps later pages from drifting off the type and color. |
| 23 | Reduced-motion and high-contrast review on a phone in the room, not only in dev tools. | S | Motion is part of the design and has to stay optional. |
| 24 | Structured data for each real public happening once dates exist, separate from the private rental calendar. | S | Public nights can be found. Private names stay off the page. |
| 25 | A staging Pages project tied to this repo so sample availability never shares a URL with the live calendar. | S | Lets the owners preview copy before guests see it. |

Effort: S is a contained change in this codebase or a config switch. M needs new assets, a new API, or a measured visit. L is the admin product: auth, write API, and UI.
