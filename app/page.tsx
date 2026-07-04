import { Background } from "@/components/ui/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogosStrip } from "@/components/sections/LogosStrip";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main id="main">
        <Hero />
        <LogosStrip />
        <Services />
        <Solutions />
        <WhyUs />
        <Process />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
