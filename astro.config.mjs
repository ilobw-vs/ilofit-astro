import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ilofit.com',
  integrations: [sitemap()],
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      cssCodeSplit: true,
      // Inline CSS files smaller than 20KB directly into HTML
      assetsInlineLimit: 20480,
    }
  },
});