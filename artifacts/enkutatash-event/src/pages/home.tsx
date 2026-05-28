import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Packages from "@/components/sections/Packages";
import Testimonials from "@/components/sections/Testimonials";
import Countdown from "@/components/sections/Countdown";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Packages />
      <Testimonials />
      <Countdown />
      <Booking />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
