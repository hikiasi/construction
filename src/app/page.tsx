import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Advantages from "@/components/sections/Advantages";
import Reviews from "@/components/sections/Reviews";
import ContactForm from "@/components/sections/ContactForm";
import StickyCTA from "@/components/ui/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <Solution />
      <Services />
      <Portfolio />
      <Process />
      <Advantages />
      <Reviews />
      <ContactForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
