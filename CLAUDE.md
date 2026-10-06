# Vidhya Jyothi School Website — Claude Code Instructions

## Project

This is the Vidhya Jyothi School public website.

The project is being built section by section from an approved homepage visual reference.

Visual reference:
`docs/design-reference/homepage-reference.png`

## Technology

Use only the existing approved stack:

- Astro 7.3.5
- Tailwind CSS v4
- Vanilla JavaScript
- GSAP
- Prettier + prettier-plugin-astro
- Git

Do not introduce React or another frontend framework.

Do not install additional packages unless explicitly requested.

## Design Direction

Overall design principle:

**Modern website, traditional values.**

Personality:

- Trusted
- Warm
- Academic
- Modern
- Proud

The website must be:

- Simple
- Clean
- Professional
- Effective
- Easy to scan
- Parent-friendly
- Responsive

Avoid over-engineering.

Do not add visual effects, animations, interactions, gradients, cards, rounded elements, or decorative elements unless they have a clear design purpose.

Use GSAP only when an animation meaningfully improves the user experience.

## Homepage Development Workflow

The homepage is built **one section at a time**.

Approved homepage order:

1. Header / Navigation
2. Hero + Announcement Panel
3. School Highlights
4. Welcome / Principal
5. Why Choose Vidhya Jyothi
6. Academics & Curriculum
7. Student Life
8. Facilities
9. Latest News & Events
10. Testimonials
11. Gallery
12. Admissions CTA
13. Footer

Do not build multiple sections unless explicitly requested.

Do not redesign a section that has already been approved.

## Visual Reference Rules

`docs/design-reference/homepage-reference.png` is the overall visual source of truth for the homepage.

Use it to maintain consistency in:

- Layout
- Visual hierarchy
- Spacing
- Typography scale
- Brand color relationships
- Image treatment
- Component proportions
- Section rhythm

The reference is a design guide, not a requirement for blind pixel-perfect copying.

If the user provides a section-specific screenshot or requests a change, follow the latest approved instruction for that section.

Do not invent major UX or visual changes without approval.

## Section Review Workflow

For each section:

1. Inspect the relevant reference.
2. Implement only that section.
3. Keep surrounding sections minimal and untouched.
4. Run the development/build checks.
5. User reviews the section in the browser.
6. User may provide a screenshot or feedback.
7. Make only the requested/necessary corrections.
8. Once approved, treat the section as frozen.
9. Move to the next section.

Do not repeatedly redesign or refactor approved sections without a reason.

## Code Quality

Prefer:

- Small reusable Astro components
- Clear semantic HTML
- Tailwind CSS utilities where appropriate
- Minimal vanilla JavaScript
- Accessible navigation and interactive elements
- Responsive layouts
- Maintainable code

Keep components focused.

Do not create unnecessary abstractions.

Do not create placeholder architecture for features that are not currently needed.

## Content Rules

Do not invent school facts.

Do not invent:

- Addresses
- Phone numbers
- Email addresses
- Fees
- Admission rules
- Statistics
- Achievements
- Staff details
- Dates
- Facilities
- Claims about the school

Use approved project content or clearly marked placeholders when information has not yet been confirmed.

## Asset Rules

Do not recreate or redesign the school logo.

Use the provided/approved logo asset.

Do not replace an unavailable asset with a made-up logo.

If an important asset is missing, report it instead of inventing one.

## Editing Rules

Before making changes:

- Inspect the existing relevant files.
- Make the smallest reasonable change for the requested task.
- Do not modify unrelated files.
- Do not change the technology stack.
- Do not install packages unless explicitly requested.

After implementation:

- Run `npm run build`.
- Report build success or failure.
- Clearly list changed files.
- Do not commit changes unless explicitly requested.

## Development Server

The project may use Astro's background development server as defined by the existing project tooling.

Use:

```bash
astro dev --background
```

When needed, manage it with:

```bash
astro dev stop
astro dev status
astro dev logs
```

## Communication

Keep implementation focused.

Before making broad changes, explain what will be changed.

If a requirement is unclear and would materially affect the design or architecture, ask rather than guessing.

Do not make unrelated improvements simply because they are possible.

## Final Principle

**Do not over-engineer the website.**

The goal is a polished, modern school website that communicates clearly and feels trustworthy — not a demonstration of every available web technology.
