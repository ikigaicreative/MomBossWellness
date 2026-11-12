import React from "react";

export function Badge({ children, tone = "evergreen" }) {
  const tones = {
    evergreen: { bg: "var(--color-rooted-evergreen)", fg: "var(--text-inverse)" },
    gold: { bg: "var(--color-crown-gold)", fg: "var(--color-rooted-ink)" },
    plum: { bg: "var(--color-sovereign-plum)", fg: "var(--text-inverse)" },
    rose: { bg: "var(--color-terra-rose)", fg: "var(--text-inverse)" },
    soft: { bg: "var(--surface-accent-soft)", fg: "var(--color-shadow-plum)" }
  };
  const t = tones[tone] || tones.evergreen;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "5px 14px",
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wide)", textTransform: "uppercase",
      background: t.bg, color: t.fg, borderRadius: "var(--radius-pill)"
    }}>{children}</span>
  );
}
