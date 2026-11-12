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
| `assets/logos/` | 33 logo, brandmark, submark, and workmark SVGs. |
| `assets/icons/` | 48 line icons, a sprite, and `icon-guide.json`. |
| `components/` | 15 React components, an index, and types. |

## Bring it into Lovable

1. In Lovable, open Design Systems and choose to import from a Git URL. Use this repo: `https://github.com/ikigaicreative/mombosswellness`. Point it at the `design-system` folder. Lovable imports the default branch.
2. Or upload the `design-system` folder directly.
3. Release a version, then attach it to your project.

Design Systems are on Lovable paid plans.

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
