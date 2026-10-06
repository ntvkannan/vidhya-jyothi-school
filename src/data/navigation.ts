// Single source of truth for the site's information architecture.
// Used by the Header, the Footer and the inner pages.

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story & Legacy', href: '/about/our-story' },
      { label: 'Management', href: '/about/management' },
      { label: "Principal's Message", href: '/about/principal' },
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: 'Our Teachers', href: '/about/teachers' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Curriculum', href: '/academics/curriculum' },
      { label: 'Academic Calendar', href: '/academics/academic-calendar' },
      { label: 'Achievements', href: '/academics/achievements' },
    ],
  },
  {
    label: 'Student Life',
    href: '/student-life',
    children: [
      { label: 'Activities & Clubs', href: '/student-life/activities-clubs' },
      { label: 'Sports', href: '/student-life/sports' },
      { label: 'School Events', href: '/student-life/school-events' },
      { label: 'Student Leadership', href: '/student-life/student-leadership' },
    ],
  },
  {
    label: 'Campus',
    href: '/campus',
    children: [
      { label: 'Facilities', href: '/campus/facilities' },
      { label: 'Gallery', href: '/campus/gallery' },
      { label: 'Virtual Tour', href: '/campus/virtual-tour' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'Admission Process', href: '/admissions/admission-process' },
      {
        label: 'Eligibility & Documents',
        href: '/admissions/eligibility-documents',
      },
      { label: 'Fee Structure', href: '/admissions/fee-structure' },
      { label: 'Admission Enquiry', href: '/admissions/admission-enquiry' },
    ],
  },
  {
    label: 'News & Events',
    href: '/news-events',
    children: [
      { label: 'News & Announcements', href: '/news-events/news' },
      { label: 'Events', href: '/news-events/events' },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact',
    children: [
      { label: 'BTM Campus', href: '/contact/btm-campus' },
      { label: 'Hongasandra Campus', href: '/contact/hongasandra-campus' },
    ],
  },
];

export const ctaLink = { label: 'Admissions 2026–27', href: '/admissions' };

/** Every page in the IA: section index pages plus their children. */
export const allPages: NavChild[] = navItems
  .filter((item) => item.href !== '/')
  .flatMap((item) => [{ label: item.label, href: item.href }, ...(item.children ?? [])]);
