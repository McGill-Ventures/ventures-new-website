import type { Metadata } from "next";
import { Inter, Space_Grotesk, Manrope, Plus_Jakarta_Sans, Hanken_Grotesk } from "next/font/google";
// Every font and stylesheet enters here. <Link> prefetch preloads route-level ones on every page that links to the route.
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

// Growth Studio body face. No preload, or every main-site page would fetch it unused.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mcgillvc.ca"),
  title: "McGill Ventures",
  description: "McGill Ventures partners with exceptional entrepreneurs to build transformative companies that shape tomorrow's world. Leading venture capital firm focused on innovation and growth.",
  keywords: "venture capital, investment, startup funding, innovation, McGill, Montreal, VC",
  authors: [{ name: "McGill Ventures" }],
  creator: "McGill Ventures",
  openGraph: {
    title: "McGill Ventures",
    description: "McGill Ventures partners with exceptional entrepreneurs to build transformative companies that shape tomorrow's world.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable} ${plusJakarta.variable} ${hankenGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
