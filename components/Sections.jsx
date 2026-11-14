import {
  profile, whatIDo, experience, credentials, hobbies, about,
} from "@/lib/content";
import { Icon } from "./Icons";
import { BookButton } from "./Booking";
import { Rotator, Tilt } from "./Motion";
import { CarFront, BookOpen, LineChart, AppWindow, Workflow, Bot, Database, LifeBuoy } from "lucide-react";

const hobbyIcon = { car: CarFront, book: BookOpen, chart: LineChart };
const svcIcon = { app: AppWindow, flow: Workflow, agent: Bot, data: Database, support: LifeBuoy };

export function Hero() {
  const certCount = credentials.reduce((n, c) => n + c.items.length, 0);
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div>
          <div className="hero__chips">
            <span className="chip chip--live">Available for Opportunities</span>
            <span className="chip">Microsoft Power Platform · Azure · Agentic AI</span>
          </div>
          <p className="hero__greet">Hi, I'm <span className="hero__nm">{profile.name}</span>.</p>
          <h1 aria-label={`I forge manual work into ${profile.forge[0]}.`}>
            <span aria-hidden="true">I forge manual work into</span>
            <Rotator items={profile.forge} />
          </h1>
          <p className="hero__role">{profile.title} · {profile.location}</p>
          <p className="hero__sub">{profile.tagline}</p>
          <div className="hero__cta">
            <BookButton>Book a 30-min call <Icon name="arrow" size={16} /></BookButton>
            <a className="btn btn--ghost" href="#work">See my work</a>
          </div>
        </div>
        <div className="hero__photo">
          <Tilt className="frame"><img src="hero.jpg" alt={profile.name} width="866" height="1172" /></Tilt>
          <div className="pill"><div className="k">Experience</div><div className="v">5+ years</div></div>
          <div className="pill pill--b"><div className="k">Certified</div><div className="v">{certCount} credentials</div></div>
        </div>
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section className="mission" aria-label="Mission">
      <div className="wrap">
        <span className="mission__label">Mission</span>
        <p className="mission__text">{profile.mission}</p>
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
          {whatIDo.cards.map((c, i) => {
            const S = svcIcon[c.icon];
            return (
              <div className={"card svc" + (i % 2 ? " svc--2" : "")} key={c.title}>
                <div className="ic">{S ? <S size={22} strokeWidth={1.9} /> : <Icon name={c.icon} />}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            );
          })}
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
              <div className="logo"><img src={o.logo} alt={o.company} width="112" height="112" /></div>
              <div className="co">{o.company}</div>
              <div className="role">{o.role}</div>
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
          {about.map((para, i) => (
            <p key={i} style={{ marginBottom: i < about.length - 1 ? "14px" : 0 }}>{para}</p>
          ))}
          <div className="hobbies">
            {hobbies.map((h) => {
              const H = hobbyIcon[h.icon];
              return (
                <div className="hobby" key={h.title}><div className="ic"><H size={18} strokeWidth={2} /></div><span>{h.title}</span></div>
              );
            })}
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
        <a className="brand brand--foot" href="#home">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 120 120" width="28" height="28" role="img">
              <defs>
                <linearGradient id="afShieldFoot" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#3A54D6" /><stop offset="1" stopColor="#0FB5AE" />
                </linearGradient>
              </defs>
              <path d="M60 12 L102 26 V62 Q102 92 60 110 Q18 92 18 62 V26 Z" fill="url(#afShieldFoot)" />
              <text x="60" y="68" textAnchor="middle" fill="#fff"
                style={{ fontFamily: "var(--font-display)", fontSize: "33px", fontWeight: 800, letterSpacing: "1px" }}>AF</text>
              <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.9">
                <line x1="60" y1="80" x2="60" y2="89" /><line x1="55" y1="84.5" x2="65" y2="84.5" />
                <line x1="56.6" y1="81.1" x2="63.4" y2="87.9" /><line x1="63.4" y1="81.1" x2="56.6" y2="87.9" />
              </g>
            </svg>
          </span>
          <span className="brand__logo">alam<span>forge</span></span>
        </a>
        <span>© {yr} {profile.name} · Built in {profile.location}</span>
      </div>
    </footer>
  );
}
