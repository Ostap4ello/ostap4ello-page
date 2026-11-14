# ostap4ello-page

Personal portfolio and Markdown/MDX notebook built with Astro and Tailwind CSS.

## Commands

```sh
npm install
npm run dev
npm run build
```

Add Markdown or MDX files to `src/content/docs` or `src/content/misc`. Nested folders are preserved in generated URLs, and each content page includes its route path and table of contents.

The GitHub Actions workflow deploys `dist/` to GitHub Pages when changes are pushed to `main`. Enable **GitHub Actions** as the Pages source in the repository settings.
