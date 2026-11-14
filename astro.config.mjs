// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://ostap4ello.github.io',
  base: '/ostap4ello-page',
  trailingSlash: 'never',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkGfm],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'github-dark'
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});