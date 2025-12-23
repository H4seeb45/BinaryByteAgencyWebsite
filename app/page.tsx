import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ProofBar } from "@/components/proof-bar";
import { Services } from "@/components/services";
import { FeaturedWork } from "@/components/featured-work";
import { Team } from "@/components/team";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ProofBar />
      <Services />
      <FeaturedWork />
      <Team />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
