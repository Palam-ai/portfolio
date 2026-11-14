"use client";
import { useRef, useState } from "react";
import { Download, Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";
import { profile, resume } from "@/lib/content";

// Resume section: a page preview, a full-size reader and a PDF download.
// Renders nothing until a resume has been published with `npm run resume`.
export default function Resume() {
  const ref = useRef(null);
  const [zoom, setZoom] = useState(false);
  if (!resume) return null;

  const n = resume.pages.length;
  const facts = ["PDF", `${n} page${n > 1 ? "s" : ""}`, `Updated ${resume.updated}`];
  const fileName = resume.file.split("/").pop();
  const open = () => { setZoom(false); ref.current && ref.current.showModal(); };
  const close = () => ref.current && ref.current.close();

  return (
    <section className="section rs" id="resume">
      <div className="wrap">
        <div className="rs__text">
          <p className="eyebrow">Resume</p>
          <h2>My resume</h2>
          <p className="rs__lead">The condensed version of everything on this site. Read it right here, or download the PDF to pass on to your team.</p>
          <p className="rs__facts">{facts.map((f) => <span key={f}>{f}</span>)}</p>
          <div className="rs__cta">
            <a className="btn btn--primary" href={resume.file} download={fileName}>
              <Download size={16} /> Download PDF
            </a>
            <button type="button" className="btn btn--ghost" onClick={open}>
              <Maximize2 size={16} /> Read full size
            </button>
          </div>
        </div>

        <button type="button" className="rs__paper" onClick={open} aria-label="Read the resume full size">
          <img src={resume.pages[0]} alt={`Resume of ${profile.name}, page 1`} width={resume.width} height={resume.height} loading="lazy" />
          <span className="rs__hint" aria-hidden="true"><Maximize2 size={14} /> Read full size</span>
        </button>
      </div>

      <dialog
        ref={ref}
        className="rv"
        aria-label={`Resume of ${profile.name}`}
        onClick={(e) => { if (e.target === ref.current) close(); }}
      >
        <div className="rv__bar">
          <span className="rv__title">Resume <span>{profile.name}</span></span>
          <button type="button" className="icon-btn" onClick={() => setZoom(!zoom)} aria-pressed={zoom}
            aria-label={zoom ? "Zoom out" : "Zoom in"} title={zoom ? "Zoom out" : "Zoom in"}>
            {zoom ? <ZoomOut size={17} /> : <ZoomIn size={17} />}
          </button>
          <a className="btn btn--primary rv__dl" href={resume.file} download={fileName} aria-label="Download PDF">
            <Download size={15} /> <span>Download PDF</span>
          </a>
          <button type="button" className="icon-btn" onClick={close} aria-label="Close"><X size={18} /></button>
        </div>
        <div className={"rv__pages" + (zoom ? " is-zoom" : "")}>
          {resume.pages.map((src, i) => (
            <img key={src} src={src} alt={`Resume of ${profile.name}, page ${i + 1}`}
              width={resume.width} height={resume.height} onClick={() => setZoom(!zoom)} />
          ))}
        </div>
      </dialog>
    </section>
  );
}
