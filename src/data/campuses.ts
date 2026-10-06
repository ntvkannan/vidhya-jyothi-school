// TEMPORARY / DUMMY campus details used by the header's top strip.
// Replace every value below with the final approved details; no UI change is needed.
// mapUrl is a generic placeholder, not a real campus location.

export type Campus = {
  id: string;
  /** Label shown on the top-strip trigger button. */
  shortName: string;
  name: string;
  /** One entry per line. */
  address: string[];
  phone: string;
  email: string;
  location: string;
  mapUrl: string;
};

export const campuses: Campus[] = [
  {
    id: 'btm',
    shortName: 'BTM Layout, Bengaluru',
    name: 'BTM Layout Campus',
    address: ['No. 12, Example Main Road,', 'BTM Layout, Bengaluru – 560076'],
    phone: '+91 80 2668 1234',
    email: 'btm@vidhyajyothischool.org',
    location: 'Bengaluru, Karnataka',
    mapUrl: 'https://www.google.com/maps',
  },
  {
    id: 'hongasandra',
    shortName: 'Hongasandra, Bengaluru',
    name: 'Hongasandra Campus',
    address: ['No. 25, Example Road,', 'Hongasandra, Bengaluru – 560068'],
    phone: '+91 80 2668 5678',
    email: 'hongasandra@vidhyajyothischool.org',
    location: 'Bengaluru, Karnataka',
    mapUrl: 'https://www.google.com/maps',
  },
];
