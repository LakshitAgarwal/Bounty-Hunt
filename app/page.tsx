import { NavbarComp } from "@/components/common/NavbarComp";
import { Spotlight } from "@/components/ui/spotlight-new";
import Hero from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <NavbarComp />
      <Spotlight />
      <div className="relative z-10">
        <Hero />
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
}
