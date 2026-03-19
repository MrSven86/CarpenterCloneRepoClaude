import shaveSketch from "@/assets/shave-sketch.png";

const services = [
  { name: "SKIN FADE", price: "$45" },
  { name: "BEARD SHAPE-UP", price: "$30" },
  { name: "HOT TOWEL SHAVE", price: "$40" },
  { name: "TAPER CUT", price: "$35" },
  { name: "BEARD LINE-UP", price: "$20" },
  { name: "TEXTURED CROP", price: "$45" },
];

const PricingSection = () => {
  return (
    <section className="bg-background px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-12 sm:mb-16 gap-6">
          <h2 className="font-['Bowlby_One'] text-foreground text-3xl sm:text-4xl lg:text-6xl uppercase leading-none">
            CLIENT<br />FAVORITES
          </h2>
          <img
            src={shaveSketch}
            alt="Shave sketch"
            className="w-[160px] sm:w-[200px] lg:w-[260px] h-auto"
          />
        </div>

        <div className="space-y-0">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex justify-between items-center py-4 border-b border-foreground/10 last:border-b-0"
            >
              <span className="font-['Lato'] text-foreground text-sm tracking-wider">{s.name}</span>
              <span className="font-['Lato'] text-foreground text-sm">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
