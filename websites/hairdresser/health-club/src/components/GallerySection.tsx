import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9];

const GallerySection = () => {
  const duplicated = [...images, ...images];

  return (
    <section className="w-full bg-background overflow-hidden py-4">
      <div className="flex gap-4 animate-marquee-reverse">
        {duplicated.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden rounded-lg"
            style={{ width: "320px", height: "260px" }}
          >
            <img
              src={src}
              alt={`Galería La Pelu ${(i % images.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
