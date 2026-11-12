import React from "react";

export function Textarea({ label, placeholder = "", rows = 4, value, onChange }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-body)", width: "100%", boxSizing: "border-box" }}>
      {label && <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-heading)" }}>{label}</span>}
      <textarea
        placeholder={placeholder} rows={rows} value={value} onChange={onChange}
        style={{
          padding: "12px 16px", fontSize: "var(--text-base)", fontFamily: "var(--font-body)",
          border: "1.5px solid var(--border-subtle)", borderRadius: "var(--radius-md)",
          background: "var(--surface-card)", color: "var(--text-body)", outline: "none", resize: "vertical",
          width: "100%", boxSizing: "border-box"
        }}
        onFocus={e => e.target.style.borderColor = "var(--brand-primary)"}
        onBlur={e => e.target.style.borderColor = "var(--border-subtle)"}
      />
    </label>
  );
}
