import { useRef } from "react";
import { usePageReveal } from "../lib/gsap.js";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Process from "../components/Process.jsx";
import Brands from "../components/Brands.jsx";
import CTA from "../components/CTA.jsx";

export default function Home() {
  const ref = useRef(null);
  usePageReveal(ref);

  return (
    <div ref={ref}>
      <Hero />
      <Services />
      <Process />
      <Brands />
      <CTA />
    </div>
  );
}
