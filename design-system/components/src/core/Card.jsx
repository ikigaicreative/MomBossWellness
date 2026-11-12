import React from "react";

export function Card({ children, padding = "24px", elevated = false }) {
  return (
    <div style={{
      background: "var(--surface-card)", borderRadius: "var(--radius-lg)",
      boxShadow: elevated ? "var(--shadow-lifted)" : "var(--shadow-card)",
      padding
    }}>{children}</div>
  );
}
