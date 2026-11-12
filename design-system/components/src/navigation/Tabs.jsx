import React from "react";

export function Tabs({ items = [], active, onChange }) {
  return (
    <div style={{ display: "flex", gap: "4px", background: "var(--surface-sunken)", borderRadius: "var(--radius-pill)", padding: "4px", fontFamily: "var(--font-display)", width: "fit-content" }}>
      {items.map(item => (
        <button key={item} onClick={() => onChange(item)} style={{
          border: "none", cursor: "pointer", padding: "8px 20px", borderRadius: "var(--radius-pill)",
          fontWeight: 600, fontSize: "var(--text-sm)",
          background: item === active ? "var(--surface-card)" : "transparent",
          color: item === active ? "var(--brand-primary)" : "var(--text-muted)",
          boxShadow: item === active ? "var(--shadow-soft)" : "none",
          transition: "all var(--duration-fast) var(--ease-out)"
        }}>{item}</button>
      ))}
    </div>
  );
}
