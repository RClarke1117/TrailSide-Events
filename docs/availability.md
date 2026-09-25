# Availability calendar

The calendar on `/inquire` is display-only. Open days can be clicked to prefill the inquiry form. Booked and held days cannot. Past open days are marked Past and cannot be requested from the grid. Nothing is reserved, held, or paid for on the site.

A note above the grid says the shipped dates are a sample until Jordan and Brandon connect real bookings.

## Edit the sample file

Booked and held dates live in `data/availability.json`.

```json
{
  "source": "sample",
  "disclaimer": "Illustrative sample data...",
  "updatedAt": "2026-09-20",
  "records": [
    {
      "date": "2026-10-03",
      "status": "booked",
      "note": "SAMPLE — intimate wedding",
      "updatedAt": "2026-09-20"
    }
  ]
}
```

- `date` is `YYYY-MM-DD` in the venue’s calendar (Eastern Time).
- `status` is `booked` or `hold`. Dates not listed are treated as open.
- `note` is optional and is read to assistive tech with the day. Keep the word SAMPLE until the file is real.
- Set `"source": "live"` only when the records are the owners’ actual calendar. The sample banner switches to the file’s `disclaimer`.
- `publicNotes` is optional copy shown beside the grid. Use it for statements the owners have published that are not a day-by-day list. The August 11, 2026 note about remaining November and December holiday dates, and weekday availability, lives here. Those exact days were on a graphic, so they are not entered as booked or open records.

Rebuild and redeploy after editing. The static site reads this file at build time through `getAvailability`.

## Data access

Pages and the calendar script call `getAvailability(month)` in `src/lib/availability.ts`.

```ts
getAvailability(month: string): Promise<AvailabilityRecord[]>

type AvailabilityRecord = {
  date: string;
  status: 'open' | 'booked' | 'hold';
  note?: string;
  updatedAt?: string;
};
```

`month` is `YYYY-MM`. The function returns one record per day, including open days. A future API should keep that shape. See `docs/admin-plan.md`.

`npm test` checks the sample month, the sample flag, and month navigation math.
