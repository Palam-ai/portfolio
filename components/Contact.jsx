"use client";
import { useState } from "react";
import { profile } from "@/lib/content";
import { Icon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1400); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(profile.email).then(done).catch(select);
    } else { select(); }
    function select() {
      const el = document.getElementById("email-value");
      const r = document.createRange(); r.selectNode(el);
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(r); done();
    }
  }

  return (
    <section className="section contact section--tint" id="contact">
      <div className="wrap">
        <div>
          <p className="eyebrow">Let's talk</p>
          <h2>Have a process worth fixing?</h2>
          <p className="lead">Book a short call and tell me what's running on spreadsheets today. If it's a fit, I'll tell you straight how I'd build it.</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
            <a className="btn btn--primary" href={profile.calendly} target="_blank" rel="noopener">Book a 30-min call <Icon name="arrow" size={16} /></a>
          </div>
        </div>
        <div className="panel">
          <div className="field">
            <div className="k">Email</div>
            <div className="copyrow">
              <span id="email-value">{profile.email}</span>
              <button type="button" onClick={copyEmail}>{copied ? "Copied" : "Copy"}</button>
            </div>
          </div>
          <a className="linkrow" href={profile.calendly} target="_blank" rel="noopener">
            <span className="ic"><Icon name="calendar" size={18} /></span> Book a call on Calendly
          </a>
          <a className="linkrow" href={profile.linkedin} target="_blank" rel="noopener">
            <span className="ic"><Icon name="linkedin" size={17} /></span> linkedin.com/in/alam-prithulbin
          </a>
          <a className="linkrow" href={profile.blog} target="_blank" rel="noopener">
            <span className="ic"><Icon name="book" size={17} /></span> blogs.alamforge.com
          </a>
        </div>
      </div>
    </section>
  );
}
