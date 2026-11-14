"use client";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Plus } from "lucide-react";
import { useCases } from "@/lib/content";

const FIRST = 3;

// Use cases as small cards. A card opens to full width when clicked; "See all" shows the rest.
export default function Work() {
  const [open, setOpen] = useState(null);
  const [all, setAll] = useState(false);
  const grid = useRef(null);
  const list = all ? useCases : useCases.slice(0, FIRST);

  // Morph between layouts where the browser supports view transitions; otherwise just switch.
  const change = (fn, after) => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !calm) {
      const t = document.startViewTransition(() => flushSync(fn));
      if (after) t.finished.then(after, after);
    } else { fn(); if (after) setTimeout(after, 60); }
  };

  const toggle = (title) => change(
    () => setOpen(open === title ? null : title),
    () => {
      const el = grid.current && grid.current.querySelector(".case.is-open");
      if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    },
  );
  const more = () => change(() => {
    if (all && open && !useCases.slice(0, FIRST).some((c) => c.title === open)) setOpen(null);
    setAll(!all);
  });

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Selected work</p>
          <h2>Use cases</h2>
          <p>Most of my work sits behind NDAs, so each case names the problem and how I built the fix, and leaves the client out. Select a case to open it.</p>
        </div>
        <div className="cases" ref={grid}>
          {list.map((c) => {
            const on = open === c.title;
            const id = "case-" + useCases.indexOf(c);
            return (
              <article className={"case" + (on ? " is-open" : "")} key={c.title} style={{ viewTransitionName: id, viewTransitionClass: "case" }}>
                <h3 className="case__h">
                  <button type="button" className="case__head" aria-expanded={on} aria-controls={id} onClick={() => toggle(c.title)}>
                    {c.image && <span className="case__thumb"><img src={c.image} alt="" width="640" height="400" loading="lazy" /></span>}
                    <span className="case__hd">
                      <span className="tag">{c.tag}</span>
                      <span className="case__title">{c.title}</span>
                    </span>
                    <span className="case__tog" aria-hidden="true"><Plus size={18} /></span>
                  </button>
                </h3>
                {on && (
                  <div className="case__detail" id={id}>
                    {c.image && <div className="case__img"><img src={c.image} alt={c.title} width="640" height="400" /></div>}
                    <div className="case__body">
                      <p className="blurb">{c.body}</p>
                      {c.metrics && c.metrics.length > 0 && (
                        <div className="metrics">
                          {c.metrics.map((m, i) => (
                            <div key={i}><div className="m">{m.value}</div><div className="c">{m.label}</div></div>
                          ))}
                        </div>
                      )}
                      <div className="stack">{c.stack.map((s) => <b key={s}>{s}</b>)}</div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        {useCases.length > FIRST && (
          <button type="button" className="btn btn--ghost cases__more" onClick={more}>
            {all ? "Show fewer" : `See all ${useCases.length} use cases`}
          </button>
        )}
      </div>
    </section>
  );
}
