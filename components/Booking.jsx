"use client";
import { useEffect, useRef, useState } from "react";
import { X, Check, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";

const EVT = "af:book";
const PURPOSES = ["Freelance project", "Full-time role", "Contract or consulting", "Something else"];
const EMPTY = { name: "", email: "", org: "", purpose: "" };

// Any "Book a call" control. Without JavaScript it is a plain link to Calendly;
// with it, the click opens the short form first.
export function BookButton({ className = "btn btn--primary", children }) {
  return (
    <a
      className={className}
      href={profile.calendly}
      target="_blank"
      rel="noopener"
      onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent(EVT)); }}
    >
      {children}
    </a>
  );
}

export default function BookingDialog() {
  const ref = useRef(null);
  const [step, setStep] = useState("form");
  const [v, setV] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [url, setUrl] = useState(profile.calendly);

  useEffect(() => {
    const open = () => {
      const d = ref.current;
      if (!d || d.open) return;
      setStep("form"); setErr({});
      d.showModal();
    };
    window.addEventListener(EVT, open);
    return () => window.removeEventListener(EVT, open);
  }, []);

  const close = () => ref.current && ref.current.close();
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (err[k]) setErr({ ...err, [k]: undefined }); };

  function submit(e) {
    e.preventDefault();
    const name = v.name.trim(), email = v.email.trim(), org = v.org.trim();
    const next = {};
    if (!name) next.name = "Enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Enter an email like you@company.com.";
    if (!v.purpose) next.purpose = "Choose what the call is about.";
    setErr(next);
    const first = ["name", "email", "purpose"].find((k) => next[k]);
    if (first) {
      const el = document.getElementById(first === "purpose" ? "bk-purpose-0" : "bk-" + first);
      if (el) el.focus();
      return;
    }
    // Calendly pre-fills name and email, and puts a1 into the event's first question.
    const q = new URLSearchParams({ name, email, a1: `Purpose: ${v.purpose}${org ? ` | Organization: ${org}` : ""}` });
    setUrl(`${profile.calendly}?${q.toString()}`);
    setStep("done");
  }

  return (
    <dialog
      ref={ref}
      className="bk"
      aria-labelledby="bk-title"
      onClick={(e) => { if (e.target === ref.current) close(); }}
    >
      <button type="button" className="bk__x" onClick={close} aria-label="Close"><X size={18} /></button>

      {step === "form" ? (
        <form className="bk__body" onSubmit={submit} noValidate>
          <p className="eyebrow">Book a call</p>
          <h2 id="bk-title">A few details first</h2>
          <p className="bk__lead">Tell me who you are and what the call is about. Then you pick a time on my calendar.</p>

          <div className="bk__field">
            <label htmlFor="bk-name">Name</label>
            <input id="bk-name" type="text" autoComplete="name" value={v.name} onChange={set("name")}
              aria-invalid={!!err.name} aria-describedby={err.name ? "bk-name-err" : undefined} />
            {err.name && <span className="bk__err" id="bk-name-err">{err.name}</span>}
          </div>

          <div className="bk__field">
            <label htmlFor="bk-email">Email</label>
            <input id="bk-email" type="email" autoComplete="email" inputMode="email" value={v.email} onChange={set("email")}
              aria-invalid={!!err.email} aria-describedby={err.email ? "bk-email-err" : undefined} />
            {err.email && <span className="bk__err" id="bk-email-err">{err.email}</span>}
          </div>

          <div className="bk__field">
            <label htmlFor="bk-org">Organization <span className="bk__opt">Optional</span></label>
            <input id="bk-org" type="text" autoComplete="organization" value={v.org} onChange={set("org")} />
          </div>

          <fieldset className="bk__field bk__purpose" aria-describedby={err.purpose ? "bk-purpose-err" : undefined}>
            <legend>What is the call about?</legend>
            <div className="bk__pills">
              {PURPOSES.map((p, i) => (
                <label key={p} className="bk__pill">
                  <input id={`bk-purpose-${i}`} type="radio" name="purpose" value={p}
                    checked={v.purpose === p} onChange={set("purpose")} />
                  <span>{p}</span>
                </label>
              ))}
            </div>
            {err.purpose && <span className="bk__err" id="bk-purpose-err">{err.purpose}</span>}
          </fieldset>

          <button type="submit" className="btn btn--primary bk__submit">Continue to calendar</button>
        </form>
      ) : (
        <div className="bk__body bk__done">
          <span className="bk__check" aria-hidden="true"><Check size={24} /></span>
          <h2 id="bk-title">Thanks, {v.name.trim().split(/\s+/)[0]}. Pick a time.</h2>
          <p className="bk__lead">My calendar opens in a new tab with your name and email already filled in.</p>
          <a className="btn btn--primary bk__submit" href={url} target="_blank" rel="noopener" onClick={close}>
            Open my calendar <ArrowUpRight size={16} />
          </a>
          <button type="button" className="bk__back" onClick={() => setStep("form")}>Edit my details</button>
        </div>
      )}
    </dialog>
  );
}
