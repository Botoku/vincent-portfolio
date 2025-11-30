import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyExperience from "@/components/MyExperience";
import StickyCards from "@/components/stickyCards/stickyCards";
import { ReactLenis } from "lenis/react";
export default function Home() {
  return (
    <div>
      <ReactLenis root />
      <section className="intro">
        <Hero />
      </section>
      <MyExperience />
      <StickyCards />
      <section className="outro">
        <Footer />
      </section>
    </div>
  );
}
