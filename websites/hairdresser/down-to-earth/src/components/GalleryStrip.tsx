import bgBorder from "@/assets/bg_border.png";
import bgBorder1 from "@/assets/bg_border_1.png";
import bgBorder2 from "@/assets/bg_border_2.png";
import bgBorder3 from "@/assets/bg_border_3.png";

const items = [
  { img: bgBorder, label: "Brushing" },
  { img: bgBorder2, label: "Extensiones De Pelo Naturales" },
  { img: bgBorder3, label: "Masajes Capilares" },
  { img: bgBorder1, label: "Balayage & Babylights" },
];

const GalleryStrip = () => (
  <section className="w-full">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="relative group overflow-hidden aspect-square">
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center text-center px-4">
            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-primary-foreground tracking-wide">
              {item.label}
            </h3>
            <p className="text-primary-foreground/80 text-sm font-body mt-2 tracking-wide">
              Más información
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default GalleryStrip;
