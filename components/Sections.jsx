import {
  profile, stats, whatIDo, expertise, useCases,
  experience, credentials, hobbies, about,
} from "@/lib/content";
import { Icon } from "./Icons";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div>
          <div className="hero__chips">
            <span className="chip chip--live">Available for roles &amp; freelance</span>
            <span className="chip">Power Platform · Azure · Agentic AI</span>
          </div>
          <h1>I forge manual work into <span className="grad">reliable enterprise systems</span>.</h1>
          <p className="hero__role">{profile.title} · {profile.location}</p>
          <p className="hero__sub">{profile.tagline}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href={profile.calendly} target="_blank" rel="noopener">Book a 30-min call <Icon name="arrow" size={16} /></a>
            <a className="btn btn--ghost" href="#work">See my work</a>
          </div>
        </div>
        <div className="hero__photo">
          <div className="frame"><img src="hero.jpg" alt={profile.name} width="864" height="1045" /></div>
          <div className="pill"><div className="k">Experience</div><div className="v">5+ years</div></div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats" aria-label="By the numbers">
      <div className="wrap">
        {stats.map((s) => (
          <div className="stat" key={s.label}><div className="num">{s.num}</div><div className="lbl">{s.label}</div></div>
        ))}
      </div>
    </section>
  );
}

export function WhatIDo() {
  return (
    <section className="section" id="what-i-do">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">What I do</p>
          <h2>End-to-end Power Platform delivery</h2>
          <p>{whatIDo.lead}</p>
        </div>
        <div className="grid g-3">
          {whatIDo.cards.map((c, i) => (
            <div className={"card svc" + (i % 2 ? " svc--2" : "")} key={c.title}>
              <div className="ic"><Icon name={c.icon} /></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="section section--tint" id="expertise">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Tech expertise</p>
          <h2>The tools I build with</h2>
          <p>Grouped by where they sit in the stack, from low-code to code.</p>
        </div>
        {expertise.map((g) => (
          <div className="exp-group" key={g.group}>
            <h3>{g.group}</h3>
            <div className="tiles">
              {g.items.map((it) => (
                <span className="tile" key={it}><span className="dot" />{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Selected work</p>
          <h2>Use cases</h2>
          <p>Enterprise work lives behind NDAs, so each is described by the problem solved and the numbers moved, never by client name.</p>
        </div>
        <div className="cases">
          {useCases.map((c) => (
            <article className="case" key={c.title}>
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p className="blurb">{c.body}</p>
              <div className="metrics">
                {c.metrics.map((m, i) => (
                  <div key={i}><div className="m">{m.value}</div><div className="c">{m.label}</div></div>
                ))}
              </div>
              <div className="stack">{c.stack.map((s) => <b key={s}>{s}</b>)}</div>
            </article>
          ))}
        </div>
        <div className="note">
          <span style={{ color: "var(--accent)", flex: "none", marginTop: "2px" }}><Icon name="arrow" size={18} /></span>
          <div><b>These are placeholders.</b> Send your real use cases with numbers and I'll replace the dashes.</div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Experience</p>
          <h2>Where I've delivered</h2>
        </div>
        <div className="orgs">
          {experience.map((o) => (
            <div className="org" key={o.company}>
              <div className="logo">{o.company[0]}</div>
              <div className="co">{o.company}</div>
              <div className="role">{o.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Credentials() {
  const cls = (issuer) => issuer.includes("GitHub") ? "cred cred--gh" : issuer.includes("Claude") ? "cred cred--ai" : "cred";
  return (
    <section className="section" id="credentials">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Credentials</p>
          <h2>Certifications</h2>
          <p>Microsoft Power Platform and AI, GitHub, and the full Anthropic Claude track.</p>
        </div>
        <div className="creds">
          {credentials.map((col) => (
            <div className="cred-col" key={col.issuer}>
              <h3>{col.issuer}</h3>
              {col.items.map((it) => (
                <div className={cls(col.issuer)} key={it.code}>
                  <div className="badge">{it.code}</div>
                  <div className="t">{it.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section section--tint about" id="about">
      <div className="wrap">
        <div className="about__img"><img src="casual.jpg" alt={profile.name} width="800" height="1000" /></div>
        <div className="about__text">
          <p className="eyebrow">About me</p>
          <h2 style={{ margin: "14px 0 18px" }}>A bit about me</h2>
          <p>{about}</p>
          <div className="hobbies">
            {hobbies.map((h) => (
              <div className="hobby" key={h.title}><div className="ic"><Icon name={h.icon} size={18} /></div><span>{h.title}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="site-foot">
      <div className="wrap">
        <a className="brand" href="#home"><span className="spark" />alam<span>forge</span></a>
        <span>© {yr} {profile.name} · Built in {profile.location}</span>
      </div>
    </footer>
  );
}
