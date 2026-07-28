# Typography Documentation

This document describes the typography system for the site, using the locally available `Poppins` font family and a clear typographic scale for headings, body copy, and supporting text.

## Font family

The site should use:
- `font-family: 'Poppins', sans-serif;

The project includes the font files in `public/font/`, so you can host them locally with `@font-face` declarations in `src/styles.scss`:

```scss
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/font/Poppins-ExtraLight.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/font/Poppins-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/font/Poppins-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/font/Poppins-SemiBold.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/font/Poppins-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('/font/Poppins-ExtraBold.ttf') format('truetype');
}
```

## Base typography

Add these rules to your global stylesheet (`src/styles.scss`):

```scss
html {
  font-size: 16px;
}

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.65;
  letter-spacing: 0.01em;
  color: var(--color-foreground);
  background: var(--color-bg);
}
```

## Type scale

Use a consistent scale for headings and body copy:

- `h1`: 3rem / 48px, `font-weight: 800`, `line-height: 1.05`
- `h2`: 2.5rem / 40px, `font-weight: 700`, `line-height: 1.1`
- `h3`: 2rem / 32px, `font-weight: 700`, `line-height: 1.15`
- `h4`: 1.75rem / 28px, `font-weight: 600`, `line-height: 1.2`
- `h5`: 1.25rem / 20px, `font-weight: 600`, `line-height: 1.3`
- `body`: 1rem / 16px, `font-weight: 400`, `line-height: 1.65`
- `small` / captions: 0.875rem / 14px, `font-weight: 400`, `line-height: 1.6`

## Heading usage

- Use `h1` for the main page title or hero headline.
- Use `h2` for major section titles.
- Use `h3` for subsection headings within content blocks.
- Keep heading spacing generous and avoid overcrowding.

Example Sass selectors:

```scss
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  letter-spacing: -0.02em;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
}

h3 {
  font-size: 2rem;
  font-weight: 700;
}
```

## Paragraphs and body copy

Keep paragraphs readable by using consistent spacing and moderate width:

```scss
p {
  margin: 0 0 1.25rem;
  max-width: 70ch;
}

a,
button,
input,
textarea {
  font-family: inherit;
}
```

## Supporting text and labels

Use smaller text for labels, metadata, and UI microcopy:

```scss
.small-text,
.caption {
  font-size: 0.875rem;
  line-height: 1.6;
  letter-spacing: 0.02em;
}
```

## Tokens and design system guidance

Suggested typography tokens:

```scss
:root {
  --font-family: 'Poppins', sans-serif;
  --font-body-size: 1rem;
  --font-body-line-height: 1.65;
  --font-heading-letter-spacing: -0.02em;
  --font-body-letter-spacing: 0.01em;
}
```

## Accessibility notes

- Maintain high contrast between text and background. Use `var(--color-foreground)` on dark backgrounds.
- Avoid text sizes below `0.875rem` for primary content.
- Use spacing and line-height to improve readability on long-form text.

## How to use this doc

This typography doc is meant to guide the site’s visual rhythm. It can be used as a reference for global styles, headings, body copy, and component text so the site stays consistent and readable.
