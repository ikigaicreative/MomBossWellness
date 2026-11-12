import React from "react";

export function Select({ label, options = [], value, onChange }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-body)", width: "100%", boxSizing: "border-box" }}>
      {label && <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-heading)" }}>{label}</span>}
      <select
        value={value} onChange={onChange}
        style={{
          padding: "12px 16px", fontSize: "var(--text-base)", fontFamily: "var(--font-body)",
          border: "1.5px solid var(--border-subtle)", borderRadius: "var(--radius-md)",
          background: "var(--surface-card)", color: "var(--text-body)", outline: "none",
          width: "100%", boxSizing: "border-box"
        }}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
