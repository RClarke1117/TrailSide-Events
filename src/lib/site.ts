export const site = {
  name: 'TrailSide Events PA',
  shortName: 'TrailSide',
  tagline: 'A historic performance and event venue in Lehighton, Pennsylvania.',
  description:
    'TrailSide Events PA is a historic wedding and event house at 201 North Main Lane, Lehighton — rustic elegance, modern amenities, and dates confirmed by the owners.',
  address: {
    street: '201 North Main Lane',
    city: 'Lehighton',
    region: 'PA',
    postal: '18235',
    line: '201 North Main Lane, Lehighton, PA 18235',
  },
  phoneDisplay: '(610) 810-2982',
  phoneTel: '+16108102982',
  email: 'trailsidepa@gmail.com',
  facebook: 'https://www.facebook.com/trailsideeventspa',
  maps: 'https://www.google.com/maps/search/?api=1&query=201+North+Main+Lane+Lehighton+PA+18235',
  owners: 'Jordan and Brandon Cummins',
  studio: {
    name: 'Clarke Design Studio',
    url: 'https://clarkedesignstudio.com',
  },
} as const;

export const eventTypes = [
  { value: 'intimate-wedding', label: 'Intimate wedding' },
  { value: 'bridal-shower', label: 'Bridal shower' },
  { value: 'baby-shower', label: 'Baby shower' },
  { value: 'birthday', label: 'Birthday celebration' },
  { value: 'private-party', label: 'Private party' },
  { value: 'performance', label: 'Performance' },
  { value: 'community', label: 'Community event' },
  { value: 'conference', label: 'Conference or meeting' },
  { value: 'other', label: 'Something else' },
] as const;

export const nav = [
  { href: '/the-house', label: 'The House' },
  { href: '/gatherings', label: 'Gatherings' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/happenings', label: 'Happenings' },
] as const;

export const formEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT?.trim() || '';
