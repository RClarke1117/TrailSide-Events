# Admin plan

Jordan and Brandon Cummins will later sign in and mark dates booked, held, or open. This pass does not build that login or the admin screens. It only fixes the shape of the data so those screens can be added without rewriting the public calendar.

## What exists now

- `data/availability.json` is the only source of dates.
- `src/lib/availability.ts` exposes `getAvailability(month)` and `getAvailabilityMeta()`.
- The inquire page renders whatever that function returns.
- The public UI cannot write dates.

## Schema

Each record:

| Field | Type | Required | Meaning |
| --- | --- | --- | --- |
| `date` | `YYYY-MM-DD` | Yes | Venue-local calendar day |
| `status` | `open` \| `booked` \| `hold` | Yes | Shown on the public grid |
| `note` | string | No | Private or public note. Public pages currently expose it only to assistive tech. |
| `updatedAt` | `YYYY-MM-DD` or ISO timestamp | No | Last write |

A month response is an array of those records, one per day. Unlisted days are open when the source is the JSON file. An API may return the same full month or only the exceptions; the module should normalize either into a full month before the UI sees it.

Suggested table or KV value, one row per date:

```sql
CREATE TABLE availability (
  date TEXT PRIMARY KEY,
  status TEXT NOT NULL CHECK (status IN ('open', 'booked', 'hold')),
  note TEXT,
  updated_at TEXT NOT NULL,
  updated_by TEXT
);
```

`open` rows can be deleted instead of stored. The read function fills them back in.

## Read swap

Replace the body of `getAvailability` with a fetch to a Worker:

`GET /api/availability?month=2026-10`

Response:

```json
{
  "source": "live",
  "disclaimer": "",
  "updatedAt": "2026-10-01T15:00:00Z",
  "records": [{ "date": "2026-10-03", "status": "booked", "updatedAt": "2026-10-01T15:00:00Z" }]
}
```

Keep the exported function signature. The calendar component should not learn about D1 or KV.

## Write API, later

`PUT /api/availability/:date` with `{ "status", "note" }`, authenticated. The admin UI is the only caller. The public site stays read-only.

## Auth options

Recommended: **Cloudflare Access** in front of `/admin` and `/api/availability` writes. Jordan and Brandon get email one-time pins. No passwords to store. Access sits on the Worker or Pages route. The public calendar route stays open.

Also reasonable:

- **Magic link** issued by a Worker to `trailsidepa@gmail.com` only. Simple, one inbox, easy to outgrow if staff are added.
- **A shared password** in a Worker secret. Fast to build, poor to share, and easy to leak. Use only as a short bridge.

Do not put an admin password in this repository or in `PUBLIC_` environment variables. Those are shipped to the browser.

## Admin flow to build later

1. Owner opens `/admin` and passes Cloudflare Access.
2. The month grid matches the public calendar, with every day clickable.
3. Choosing a day sets open, booked, or hold, plus an optional note.
4. Save calls the write API. `updated_by` stores the Access email.
5. The public `getAvailability` read sees the new row on the next request. If the marketing site remains fully static, the Worker can serve `/api/availability` at runtime so a JSON rebuild is no longer required.

## Explicitly out of scope until that project

Accounts, roles, payments, checkout, automatic holds when a guest clicks a day, and emailing a contract. A click on the public calendar remains a request.
