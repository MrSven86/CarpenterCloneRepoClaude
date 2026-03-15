import AnimatedSection from "./AnimatedSection";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceMasonry from "@/assets/service-masonry.jpg";

const services = [
  {
    image: serviceInterior,
    title: "Painting Services",
    description:
      "Interior and exterior painting for rooms, trim, doors, fences, and outdoor areas. Brad uses quality paints and provides clean, professional finishes that protect your walls and refresh your home's appearance.",
  },
  {
    image: serviceExterior,
    title: "Door & Gate Services",
    description:
      "Door installation and repair, gate installation, fence repair and painting. Brad handles everything from fixing broken hinges to installing new doors and gates with proper alignment and smooth operation.",
  },
  {
    image: serviceMasonry,
    title: "Home Repairs & Maintenance",
    description:
      "Drywall repair, light plumbing and electrical work, appliance installation, ceiling fans, furniture assembly, trim work, and general handyman services. Most small repairs completed in just a few hours.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 5V4L4 0zM6 5v1H5L6 5z\'/%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative container mx-auto px-4">
        <AnimatedSection className="text-center mb-6">
          <h2 className="font-display text-secondary-foreground text-5xl uppercase tracking-wide mb-3">
            Our Services
          </h2>
          <div className="w-12 h-[5px] bg-white mx-auto mb-6" />
          <p className="text-secondary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
            Long Beach homeowners trust Brad-Man-Handy for skilled, reliable home repairs across multiple trades.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 mt-10">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[380px] object-cover rounded-t-[10px]"
                />
                <div className="bg-white p-5 pt-10 flex-1 shadow-[0px_2px_3px_0px_rgba(201,201,201,1.00)]">
                  <h3 className="font-display text-foreground text-2xl md:text-[28px] uppercase font-bold leading-9 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-foreground text-base leading-6">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <a
            href="#estimate"
            className="inline-block text-white text-lg font-bold uppercase tracking-wide px-12 py-5 rounded-[10px] bg-primary hover:bg-primary/90 transition-colors"
          >
            Schedule Your Estimate
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
