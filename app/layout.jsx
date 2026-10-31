import "./globals.css";
import { profile } from "@/lib/content";

export const metadata = {
  title: "alamforge — Sk Prithulbin Alam",
  description:
    "Sk Prithulbin Alam — Power Platform & Agentic AI Solutions Engineer. Apps, automations and AI agents on Microsoft Power Platform and Azure.",
  metadataBase: new URL("https://alamforge.com"),
  openGraph: {
    title: "alamforge — Sk Prithulbin Alam",
    description: "Power Platform & Agentic AI Solutions Engineer.",
    url: "https://alamforge.com",
    siteName: "alamforge",
    type: "website",
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
