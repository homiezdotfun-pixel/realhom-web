import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homiez.fun — Bet Against Your Homiez",
  description:
    "The ultimate social betting platform. Challenge your friends, place bets, settle scores. No cap.",
  openGraph: {
    title: "Homiez.fun — Bet Against Your Homiez",
    description:
      "The ultimate social betting platform. Challenge your friends, place bets, settle scores.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Space Grotesk', monospace, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
