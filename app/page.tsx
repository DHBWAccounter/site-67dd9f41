import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Menus } from "@/components/menus";
import { Testimonials } from "@/components/testimonials";
import { Stats } from "@/components/stats";
import { Gallery } from "@/components/gallery";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Menus />
      <Testimonials />
      <Stats />
      <Gallery />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
