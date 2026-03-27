import serviceDeck from "@/assets/service-deck.jpg";
import serviceStairs from "@/assets/service-stairs.jpg";
import serviceBalcony from "@/assets/service-balcony.jpg";

const services = [
  {
    image: serviceDeck,
    title: "Deck Waterproofing",
    description:
      "Your deck faces sun, rain, and daily foot traffic. Without proper protection, moisture works its way into the wood, leading to rot, mold, and eventually structural problems. Our waterproof coating systems create a durable barrier that keeps water out and your deck solid.",
  },
  {
    image: serviceStairs,
    title: "Stair Waterproofing",
    description:
      "Exterior stairs take a beating. They're exposed to the elements and handle concentrated foot traffic. Water infiltration can cause the treads to become slippery and weaken the structure. We apply slip-resistant waterproof coatings that protect the surface and the structure underneath.",
  },
  {
    image: serviceBalcony,
    title: "Balcony & Walkway Coating",
    description:
      "Balconies and walkways are often overlooked until they start leaking. When water gets through, it doesn't just damage the surface—it can affect the rooms below. Our waterproof membranes and coatings protect these high-exposure areas from moisture damage.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-background py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm font-sans uppercase tracking-[0.2em]">
            OUR SERVICES
          </span>
          <h2 className="text-foreground text-[42px] font-bold font-sans leading-[1.15] mt-3">
            Professional Waterproofing That Protects Your Investment
          </h2>
          <p className="text-muted-foreground text-base font-sans leading-7 mt-4 max-w-[680px] mx-auto">
            We specialize in deck and stair waterproofing—this focused expertise means we know the
            right systems and techniques.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg overflow-hidden border border-border flex flex-col"
            >
              <div className="w-full h-[280px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-primary font-bold text-xl font-sans underline decoration-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-7 mt-4 flex-1">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-primary font-semibold text-sm font-sans mt-6 inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  Learn More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-14">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-bold text-sm font-sans uppercase tracking-wider rounded hover:bg-primary/90 transition-colors">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
