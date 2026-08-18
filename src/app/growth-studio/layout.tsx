import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./growth-studio.css";

// Space Grotesk already ships from the root layout as --font-space-grotesk.
// Only the body face is added here.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mcgillvc.ca"),
};

export default function GrowthStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`gs-root ${hankenGrotesk.variable}`}>{children}</div>
  );
}
