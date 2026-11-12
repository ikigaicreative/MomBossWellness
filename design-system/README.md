# Mom Boss Wellness Design System

Tokens, a Tailwind theme, fonts, logos, icons, and React components for building Mom Boss Wellness websites and apps. Built to be imported into Lovable.

## What is in this folder

| File or folder | What it does |
| --- | --- |
| `system.md` | Rules for building on-brand. Lovable reads this. |
| `tokens.json` | Source of truth for colors, type, radii, shadows, spacing. |
| `tokens.css` | The same tokens as CSS variables, plus font loading. |
| `motion.css` | Motion and shadow base values. |
| `theme.css` | shadcn/ui variables mapped to brand colors, plus base styles. |
| `tailwind.theme.ts` | Tailwind v3 preset and `mbwTheme` object. |
| `fonts/` | Quicksand, Montserrat, Parisienne (TTF). |
| `assets/logos/` | 28 logo, brandmark, submark, and workmark SVGs. |
| `assets/icons/` | 48 line icons, a sprite, and `icon-guide.json`. |
| `components/` | 15 React components, an index, and types. |

## Bring it into Lovable

Use the dedicated design system repo, **mombosswellness-design-system**. It is laid out the way Lovable reads a design system (tokens in `src/styles/`, `tailwind.config.ts` at the root, components in `src/components/`, a barrel at `src/index.ts`) and includes everything in this folder plus the brand assets.

This folder stays here as a reference copy. Lovable does not document importing from a subfolder, so do not point Lovable at this repo.

## Use it in any Vite or React project

```ts
// tailwind.config.ts
import { mbwPreset } from "./design-system/tailwind.theme";
export default { presets: [mbwPreset], content: ["./index.html", "./src/**/*.{ts,tsx}"] };
```

```css
/* src/index.css */
@import "../design-system/theme.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then build with classes like `bg-primary`, `bg-surface-page`, `bg-mbw-crown-gold`, `font-display`, `rounded-pill`, and `shadow-card`.

## Notes

- Light theme only.
- The Tailwind theme targets Tailwind v3, which Lovable uses.
- Edit `tokens.json` first, then update `tokens.css` and `tailwind.theme.ts` to match.
