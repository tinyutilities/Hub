import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { OceanAtmosphere } from "@/components/ocean-atmosphere";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// Two font families, kept deliberately minimal: one clean sans for body
// text and UI, one elegant serif reserved for display moments like the
// wordmark.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050b16",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <OceanAtmosphere />
        {children}
      </body>
    </html>
  );
}
