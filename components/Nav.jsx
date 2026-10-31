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
      <span className="brand__mark">AF</span>
      <span className="brand__word">
        <span className="brand__name">Alam</span>
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
