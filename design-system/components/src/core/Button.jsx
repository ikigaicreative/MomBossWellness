import React from "react";

export function Button({ children, variant = "primary", size = "md", disabled = false, icon = null, onClick, type = "button", style = {} }) {
  const palettes = {
    primary: { bg: "var(--brand-primary)", bgHover: "var(--brand-primary-hover)", fg: "var(--text-inverse)", border: "transparent" },
    secondary: { bg: "var(--brand-secondary)", bgHover: "var(--brand-secondary-hover)", fg: "var(--text-inverse)", border: "transparent" },
    gold: { bg: "var(--brand-gold)", bgHover: "var(--brand-gold-hover)", fg: "var(--color-rooted-ink)", border: "transparent" },
    ghost: { bg: "transparent", bgHover: "var(--surface-sunken)", fg: "var(--text-heading)", border: "var(--border-subtle)" },
    outline: { bg: "transparent", bgHover: "var(--surface-sunken)", fg: "var(--brand-primary)", border: "var(--brand-primary)" }
  };
  const sizes = {
    sm: { padding: "8px 16px", fontSize: "var(--text-sm)" },
    md: { padding: "12px 22px", fontSize: "var(--text-base)" },
    lg: { padding: "16px 30px", fontSize: "var(--text-lg)" }
  };
  const p = palettes[variant] || palettes.primary;
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px", justifyContent: "center",
        fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "var(--tracking-normal)",
        color: disabled ? "var(--text-muted)" : p.fg,
        background: disabled ? "var(--surface-sunken)" : (hover ? p.bgHover : p.bg),
        border: `1.5px solid ${disabled ? "var(--border-subtle)" : p.border}`,
        borderRadius: "var(--radius-pill)", cursor: disabled ? "not-allowed" : "pointer",
        transform: active ? "scale(0.98)" : "scale(1)",
        transition: `background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)`,
        ...s, ...style
      }}
    >
      {icon}
      {children}
    </button>
  );
}
