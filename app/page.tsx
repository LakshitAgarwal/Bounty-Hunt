import { NavbarComp } from "@/components/common/NavbarComp";
import { Spotlight } from "@/components/ui/spotlight-new";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <NavbarComp />
      <Spotlight />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
