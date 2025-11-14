import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyExperience from "@/components/MyExperience";
import StickyCards from "@/components/stickyCards/stickyCards";

export default function Home() {
  return (
   <div>
    <section className="intro">
      <Hero/>
    </section>
    <MyExperience />
    <StickyCards />
    <section className="outro">
      <Footer />
    </section>
   </div>
  );
}
