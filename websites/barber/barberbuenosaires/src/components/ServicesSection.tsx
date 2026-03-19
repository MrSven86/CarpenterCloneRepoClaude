import razorImg from "@/assets/razor.png";
import scissorsImg from "@/assets/scissors.png";
import trimmerImg from "@/assets/trimmer.png";
import cornerShape from "@/assets/corner-shape.png";

const services = [
  {
    title: "Hair\nTreatments",
    description:
      "Revive your hair's natural shine and strength with our luxurious treatments, including keratin and deep conditioning.",
    icon: razorImg,
  },
  {
    title: "Coloring &\nHighlights",
    description:
      "Whether you want a subtle change, bold highlights, or a complete transformation.",
    icon: scissorsImg,
  },
  {
    title: "Haircuts &\nStyling",
    description:
      "We offer tailored haircuts and styling that suit your style.",
    icon: trimmerImg,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-background py-16 sm:py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-['Bowlby_One'] text-foreground text-3xl sm:text-4xl lg:text-5xl font-normal text-center mb-12 sm:mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[hsl(0_0%_96%)] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden p-8 sm:p-10 pb-16 sm:pb-20 flex flex-col justify-between min-h-[320px] sm:min-h-[380px]"
            >
              <div className="flex items-start justify-between mb-auto">
                <h3 className="font-['Bowlby_One_SC'] text-foreground text-lg sm:text-xl leading-7 whitespace-pre-line">
                  {service.title}
                </h3>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
                />
              </div>

              <p className="text-muted-foreground text-base sm:text-lg font-['Lato'] leading-7 mt-8">
                {service.description}
              </p>

              <div className="absolute bottom-0 right-0">
                <img
                  src={cornerShape}
                  alt=""
                  className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
