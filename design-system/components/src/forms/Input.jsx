import React from "react";

export function Input({ label, placeholder = "", type = "text", value, onChange, error = "" }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-body)", width: "100%", boxSizing: "border-box" }}>
      {label && <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-heading)" }}>{label}</span>}
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange}
        style={{
          padding: "12px 16px", fontSize: "var(--text-base)", fontFamily: "var(--font-body)",
          border: `1.5px solid ${error ? "var(--state-error)" : "var(--border-subtle)"}`,
          borderRadius: "var(--radius-md)", background: "var(--surface-card)", color: "var(--text-body)",
          outline: "none", width: "100%", boxSizing: "border-box"
        }}
        onFocus={e => e.target.style.borderColor = "var(--brand-primary)"}
        onBlur={e => e.target.style.borderColor = error ? "var(--state-error)" : "var(--border-subtle)"}
      />
      {error && <span style={{ fontSize: "var(--text-xs)", color: "var(--state-error)" }}>{error}</span>}
    </label>
  );
}
