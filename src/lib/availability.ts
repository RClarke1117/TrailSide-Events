import file from '../../data/availability.json' with { type: 'json' };

export type DateStatus = 'open' | 'booked' | 'hold';

export interface AvailabilityRecord {
  date: string;
  status: DateStatus;
  note?: string;
  updatedAt?: string;
}

export interface AvailabilityMeta {
  source: 'sample' | 'live';
  disclaimer: string;
  updatedAt?: string;
  publicNotes: string[];
}

const MONTH = /^\d{4}-\d{2}$/;

function daysInMonth(year: number, monthIndex: number): number {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

export function todayInLehighton(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

export function currentMonth(now = new Date()): string {
  return todayInLehighton(now).slice(0, 7);
}

export function getAvailabilityMeta(): AvailabilityMeta {
  return {
    source: file.source === 'live' ? 'live' : 'sample',
    disclaimer: file.disclaimer,
    updatedAt: file.updatedAt,
    publicNotes: file.publicNotes ?? [],
  };
}

/**
 * Availability for one calendar month.
 * Dates absent from the data file are open.
 * Swap this function's body for a Worker, D1, or KV read later — callers stay the same.
 */
export async function getAvailability(month: string): Promise<AvailabilityRecord[]> {
  if (!MONTH.test(month)) {
    throw new Error(`Invalid month "${month}". Use YYYY-MM.`);
  }

  const year = Number(month.slice(0, 4));
  const monthNumber = Number(month.slice(5, 7));
  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error(`Invalid month "${month}".`);
  }

  const byDate = new Map(file.records.map((record) => [record.date, record]));
  const count = daysInMonth(year, monthNumber - 1);
  const records: AvailabilityRecord[] = [];

  for (let day = 1; day <= count; day += 1) {
    const date = `${month}-${String(day).padStart(2, '0')}`;
    const explicit = byDate.get(date);
    if (explicit && explicit.status !== 'open' && explicit.status !== 'booked' && explicit.status !== 'hold') {
      throw new Error(`Invalid status for ${date}.`);
    }
    records.push({
      date,
      status: explicit?.status ?? 'open',
      note: explicit?.note,
      updatedAt: explicit?.updatedAt ?? file.updatedAt,
    });
  }

  return records;
}

export function shiftMonth(month: string, delta: number): string {
  const year = Number(month.slice(0, 4));
  const monthNumber = Number(month.slice(5, 7));
  const next = new Date(Date.UTC(year, monthNumber - 1 + delta, 1));
  return `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}`;
}

export function monthLabel(month: string): string {
  const year = Number(month.slice(0, 4));
  const monthNumber = Number(month.slice(5, 7));
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, monthNumber - 1, 1)));
}

export function weekdayIndex(date: string): number {
  const year = Number(date.slice(0, 4));
  const monthNumber = Number(date.slice(5, 7));
  const day = Number(date.slice(8, 10));
  return new Date(Date.UTC(year, monthNumber - 1, day)).getUTCDay();
}
