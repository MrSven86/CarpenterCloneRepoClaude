import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import serviceInterior from "@/assets/service-interior.webp";
import serviceExterior from "@/assets/service-exterior.webp";
import serviceCabinets from "@/assets/service-cabinets.webp";
import servicePrep from "@/assets/service-prep.webp";

const services = [
  {
    title: "Interior Painting",
    description:
      "Transform your living spaces with professional interior painting. We prepare surfaces properly with patching, sanding, and priming, protect your floors and furniture, and apply quality paints for a smooth, durable finish. Ideal for whole-home repaints, single rooms, accent walls, ceilings, and trim work.",
    image: serviceInterior,
  },
  {
    title: "Exterior Painting",
    description:
      "Protect and beautify your home's exterior with painting designed for Southern California weather. We thoroughly clean and prepare surfaces, repair any damaged areas, apply proper priming, and use quality exterior paints that stand up to sun exposure. Services include siding, trim, fascia and soffits, decks and railings, and entry doors.",
    image: serviceExterior,
  },
  {
    title: "Cabinet Refinishing",
    description:
      "Give your kitchen or bathroom a fresh look without the cost of replacement. Professional cabinet painting delivers a smooth, factory-like finish. We remove doors and drawer fronts, clean and degrease thoroughly, sand and prime properly, and apply durable paint for lasting results.",
    image: serviceCabinets,
  },
  {
    title: "Surface Preparation & Repair",
    description:
      "Quality painting starts with proper preparation. We handle drywall patching and repair, wood rot repair and replacement, pressure washing and surface cleaning, caulking of gaps and joints, and thorough sanding and priming of all surfaces.",
    image: servicePrep,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-background py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-[320px] shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-0.5 bg-foreground" />
                <span className="text-foreground uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", letterSpacing: "1.4px" }}>
                  Professional Painting Services
                </span>
              </div>

              <h2 className="text-foreground mb-4" style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "36px", lineHeight: "44px" }}>
                Comprehensive Painting Solutions
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontSize: "16px", lineHeight: "26px" }}>
                From single-room refreshes to complete exterior transformations, we handle residential and commercial painting projects throughout the South Bay area.
              </p>

              <Button variant="heroPrimary" size="xl">
                Get a Free Estimate
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`bg-card rounded-sm overflow-hidden shadow-sm border border-border transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
                >
                  <img src={service.image} alt={service.title} className="w-full h-[280px] object-cover" />
                  <div className="p-8 pb-16 min-h-[300px]">
                    <h3 className="text-foreground mb-4" style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "26px", lineHeight: "32px" }}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground" style={{ fontSize: "16px", lineHeight: "28px" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
