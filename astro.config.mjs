import { defineConfig } from 'astro/config';

// Static export for Cloudflare Pages. Set `site` when a production domain is chosen.
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
});
