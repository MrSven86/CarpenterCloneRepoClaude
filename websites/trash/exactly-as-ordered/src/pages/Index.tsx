import Header from "@/components/Header";
import HeroSection1 from "@/components/HeroSection1";
import HeroSection2 from "@/components/HeroSection2";
import ServiceIntroSection from "@/components/ServiceIntroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <Header />
      {/* Hero with padding for fixed header */}
      <div className="pt-[56px] lg:pt-[88px]">
        <HeroSection2 />
      </div>
      {/* Service Intro Section */}
      <ServiceIntroSection />
      {/* Services Grid Section */}
      <ServicesSection />
      {/* Reviews Section */}
      <ReviewsSection />
      {/* Gallery Section */}
      <GallerySection />
      {/* About Section */}
      <AboutSection />
      {/* CTA Section */}
      <CTASection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;