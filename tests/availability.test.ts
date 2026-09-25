import assert from 'node:assert/strict';
import test from 'node:test';
import { getAvailability, getAvailabilityMeta, shiftMonth } from '../src/lib/availability.ts';
import { eventTiming, listEvents } from '../src/lib/events.ts';

test('sample meta stays marked as sample', () => {
  const meta = getAvailabilityMeta();
  assert.equal(meta.source, 'sample');
  assert.match(meta.disclaimer, /illustrative/i);
});

test('October 2026 expands booked, hold, and open days', async () => {
  const records = await getAvailability('2026-10');
  assert.equal(records.length, 31);
  assert.equal(records.find((record) => record.date === '2026-10-03')?.status, 'booked');
  assert.equal(records.find((record) => record.date === '2026-10-10')?.status, 'hold');
  assert.equal(records.find((record) => record.date === '2026-10-01')?.status, 'open');
  assert.equal(records.every((record) => record.updatedAt), true);
});

test('shiftMonth crosses the year', () => {
  assert.equal(shiftMonth('2026-12', 1), '2027-01');
  assert.equal(shiftMonth('2026-01', -1), '2025-12');
});

test('rejects a bad month', async () => {
  await assert.rejects(() => getAvailability('2026-13'));
});

test('sports card sale is upcoming on Sep 25 2026 and July 4 is past', () => {
  const now = new Date('2026-09-25T15:00:00-04:00');
  const { upcoming, past, undated } = listEvents(now);
  assert.equal(upcoming.some((event) => event.id === 'sports-card-sale-2026'), true);
  assert.equal(past.some((event) => event.id === 'july-4-highlight'), true);
  assert.equal(undated.some((event) => event.id === 'live-music-nights'), false);
  assert.equal(eventTiming({ id: 'x', title: '', start: null, end: null, place: '', hosts: '', summary: '', source: '' }, now), 'undated');
});
