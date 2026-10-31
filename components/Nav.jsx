"use client";
import { useState, useEffect } from "react";
import { nav, profile } from "@/lib/content";
import { Icon } from "./Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("af-theme");
      if (saved) {
        document.documentElement.setAttribute("data-theme", saved);
        setTheme(saved);
      }
    } catch (e) {}
  }, []);

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme");
    const isDark = cur ? cur === "dark" : window.matchMedia("(prefers-color-scheme:dark)").matches;
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    try { localStorage.setItem("af-theme", next); } catch (e) {}
  }

  const Brand = (
    <a className="brand brand--head" href="#home" aria-label={`${profile.name} — home`}>
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 120 120" width="36" height="36" role="img">
          <defs>
            <linearGradient id="afShield" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3A54D6" /><stop offset="1" stopColor="#0FB5AE" />
            </linearGradient>
          </defs>
          <path d="M60 12 L102 26 V62 Q102 92 60 110 Q18 92 18 62 V26 Z" fill="url(#afShield)" />
          <text x="60" y="68" textAnchor="middle" fill="#fff"
            style={{ fontFamily: "var(--font-display)", fontSize: "33px", fontWeight: 800, letterSpacing: "1px" }}>AF</text>
          <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.9">
            <line x1="60" y1="80" x2="60" y2="89" /><line x1="55" y1="84.5" x2="65" y2="84.5" />
            <line x1="56.6" y1="81.1" x2="63.4" y2="87.9" /><line x1="63.4" y1="81.1" x2="56.6" y2="87.9" />
          </g>
        </svg>
      </span>
      <span className="brand__word">
        <span className="brand__name">Mr. Alam</span>
        <span className="brand__role">Power Platform · Agentic AI</span>
      </span>
    </a>
  );

  return (
    <header className="site-head">
      <div className="wrap nav">
        {Brand}
        <nav className="nav__links" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.label} href={n.href} {...(n.external ? { target: "_blank", rel: "noopener" } : {})}>{n.label}</a>
          ))}
        </nav>
        <div className="nav__right">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle colour theme" title="Toggle theme">
            <Icon name="sun" size={17} />
          </button>
          <a className="btn btn--primary" href={profile.calendly} target="_blank" rel="noopener">Book a call</a>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            <Icon name="menu" size={18} />
          </button>
        </div>
      </div>
      <nav className={"mobile-nav" + (open ? " open" : "")} aria-label="Mobile">
        {nav.map((n) => (
          <a key={n.label} href={n.href} onClick={() => setOpen(false)} {...(n.external ? { target: "_blank", rel: "noopener" } : {})}>{n.label}{n.external ? " ↗" : ""}</a>
        ))}
      </nav>
    </header>
  );
}
