import assert from 'node:assert/strict';
import test from 'node:test';
import { getAvailability, getAvailabilityMeta, shiftMonth } from '../src/lib/availability.ts';
import { eventTiming, listEvents } from '../src/lib/events.ts';

test('posted availability is live, not a sample grid', () => {
  const meta = getAvailabilityMeta();
  assert.equal(meta.source, 'live');
  assert.match(meta.disclaimer, /request/i);
});

test('November and December 2026 keep the posted open days', async () => {
  const november = await getAvailability('2026-11');
  const december = await getAvailability('2026-12');
  for (const date of ['2026-11-06', '2026-11-13', '2026-11-15', '2026-11-20', '2026-11-22', '2026-11-27', '2026-11-28', '2026-11-29']) {
    assert.equal(november.find((record) => record.date === date)?.status, 'open');
  }
  assert.equal(november.find((record) => record.date === '2026-11-07')?.status, 'booked');
  assert.equal(november.find((record) => record.date === '2026-11-02')?.status, 'open');
  for (const date of ['2026-12-04', '2026-12-05', '2026-12-06', '2026-12-11', '2026-12-12', '2026-12-13', '2026-12-18', '2026-12-19', '2026-12-20', '2026-12-27']) {
    assert.equal(december.find((record) => record.date === date)?.status, 'open');
  }
  assert.equal(december.find((record) => record.date === '2026-12-25')?.status, 'booked');
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
