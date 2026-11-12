import React from "react";

export function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--text-body)", cursor: "pointer" }}>
      <span style={{
        width: 20, height: 20, borderRadius: "6px", flexShrink: 0,
        border: `1.5px solid ${checked ? "var(--brand-primary)" : "var(--border-subtle)"}`,
        background: checked ? "var(--brand-primary)" : "var(--surface-card)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background var(--duration-fast) var(--ease-out)"
      }}>
        {checked && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-inverse)" strokeWidth="3"><path d="M4 12l6 6L20 6" /></svg>}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: "none" }} />
      {label}
    </label>
  );
}
