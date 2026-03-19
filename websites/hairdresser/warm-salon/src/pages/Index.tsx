import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import SalonBanner from "@/components/SalonBanner";
import GallerySection from "@/components/GallerySection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <SalonBanner />
      <GallerySection />
      <LocationsSection />
      <Footer />
    </div>
  );
};

export default Index;
