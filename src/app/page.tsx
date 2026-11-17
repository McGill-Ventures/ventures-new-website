import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Programs } from "@/components/home/Programs";
import { Events } from "@/components/home/Events";
import { Why } from "@/components/home/Why";
import { FeaturedMembers } from "@/components/home/FeaturedMembers";
import { Placements } from "@/components/home/Placements";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/" darkOver="#hero" />
      <Hero />
      <Programs />
      <Events />
      <Why />
      <FeaturedMembers />
      <Placements />
      <Footer />
    </div>
  );
}
