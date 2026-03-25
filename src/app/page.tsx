import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import CoreFeatures from "@/components/landing/CoreFeatures";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CoreFeatures />
      <Footer />
    </main>
  );
}
