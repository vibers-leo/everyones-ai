import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import AcademyPreview from "@/components/landing/AcademyPreview";
import LabPreview from "@/components/landing/LabPreview";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <AcademyPreview />
      <LabPreview />
      <CTA />
      <Footer />
    </main>
  );
}
