import file from '../../data/events.json' with { type: 'json' };

export interface PublicEvent {
  id: string;
  title: string;
  start: string | null;
  end: string | null;
  place: string;
  hosts: string;
  summary: string;
  source: string;
  image?: string;
  imageAlt?: string;
}

export type EventTiming = 'upcoming' | 'past' | 'undated';

const zone = 'America/New_York';

export function eventTiming(event: PublicEvent, now = new Date()): EventTiming {
  if (!event.start) return 'undated';
  const start = new Date(event.start);
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: zone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
  const startDay = new Intl.DateTimeFormat('en-CA', {
    timeZone: zone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(start);
  return startDay >= today ? 'upcoming' : 'past';
}

export function formatEventWhen(event: PublicEvent): string {
  if (!event.start) return 'Date not published';
  const start = new Date(event.start);
  const date = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: zone,
  }).format(start);
  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: zone,
  }).format(start);
  if (!event.end) return `${date}, ${time}`;
  const endTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: zone,
  }).format(new Date(event.end));
  return `${date}, ${time}–${endTime}`;
}

export function listEvents(now = new Date()) {
  const events = file.events as PublicEvent[];
  return {
    upcoming: events.filter((event) => eventTiming(event, now) === 'upcoming'),
    past: events.filter((event) => eventTiming(event, now) === 'past'),
    undated: events.filter((event) => eventTiming(event, now) === 'undated'),
  };
}
