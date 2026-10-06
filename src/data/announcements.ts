export type Announcement = {
  day: string;
  month: string;
  title: string;
  description: string;
};

export const announcements: Announcement[] = [
  {
    day: '25',
    month: 'Sep',
    title: 'Admissions Open for 2026 – 27',
    description: 'Nursery to High School. Apply now!',
  },
  {
    day: '20',
    month: 'Sep',
    title: 'Annual Sports Day',
    description: 'Will be held on 15th November 2025.',
  },
  {
    day: '12',
    month: 'Sep',
    title: 'Dasara Celebration',
    description: 'Cultural program on 10th October 2025.',
  },
  {
    day: '05',
    month: 'Sep',
    title: "Teacher's Day Celebration",
    description: 'A special day to honour our teachers.',
  },
];
