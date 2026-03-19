import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StaffSection from "@/components/StaffSection";
import LocationSection from "@/components/LocationSection";
import AboutHiroshiSection from "@/components/AboutHiroshiSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StaffSection />
      <LocationSection />
      <AboutHiroshiSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
