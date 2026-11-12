import React from "react";

export function Alert({ tone = "info", title, children }) {
  const tones = {
    info: { bg: "var(--color-morning-sky)", fg: "#1c3a38" },
    success: { bg: "var(--color-sage-renewal)", fg: "var(--text-inverse)" },
    warning: { bg: "var(--color-sunlit-cream)", fg: "#5a4a2a" },
    error: { bg: "#f3d9d5", fg: "var(--state-error)" }
  };
  const t = tones[tone] || tones.info;
  return (
    <div style={{
      background: t.bg, color: t.fg, borderRadius: "var(--radius-md)", padding: "16px 20px",
      fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", gap: "4px"
    }}>
      {title && <strong style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)" }}>{title}</strong>}
      <span style={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)" }}>{children}</span>
    </div>
  );
}
