# Mom Boss Wellness design system: rules for building

Read this before you build any page or screen. Use the tokens. Do not invent colors, fonts, or radii.

## Setup

1. Import `theme.css` in `src/index.css` (after the `@tailwind` lines if you use Tailwind).
2. Use `tailwind.theme.ts` as a preset in `tailwind.config.ts`: `presets: [mbwPreset]`.
3. Keep the `fonts/` folder next to `tokens.css`. The font files load from there.
4. Light theme only. There is no dark mode.

## Color

- Page background: `bg-surface-page` (Ivory). Cards: `bg-surface-card` (white). Soft panels: `bg-surface-sunken`.
- Dark bands: `bg-surface-inverse` with `text-ink-inverse`. Deep Grove or Rooted Evergreen also work as a dark band.
- Primary actions: `bg-brand-primary` (Rooted Evergreen). Hover goes to `brand-primary-hover` (Deep Grove). Never a new hue.
- Secondary actions and links: Sovereign Plum (`brand-secondary`). Hover is Power Plum.
- Gold (`brand-gold`) is an accent. Gold fills take `mbw-rooted-ink` text, never white.
- `ink-muted` is for `surface-page` and `surface-card` only. Use 14px or larger. It is 4.49:1 on Ivory.
- Error red (`state-error`) is only for errors. Always pair a state color with a word like "Error" or "Saved".
- No gradients. No true gray. No colored left-border accent cards.

## Type

- Headings: Quicksand (`font-display`), Medium or SemiBold. Bold only sparingly.
- Body: Montserrat (`font-body`).
- Parisienne (`font-script`) is one accent word at most, in gold, under a bold caps line. Never body text.
- Use the type scale in `tokens.css`: `text-xs` to `text-5xl`. Body is `text-base` (17px) with `leading-normal`.
- Caps lines use `tracking-wider`.

## Shape and depth

- Inputs: `rounded-md`. Cards: `rounded-lg`. Modals: `rounded-xl`. Buttons, badges, tabs: `rounded-pill`.
- No sharp corners.
- Shadows: `shadow-soft`, `shadow-card`, `shadow-lifted`. Nothing heavier.
- Press state: scale to 0.98. Motion: `duration-fast` (150ms), `duration-base` (250ms), `duration-slow` (400ms).

## Logos

Files are in `assets/logos/`.

- On light backgrounds: `mbw-workmark-color.svg` or the full logo.
- On Deep Grove or Evergreen in social or digital use: `mbw-submark-social-on-dark.svg`. Never print. It disappears on light backgrounds.
- Workmark on Grove or inverse: `mbw-workmark-color-social-on-grove.svg`.
- Round avatar: `mbw-submark-social-on-grove.svg`.
- Do not recolor, stretch, or add effects.

## Icons

Files are in `assets/icons/`. 48 line icons on a 24px grid, 2px round stroke, `currentColor`. Default color is Rooted Evergreen. `mbw-sprite.svg` holds every icon as `<symbol id="mbw-name">`. `icon-guide.json` lists each icon, its realm, and the icon set for each mom persona.

## Components

Ready-made React components are in `components/src/`: Avatar, Badge, Button, Card, Alert, Modal, Checkbox, Input, Radio, Select, Switch, Textarea, Footer, NavBar, Tabs. Use them before you build your own. They read tokens from `tokens.css` and `motion.css`. Types are in `components/index.d.ts`.

## Photos

Real photography with warm tones. No stock-looking handshake shots. No emoji anywhere.

## Voice

Warm authority. Speak to one person: "you." Frame problems as systems, not personal failure: "You are not broken. We help you build the support you actually need." Be direct and calm. Skip hustle language and guilt.
