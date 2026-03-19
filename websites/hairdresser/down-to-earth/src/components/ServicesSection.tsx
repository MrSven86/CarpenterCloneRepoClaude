import { ChevronRight } from "lucide-react";

const services = [
  "Haircut & Styling",
  "Hair Coloring",
  "Haircare & Treatments",
  "Hair Extensions",
  "Barbering Services",
];

const ServicesSection = () => (
  <section className="w-full bg-background py-20">
    <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left */}
        <div className="lg:w-[45%]">
          <h2 className="heading-xl mb-8">
            Luxury Hair
            <br />
            Salon Services
          </h2>
          <p className="body-text max-w-md mb-8">
            Benefit from our easy online booking, attentive service, and
            steadfast commitment to hygiene and customer satisfaction. Experience
            the distinct blend of style, comfort, and value that makes every
            visit to Roman K Salon exceptional.
          </p>
          <p className="body-text max-w-md mb-10">
            Discover excellence at our TriBeCa, Flatiron, and Upper East Side
            locations, where skilled stylists deliver personalized services in a
            luxurious setting.
          </p>
          <button className="btn-primary">Boka tid</button>
        </div>

        {/* Right - service list */}
        <div className="lg:w-[55%]">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center justify-between py-9 px-6 -mx-6 border-b border-foreground/10 group cursor-pointer transition-all duration-300 hover:bg-primary rounded-sm"
            >
              <h3 className="heading-lg group-hover:text-primary-foreground group-hover:translate-x-4 transition-all duration-300">
                {service}
              </h3>
              <ChevronRight
                size={24}
                className="text-foreground group-hover:text-primary-foreground group-hover:translate-x-2 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
