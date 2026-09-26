import Hero from "../components/Hero.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import Process from "../components/Process.jsx";
import Clients from "../components/Clients.jsx";
import Ready from "../components/Ready.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesGrid />
      <Process />
      <Clients />
      <Ready />
    </>
  );
}
