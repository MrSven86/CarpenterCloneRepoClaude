import { ArrowRight } from "lucide-react";
import cabinetPaintingImg from "@/assets/services/cabinet-painting.jpg";
import commercialPaintingImg from "@/assets/services/commercial-painting.jpg";
import drywallInstallationImg from "@/assets/services/drywall-installation.jpg";

const services = [
  {
    title: "Interior Painting",
    description: "Professional interior painting for residential and commercial properties, including walls, ceilings, trim, and surface preparation.",
    image: cabinetPaintingImg,
    popular: true,
  },
  {
    title: "Exterior Painting",
    description: "Complete exterior painting services including surface preparation, priming, and protective coating applications for lasting results.",
    image: commercialPaintingImg,
    popular: false,
  },
  {
    title: "Surface Preparation & Finishing",
    description: "Proper surface preparation including scraping, sanding, patching, and priming to ensure quality paint adhesion and finish.",
    image: drywallInstallationImg,
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-general-sans font-medium text-secondary text-base mb-2 block">
            What We Do
          </span>
          <h2 className="font-satoshi font-bold text-[40px] lg:text-[48px] text-secondary">
            Our Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group">
              {/* Image Container with Parallax Effect */}
              <div className="relative rounded-xl overflow-hidden mb-6">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                {service.popular && (
                  <span className="absolute bottom-4 left-4 bg-secondary text-white font-satoshi font-bold text-sm px-4 py-2 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              
              {/* Content */}
              <h3 className="font-satoshi font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-satoshi font-bold text-sm text-secondary hover:text-secondary/80 transition-colors"
              >
                Read More
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-satoshi font-bold text-sm rounded transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
