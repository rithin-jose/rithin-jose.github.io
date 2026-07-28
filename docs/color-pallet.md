# Color Documentation

This document describes the project's color palette, token names, usage guidance, accessibility notes, and example CSS/Sass snippets to keep styling consistent across the site.

Source palette: inspired by Color Hunt — hex values used in the site below.

## Palette (names & hex)
- Brand / Deep Purple: #8a244b
- Secondary / Warm Pink: #d02752
- Accent / Red (micro-interactions): #f63049
- Background / Navy: #111f35
- Neutral / Off‑White (recommended): #F0F0F5

## Color tokens (suggested CSS variables)
Add these to your global stylesheet (e.g., `:root` or a theme file):

```css
:root {
	--color-bg: #111f35;
	--color-foreground: #F0F0F5;
	--color-brand: #8a244b;
	--color-secondary: #d02752;
	--color-accent: #f63049; /* micro-interactions only */
}
```

## Usage guidance (concise)
- Background: use `--color-bg` for page and large panels.
- Text: use `--color-foreground` for primary body text on dark backgrounds.
- Primary brand elements: use `--color-brand` for headings, logos, and major graphics.
- Secondary accents: use `--color-secondary` for buttons, highlights, and subtle emphasis.
- Micro-interactions: reserve `--color-accent` for hover states, focus rings, active states, and small badges — avoid using it as large static fills.
- Gradients: soften contrast by blending `--color-secondary` -> `--color-brand` for decorative backgrounds.

Example gradient:

```css
background: linear-gradient(135deg, #d02752 0%, #8a244b 100%);
```

## Accessibility notes
- Preferred foreground on `--color-bg` is `--color-foreground` (high contrast). Test text sizes and weights to ensure WCAG AA/AAA as needed.
- If using pure white (`#ffffff`) for small UI text, consider reducing opacity (e.g., rgba(255,255,255,0.92)) to avoid glare while keeping contrast.

## Sass map (optional)
```scss
$colors: (
	bg: #111f35,
	foreground: #F0F0F5,
	brand: #8a244b,
	secondary: #d02752,
	accent: #f63049,
);

@mixin color($key) {
	color: map-get($colors, $key);
}
```

## Component examples
- Navbar: background `--color-bg`, brand mark `--color-brand`, links `--color-foreground` with `--color-accent` on hover.
- Primary button: background `--color-brand`, hover uses `--color-secondary` or a subtle gradient; avoid `--color-accent` as a default button fill.
- Call to action (micro): use `--color-accent` for small badges, indicators, or hover glows only.

## Practical tips
- Limit the use of `--color-accent` (#f63049) to interactions and small highlights to avoid visual fatigue.
- Prefer gradients and the brand purple to carry the visual identity; use red as a sparing, functional cue.
- Keep the off‑white neutral for long-form text to maximize readability on the dark background.

If you want, I can add these variables to `src/styles.scss` and replace hard-coded colors across components.
