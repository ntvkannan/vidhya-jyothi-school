// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves the site from a subpath; local development stays at the root.
const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://ntvkannan.github.io',
  base: isProduction ? '/vidhya-jyothi-school' : '/',

  vite: {
    plugins: [tailwindcss()]
  }
});
