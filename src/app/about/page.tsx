import type { Metadata } from "next";
import "./about.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Hero } from "@/components/about/Hero";
import { Letter } from "@/components/about/Letter";
import { Manifesto } from "@/components/about/Manifesto";
import { TermSheet } from "@/components/about/TermSheet";

export const metadata: Metadata = {
  title: "About | McGill Ventures",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/about" darkOver="#hero" />
      <Hero />
      <Letter />
      <Manifesto />
      <TermSheet />
      <Footer />
    </div>
  );
}
