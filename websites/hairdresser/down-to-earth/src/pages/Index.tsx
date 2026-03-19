import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GalleryStrip from "@/components/GalleryStrip";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import SocialSection from "@/components/SocialSection";
import InfoCards from "@/components/InfoCards";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <GalleryStrip />
    <AboutSection />
    <TeamSection />
    <PricingSection />
    <ReviewsSection />
    <SocialSection />
    <InfoCards />
    <NewsletterSection />
    <Footer />
  </div>
);

export default Index;
