"use client";
import { useEffect, useRef, useState } from "react";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Everything that eases in as it scrolls into view.
const TARGETS = [
  ".section .head", ".svc", ".exp-group", ".stk", ".case", ".cases__more", ".org", ".cred-col",
  ".mission__label", ".mission__text", ".about__img", ".about__text", ".hobby",
  ".rs__text", ".rs__paper", ".contact .wrap > *",
].join(",");

// Mounted once. Marks the targets, then reveals each one the first time it is seen.
// Without JavaScript, or with reduced motion on, nothing is ever hidden.
export default function Motion() {
  useEffect(() => {
    if (reduced() || !("IntersectionObserver" in window)) return;
    const els = [...document.querySelectorAll(TARGETS)];
    const seen = new Map();
    els.forEach((el) => {
      const n = seen.get(el.parentElement) || 0;
      seen.set(el.parentElement, n + 1);
      el.style.setProperty("--d", `${Math.min(n, 6) * 80}ms`);
      el.setAttribute("data-rv", "");
    });
    document.documentElement.classList.add("motion");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        // Reveal what is on screen, and anything the visitor has already jumped past.
        if (!e.isIntersecting && e.boundingClientRect.bottom > 0) return;
        e.target.setAttribute("data-rv", "in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

// Cycles through short phrases in place. The tallest phrase sets the height, so nothing below it moves.
export function Rotator({ items, every = 3200 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced() || items.length < 2) return;
    const t = setInterval(() => { if (!document.hidden) setI((n) => (n + 1) % items.length); }, every);
    return () => clearInterval(t);
  }, [items.length, every]);
  const prev = (i - 1 + items.length) % items.length;
  return (
    <span className="rot" aria-hidden="true">
      {items.map((t, k) => (
        <span key={t} className={"rot__item" + (k === i ? " is-on" : k === prev ? " is-out" : "")}>
          <span className="grad">{t}</span>.
        </span>
      ))}
    </span>
  );
}

// Tilts its content a few degrees toward the pointer. Mouse only.
export function Tilt({ className, children, max = 7 }) {
  const ref = useRef(null);
  const move = (e) => {
    if (e.pointerType !== "mouse" || reduced()) return;
    const el = ref.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${(x * max * 2).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-y * max * 2).toFixed(2)}deg`);
  };
  const leave = () => {
    const el = ref.current;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };
  return (
    <div ref={ref} className={"tilt " + (className || "")} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </div>
  );
}
