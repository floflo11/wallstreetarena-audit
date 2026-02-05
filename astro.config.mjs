import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://floflo11.github.io',
  base: '/wallstreetarena-audit',
  integrations: [tailwind()],
});
