import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import credentialsCollage from "@/assets/credentials-collage.png";

const CredentialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Collage Image */}
          <div className="flex justify-center">
            <img
              src={credentialsCollage}
              alt="Quality painting project showcasing professional work"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-foreground" />
              <span className="uppercase text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "19.8px", letterSpacing: "1.8px" }}>
                Why Choose Anchor Painting
              </span>
            </div>

            <h2 className="text-foreground mb-6 text-3xl md:text-[40px] md:leading-[50px]" style={{ fontFamily: "'Lora', serif", fontWeight: 500 }}>
              Quality Painting Backed by Verified Credentials
            </h2>

            <p className="text-muted-foreground mb-8 max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "26px" }}>
              Getting your home or business painted shouldn't mean gambling on unverified contractors. We're a California-licensed C33 painting contractor with independently verified credentials serving Hawthorne and the South Bay area.
            </p>

            {/* Feature: Licensed */}
            <div className="flex items-start gap-4 mb-6">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1a9a8a' }}>
                <CheckCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-foreground mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "26px" }}>
                  Licensed California Contractor
                </h3>
                <p className="text-muted-foreground max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "26px" }}>
                  BuildZoom rates us 92 out of 100, placing us in the top 32% of all California licensed contractors. Our C33 Painting and Decorating license requires four years of journeyman experience and passing state examinations, ensuring we meet California's professional standards for surface preparation, material selection, and application techniques.
                </p>
              </div>
            </div>

            {/* Feature: Local */}
            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1a9a8a' }}>
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-foreground mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "26px" }}>
                  Local Hawthorne Operation
                </h3>
                <p className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "26px" }}>
                  Based right here in Hawthorne at 90250, we understand South Bay homes and Southern California's climate conditions. We serve Hawthorne, Inglewood, Manhattan Beach, Redondo Beach, El Segundo, and surrounding communities with the local knowledge that comes from being part of this community.
                </p>
              </div>
            </div>

            <Button className="bg-hero-cta hover:bg-hero-cta/90 text-primary-foreground uppercase tracking-widest px-10 py-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "2px" }}>
              Request Your Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
