import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// Static output: deploys to Cloudflare Pages, Netlify, Vercel, S3 or GitHub Pages as-is.
export default defineConfig({
  // Set this to your real domain once you have it (used for canonical URLs).
  site: 'https://example.com',

  output: 'static',
  adapter: cloudflare(),
});