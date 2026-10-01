// Maakt de PNG-iconen voor de PWA uit public/icons/icon.svg. Eenmalig draaien na een wijziging aan
// het icoon (node scripts/make-icons.mjs) en de PNG's meecommitten; de build draait dit niet.
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const dir = fileURLToPath(new URL('../public/icons/', import.meta.url));
const svg = dir + 'icon.svg';

for (const size of [192, 512]) {
  await sharp(svg).resize(size, size).png().toFile(dir + `icon-${size}.png`);
}
await sharp(svg).resize(180, 180).flatten({ background: '#2f7d4f' }).png()
  .toFile(dir + 'apple-touch-icon.png');

// Maskable: het icoon binnen de veilige zone (80%) op een volle achtergrond.
const inner = await sharp(svg).resize(400, 400).png().toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 4, background: '#2f7d4f' } })
  .composite([{ input: inner, gravity: 'center' }])
  .png()
  .toFile(dir + 'icon-maskable-512.png');

console.log('iconen gemaakt in public/icons/');
