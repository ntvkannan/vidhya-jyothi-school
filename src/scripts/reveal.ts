import gsap from 'gsap';

// Scroll-triggered entrance animation.
//   data-reveal           -> the element fades in and moves up once.
//   data-reveal-stagger   -> its direct children do the same, one after another.
// Elements are hidden by CSS (see global.css) only while `html.reveal-ready` is set,
// which the inline script in BaseLayout adds only when motion is allowed.

const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

window.__revealStarted = true;

if (reducedMotion.matches) {
  root.classList.remove('reveal-ready');
} else {
  const small = window.matchMedia('(max-width: 639px)');

  const show = (targets: HTMLElement[]) => {
    targets.forEach((el) => el.classList.add('is-revealed'));
    gsap.fromTo(
      targets,
      { autoAlpha: 0, y: small.matches ? 14 : 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: small.matches ? 0.5 : 0.65,
        ease: 'power2.out',
        stagger: 0.1,
        clearProps: 'opacity,visibility,transform',
      },
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);
        show(el.hasAttribute('data-reveal-stagger') ? [...el.children] as HTMLElement[] : [el]);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
  );

  document
    .querySelectorAll('[data-reveal], [data-reveal-stagger]')
    .forEach((el) => observer.observe(el));
}

declare global {
  interface Window {
    __revealStarted?: boolean;
  }
}
