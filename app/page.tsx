import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Playground from "@/components/sections/Playground";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedWorks />
      <Playground />
      <Capabilities />
      <Contact />
    </main>
  );
}