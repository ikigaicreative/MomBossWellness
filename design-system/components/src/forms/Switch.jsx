import React from "react";

export function Switch({ checked, onChange, label }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--text-body)" }}>
      <span onClick={onChange} style={{
        width: 42, height: 24, borderRadius: "var(--radius-pill)", padding: 3, boxSizing: "border-box",
        background: checked ? "var(--brand-primary)" : "var(--border-subtle)",
        transition: "background var(--duration-fast) var(--ease-out)", display: "flex", alignItems: "center"
      }}>
        <span style={{
          width: 18, height: 18, borderRadius: "50%", background: "var(--surface-card)",
          transform: checked ? "translateX(18px)" : "translateX(0)",
          transition: "transform var(--duration-fast) var(--ease-out)"
        }} />
      </span>
      {label}
    </label>
  );
}
