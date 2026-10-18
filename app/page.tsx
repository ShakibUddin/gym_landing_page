import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { DisciplineStrip } from "@/components/DisciplineStrip";
import { Programs } from "@/components/Programs";
import { Facility } from "@/components/Facility";
import { Schedule } from "@/components/Schedule";
import { Coaches } from "@/components/Coaches";
import { Membership } from "@/components/Membership";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Nav />
      <main id="top">
        <Hero />
        <DisciplineStrip />
        <Programs />
        <Facility />
        <Schedule />
        <Coaches />
        <Membership />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
