import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cookie Consent Code Generator – GDPR Compliant Banners",
  description: "Generate production-ready, legally compliant cookie consent banners for GDPR, CCPA, and more. Instant code snippets for web developers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bb8d2126-b9bf-4f98-98c1-303924169349"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
