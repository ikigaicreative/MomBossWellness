import React from "react";

export function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(38,51,41,0.45)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "var(--surface-card)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lifted)",
        padding: "32px", maxWidth: "440px", width: "90%", fontFamily: "var(--font-body)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-heading)" }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: "20px", color: "var(--text-muted)", cursor: "pointer" }}>✕</button>
        </div>
        <div style={{ color: "var(--text-body)", fontSize: "var(--text-base)", lineHeight: "var(--leading-normal)" }}>{children}</div>
      </div>
    </div>
  );
}
