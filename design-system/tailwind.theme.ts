import type { Config } from "tailwindcss";

/**
 * Mom Boss Wellness theme for Tailwind CSS v3 (the version Lovable and shadcn/ui use).
 * Values come from tokens.json. Light theme only: the brand has no dark mode.
 *
 * Use it one of two ways:
 *   1. Preset:  presets: [mbwPreset] in tailwind.config.ts
 *   2. Merge:   theme: { extend: mbwTheme } in tailwind.config.ts
 *
 * Pair it with theme.css, which defines the CSS variables the shadcn names below read.
 */
export const mbwTheme = {
  colors: {
    // shadcn/ui semantic names (values live in theme.css as HSL triplets)
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
    secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
    destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
    muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
    accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
    popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
    card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },

    // Brand roles (read the CSS variables from tokens.css): bg-brand-primary, text-brand-gold-hover ...
    brand: {
      primary: "var(--brand-primary)",
      "primary-hover": "var(--brand-primary-hover)",
      secondary: "var(--brand-secondary)",
      "secondary-hover": "var(--brand-secondary-hover)",
      gold: "var(--brand-gold)",
      "gold-hover": "var(--brand-gold-hover)",
    },
    state: {
      success: "var(--state-success)",
      warning: "var(--state-warning)",
      error: "var(--state-error)",
      info: "var(--state-info)",
    },
    surface: {
      page: "var(--surface-page)",
      card: "var(--surface-card)",
      sunken: "var(--surface-sunken)",
      inverse: "var(--surface-inverse)",
      "accent-soft": "var(--surface-accent-soft)",
    },
    ink: {
      heading: "var(--text-heading)",
      body: "var(--text-body)",
      muted: "var(--text-muted)",
      inverse: "var(--text-inverse)",
      link: "var(--text-link)",
      "link-hover": "var(--text-link-hover)",
    },

    // The named palette: bg-mbw-rooted-evergreen, text-mbw-crown-gold ...
    mbw: {
      "crown-gold": "#c0a265",
      "rooted-evergreen": "#475847",
      "sovereign-plum": "#7a5768",
      "terra-rose": "#9d6e61",
      "sage-renewal": "#848c5d",
      "radiant-crown": "#e8c35b",
      "deep-grove": "#2f4637",
      "power-plum": "#6d2f7d",
      "ember-rose": "#b46f5a",
      "renewal-olive": "#9ea85f",
      "ivory-light": "#fff8ef",
      "rooted-ink": "#263329",
      "orchid-mist": "#dcc6e6",
      "shadow-plum": "#3f2448",
      "morning-sky": "#a9d6d3",
      "sunlit-cream": "#f6e6c8",
      "white": "#ffffff",
    },
  },

  fontFamily: {
    display: ['"Quicksand"', "sans-serif"],
    body: ['"Montserrat"', "sans-serif"],
    sans: ['"Montserrat"', "sans-serif"],
    script: ['"Parisienne"', "cursive"],
  },

  // Same names as the design-system type scale. These replace Tailwind's defaults on purpose.
  fontSize: {
    xs: "0.8125rem",
    sm: "0.9375rem",
    base: "1.0625rem",
    lg: "1.25rem",
    xl: "1.625rem",
    "2xl": "2.125rem",
    "3xl": "2.75rem",
    "4xl": "3.5rem",
    "5xl": "4.5rem",
  },

  lineHeight: { tight: "1.1", snug: "1.3", normal: "1.6", relaxed: "1.75" },
  letterSpacing: { tight: "-0.01em", normal: "0em", wide: "0.04em", wider: "0.12em" },

  borderRadius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    xl: "28px",
    pill: "999px",
  },

  boxShadow: {
    soft: "0 1px 2px hsla(220, 20%, 20%, 0.06), 0 4px 16px hsla(220, 20%, 20%, 0.08)",
    card: "0 2px 6px hsla(220, 20%, 20%, 0.07), 0 12px 32px hsla(220, 20%, 20%, 0.10)",
    lifted: "0 8px 20px hsla(220, 20%, 20%, 0.12), 0 24px 48px hsla(220, 20%, 20%, 0.14)",
  },

  transitionDuration: { fast: "150ms", base: "250ms", slow: "400ms" },
  transitionTimingFunction: { standard: "cubic-bezier(.4,0,.2,1)", out: "cubic-bezier(0,0,.2,1)" },

  // Tailwind's default spacing already matches the 4px scale (space-1 = p-1 ... space-32 = p-32).
} satisfies NonNullable<Config["theme"]>;

export const mbwPreset = { theme: { extend: mbwTheme } } satisfies Partial<Config>;

export default mbwPreset;
