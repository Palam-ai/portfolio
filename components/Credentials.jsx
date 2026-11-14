"use client";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { credentials } from "@/lib/content";

const tone = (issuer) => issuer.includes("GitHub") ? " cred--gh" : issuer.includes("Claude") ? " cred--ai" : "";

// Certifications. A card opens when clicked: the badge grows and a link to the issuer's site appears.
export default function Credentials() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" id="credentials">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Credentials</p>
          <h2>Certifications</h2>
          <p>Microsoft Power Platform and AI, GitHub, and the full Anthropic Claude track. Select any certificate to open it.</p>
        </div>
        <div className="creds">
          {credentials.map((col) => (
            <div className="cred-col" key={col.issuer}>
              <h3>{col.issuer}</h3>
              {col.items.map((it) => {
                const on = open === it.code;
                const href = it.verify || it.view;
                return (
                  <div className={"cred" + tone(col.issuer) + (on ? " is-open" : "")} key={it.code}>
                    <button type="button" className="cred__head" aria-expanded={on} aria-controls={"cred-" + it.code}
                      onClick={() => setOpen(on ? null : it.code)}>
                      {it.logo
                        ? <span className="badge badge--logo"><img src={it.logo} alt="" width="40" height="40" loading="lazy" /></span>
                        : <span className="badge">{it.code}</span>}
                      <span className="t">{it.name}<span className="code">{it.code}</span></span>
                      <ChevronDown className="cred__chev" size={18} aria-hidden="true" />
                    </button>
                    <div className="cred__more" id={"cred-" + it.code}>
                      <div>
                        <p className="cred__by">Issued by {col.issuer.split(" ")[0]}</p>
                        {href && (
                          <a className="cred__link" href={href} target="_blank" rel="noopener">
                            {it.verify ? "Verify this credential" : `View on ${col.site}`} <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
