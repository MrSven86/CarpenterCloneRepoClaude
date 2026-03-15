import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedCompanySection from "@/components/TrustedCompanySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CoverageSection from "@/components/CoverageSection";
import EstimateSection from "@/components/EstimateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <TrustedCompanySection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <CoverageSection />
        <EstimateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
