import React from "react";

export function Footer({ logoSrc = "assets/logos/mbw-workmark-color.svg" }) {
  return (
    <footer style={{
      background: "var(--color-rooted-ink)", color: "var(--text-inverse)", padding: "56px 40px 32px",
      fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", gap: "32px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
        <img src={logoSrc} alt="Mom Boss Wellness" style={{ height: "48px" }} />
        <div style={{ display: "flex", gap: "48px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-sm)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ opacity: 0.6, fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)" }}>PROGRAMS</span><a>1:1 Coaching</a><a>Group Cohorts</a><a>Retreats</a></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ opacity: 0.6, fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)" }}>COMMUNITY</span><a>Member stories</a><a>Events</a></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ opacity: 0.6, fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)" }}>ABOUT</span><a>Our approach</a><a>Contact</a></div>
        </div>
      </div>
      <div style={{ fontSize: "var(--text-xs)", opacity: 0.6 }}>© {new Date().getFullYear()} Mom Boss Wellness LLC</div>
    </footer>
  );
}
