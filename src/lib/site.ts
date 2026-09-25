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
  facebookReviews: 'https://www.facebook.com/trailsideeventspa/reviews',
  maps: 'https://www.google.com/maps/search/?api=1&query=201+North+Main+Lane+Lehighton+PA+18235',
  owners: 'Jordan and Brandon Cummins',
  studio: {
    name: 'Clarke Design Studio',
    url: 'https://clarkedesignstudio.com',
  },
} as const;

export const eventTypes = [
  { value: 'wedding-reception', label: 'Wedding or reception' },
  { value: 'rehearsal-dinner', label: 'Rehearsal dinner' },
  { value: 'reunion', label: 'Reunion' },
  { value: 'shower', label: 'Shower' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'holiday-party', label: 'Holiday party' },
  { value: 'corporate', label: 'Corporate party' },
  { value: 'community', label: 'Community event' },
  { value: 'performance', label: 'Live music or performance' },
  { value: 'other', label: 'Something else' },
] as const;

export const nav = [
  { href: '/the-house', label: 'The Space' },
  { href: '/gatherings', label: 'Gatherings' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/happenings', label: 'Happenings' },
  { href: '/availability', label: 'Availability and booking' },
] as const;

export const formEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT?.trim() || '';
