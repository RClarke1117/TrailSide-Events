import assert from 'node:assert/strict';
import test from 'node:test';
import { getAvailability, getAvailabilityMeta, shiftMonth } from '../src/lib/availability.ts';

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
