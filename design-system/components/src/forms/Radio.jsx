import React from "react";

export function Radio({ label, checked, onChange, name }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--text-body)", cursor: "pointer" }}>
      <span style={{
        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
        border: `1.5px solid ${checked ? "var(--brand-primary)" : "var(--border-subtle)"}`,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        {checked && <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--brand-primary)" }} />}
      </span>
      <input type="radio" name={name} checked={checked} onChange={onChange} style={{ display: "none" }} />
      {label}
    </label>
  );
}
