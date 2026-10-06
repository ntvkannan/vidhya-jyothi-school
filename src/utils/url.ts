// Site-relative paths ("/about", "/images/x.webp") are written without the deployment
// base so content stays portable; these helpers add or remove Astro's configured `base`.

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** "/about" -> "/<base>/about". Non-root-relative values pass through unchanged. */
export const withBase = (path: string) =>
  path.startsWith('/') && !path.startsWith('//') ? base + path : path;

/** "/<base>/about/" -> "/about". Used to compare the current URL against nav paths. */
export const stripBase = (pathname: string) => {
  const stripped = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return stripped.replace(/\/+$/, '') || '/';
};
