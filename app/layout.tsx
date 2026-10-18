import type { Metadata, Viewport } from "next";
import { Anton, Barlow } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "optional",
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Ironworks Gym — Strength, conditioning & coaching",
  description:
    "Strength, conditioning and coaching under one roof. Platforms, racks, real programming and people who know your name. Claim your free week.",
  openGraph: {
    title: "Ironworks Gym — Strength, conditioning & coaching",
    description: "Platforms, racks, real programming and people who know your name. Claim your free week.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E0C",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${barlow.variable}`}>
      <body className="min-h-screen">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-3 focus:font-bold focus:text-ink"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
