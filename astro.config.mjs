import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ilofit.com',
  integrations: [
    sitemap({
      // Utility form — reachable from /yhteystiedot and /palvelut/treeniohjelma,
      // but not a page anyone should land on from search. Also carries noindex.
      filter: (page) => !page.includes('/taustatietolomake') && !page.includes('/mockup-'),
    }),
  ],
  output: 'static',
  compressHTML: true,
  experimental: {
    // Fonts are downloaded at build time and served from our own domain —
    // visitors never hit Google's CDN. Only the weights actually used are
    // fetched: Cormorant at 600 (all headings), DM Sans at 400/500.
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Cormorant Garamond',
        cssVariable: '--font-cormorant',
        weights: [600],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ['Georgia', 'serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'DM Sans',
        cssVariable: '--font-dm-sans',
        weights: [400, 500],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ['system-ui', 'sans-serif'],
      },
    ],
  },
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