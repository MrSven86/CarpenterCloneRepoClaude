import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";

const images = [
  { src: gallery1, alt: "Bathroom painting project" },
  { src: gallery2, alt: "Exterior painting - dark siding" },
  { src: gallery3, alt: "Exterior painting - stucco building" },
  { src: gallery4, alt: "Exterior painting - commercial property" },
  { src: gallery5, alt: "Exterior painting - residential siding" },
  { src: gallery6, alt: "Interior painting - bedroom" },
  { src: gallery7, alt: "Kitchen cabinet painting - white cabinets" },
  { src: gallery8, alt: "Kitchen cabinet refinishing - grey cabinets" },
  { src: gallery9, alt: "Kitchen cabinet painting - modern dark cabinets" },
  { src: gallery10, alt: "Interior painting - living room" },
];

const GallerySection = () => {
  // Duplicate images for seamless infinite loop
  const allImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden py-12 bg-background">
      <div className="flex items-center gap-3 mb-8 container mx-auto px-4">
        <span className="w-6 h-0.5 bg-foreground" />
        <span
          className="text-foreground uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "1.4px",
          }}
        >
          Our Work
        </span>
      </div>

      <div className="relative">
        <div
          className="flex gap-3 sm:gap-4 animate-scroll-left w-max"
        >
          {allImages.map((image, index) => (
            <div
              key={index}
              className="shrink-0 w-[280px] sm:w-[400px] h-[350px] sm:h-[500px] rounded-sm overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
