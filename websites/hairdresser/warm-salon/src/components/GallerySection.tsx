import scissorsIcon from "@/assets/scissors.svg";
import gallery01 from "@/assets/gallery-01.png";
import gallery02 from "@/assets/gallery-02.png";
import gallery03 from "@/assets/gallery-03.png";
import gallery04 from "@/assets/gallery-04.png";
import gallery05 from "@/assets/gallery-05.png";
import gallery06 from "@/assets/gallery-06.png";
import gallery07 from "@/assets/gallery-07.png";
import gallery08 from "@/assets/gallery-08.png";

const images = [
  { src: gallery01, alt: "Resultado de color" },
  { src: gallery02, alt: "Alisado profesional" },
  { src: gallery03, alt: "Interior del salón" },
  { src: gallery04, alt: "Mechas y reflejos" },
  { src: gallery05, alt: "Ondas naturales" },
  { src: gallery06, alt: "Herramientas del salón" },
  { src: gallery07, alt: "Color vibrante" },
  { src: gallery08, alt: "Rulos naturales" },
];

const GallerySection = () => {
  return (
    <section className="w-full bg-background py-12 md:py-16">
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-[209px] mb-8 md:mb-10">
        <div className="flex items-start gap-4">
          <div>
            <p className="font-montserrat text-sm text-muted-foreground tracking-wide mb-1">
              #PeluqueríaKarina
            </p>
            <h2 className="font-korolev text-[24px] md:text-[32px] font-bold text-foreground leading-tight">
              Galería de Trabajos
            </h2>
          </div>
          <img src={scissorsIcon} alt="" className="w-10 md:w-12 h-10 md:h-12 mt-1" />
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-16 lg:px-[209px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;