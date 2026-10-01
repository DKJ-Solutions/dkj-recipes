// Na `astro build`: schrijft dist/sw.js, een service worker die de hele site vooraf in de cache zet,
// zodat alle recepten ook zonder bereik (in de supermarkt) te openen zijn.
import { generateSW } from 'workbox-build';

const { count, size, warnings } = await generateSW({
  globDirectory: 'dist',
  globPatterns: ['**/*.{html,js,css,svg,png,webmanifest}'],
  swDest: 'dist/sw.js',
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  skipWaiting: true,
  sourcemap: false,
});

for (const w of warnings) console.warn(w);
console.log(`sw.js: ${count} bestanden vooraf in de cache (${Math.round(size / 1024)} KB).`);
