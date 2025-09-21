import type { Metadata } from "next";
import { Inter, Space_Grotesk, Manrope, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
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
    images: "/logos/logo_white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
