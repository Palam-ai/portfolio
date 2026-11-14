"use client";
import { useState } from "react";
import { expertise } from "@/lib/content";

const slug = (s) => "stack-" + s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Tech expertise: a 3D stack diagram of the layers, then the tools in each layer.
// Pointing at a layer, its label or its group lights up all three.
export default function Expertise() {
  const [active, setActive] = useState(null);
  const layers = [...expertise].sort((a, b) => b.level - a.level); // top layer first
  const on = (g) => ({
    onMouseEnter: () => setActive(g.group),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(g.group),
    onBlur: () => setActive(null),
  });

  return (
    <section className="section section--tint" id="expertise">
      <div className="wrap">
        <div className="exp-top">
          <div className="head">
            <p className="eyebrow">Tech expertise</p>
            <h2>The tools I build with</h2>
            <p>Grouped by where they sit in the stack, from code at the bottom to AI on top.</p>
          </div>

          <div className={"stk" + (active ? " has-active" : "")}>
            <div className="stk__scene" aria-hidden="true">
              <div className="stk__iso">
                <span className="stk__floor" />
                {layers.map((g) => (
                  <span key={g.group} className={"stk__plate" + (active === g.group ? " is-active" : "")}
                    style={{ "--z": g.level - 1 }} />
                ))}
              </div>
            </div>
            <ol className="stk__legend" aria-label="Layers of the stack, top to bottom">
              {layers.map((g) => (
                <li key={g.group}>
                  <a href={"#" + slug(g.group)} className={active === g.group ? "is-active" : ""}
                    style={{ "--z": g.level - 1 }} {...on(g)}>
                    <i />
                    <span>{g.group}</span>
                    <small>{g.items.length}</small>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {expertise.map((g) => (
          <div className={"exp-group" + (active === g.group ? " is-active" : "")} key={g.group} id={slug(g.group)}
            onMouseEnter={() => setActive(g.group)} onMouseLeave={() => setActive(null)}>
            <h3>{g.group}</h3>
            <div className="tiles">
              {g.items.map((it, i) => (
                <span className="tile" key={it.name} style={{ "--i": i }}>
                  {it.logo
                    ? <span className="logoplate"><img src={it.logo} alt="" width="22" height="22" /></span>
                    : <span className="dot" />}
                  {it.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
