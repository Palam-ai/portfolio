// Small inline icon set (stroke icons, currentColor). No external dependency.
const s = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

export function Icon({ name, size = 22 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", ...s };
  switch (name) {
    case "app":
      return (<svg {...p}><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M3 9h18M9 21V9" /></svg>);
    case "flow":
      return (<svg {...p}><path d="M4 12h4l2-7 4 14 2-7h4" /></svg>);
    case "agent":
      return (<svg {...p}><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 8V4M9 13h.01M15 13h.01M2 13h2M20 13h2" /></svg>);
    case "data":
      return (<svg {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg>);
    case "support":
      return (<svg {...p}><path d="M12 2a7 7 0 0 0-7 7v4a3 3 0 0 0 3 3h1v-7H7V9a5 5 0 0 1 10 0v3h-2v7h1a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7Z" /></svg>);
    case "calendar":
      return (<svg {...p}><rect x="3" y="4" width="18" height="17" rx="2.5" /><path d="M3 9h18M8 2v4M16 2v4" /></svg>);
    case "mail":
      return (<svg {...p}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>);
    case "linkedin":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.14V21H19.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H11V9Z" /></svg>);
    case "car":
      return (<svg {...p}><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M4 11h16a1 1 0 0 1 1 1v4h-2M3 16v-4a1 1 0 0 1 1-1M3 16h2m0 0a2 2 0 0 0 4 0m8 0a2 2 0 0 0 4 0" /></svg>);
    case "book":
      return (<svg {...p}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" /><path d="M19 19H6" /></svg>);
    case "chart":
      return (<svg {...p}><path d="M4 20V10M10 20V4M16 20v-6M22 20H2" /></svg>);
    case "sun":
      return (<svg {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
    case "menu":
      return (<svg {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>);
    case "arrow":
      return (<svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
    default:
      return null;
  }
}
