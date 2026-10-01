// @ts-check
import { defineConfig } from 'astro/config';

// Gehost op GitHub Pages als projectsite: https://dkj-solutions.github.io/dkj-recipes/
export default defineConfig({
  site: 'https://dkj-solutions.github.io',
  base: '/dkj-recipes',
  trailingSlash: 'always',
});
