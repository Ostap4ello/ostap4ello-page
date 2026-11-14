---
title: Markdown color inspection
description: A reference page for checking Markdown rendering in light and dark themes.
tags: [design, testing]
---

# Markdown color inspection

Use this page to inspect the full Markdown color scheme. Toggle the site theme from the top navigation and compare the content below.

## Text hierarchy

Regular body text should use the main text color. **Bold text**, *italic text*, and ~~strikethrough text~~ should remain readable in both themes.

### Links and inline code

Links use the blue accent: [Astro documentation](https://docs.astro.build/). Inline code such as `import.meta.env.BASE_URL` should remain distinct without changing the body text color.

#### Lists

- Primary list item
  - Nested list item
  - Another nested item
- Another primary item

1. Ordered item
2. Second ordered item

## Quote and separator

> This blockquote should use the regular theme text color with a visible but subtle border.

---

## Table

| Element | Expected role | Example |
| --- | --- | --- |
| Body text | Main text | Readable paragraph |
| Link | Accent | Blue hyperlink |
| Border | Divider | Subtle separator |

## Code

The code palette intentionally uses the same GitHub Light Shiki token colors in both site themes.

```ts
type Theme = 'light' | 'dark';

const theme: Theme = 'dark';
const baseUrl = import.meta.env.BASE_URL;

console.log(`Theme: ${theme}`, baseUrl);
```

```css
:root {
  --accent: #1a73e8;
  --text: #202124;
}
```
