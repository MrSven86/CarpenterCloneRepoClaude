import { useState } from "react";
import squareBrush from "@/assets/square-brush.svg";
import galleryArrowLeft from "@/assets/gallery-arrow-left.svg";
import galleryArrowRight from "@/assets/gallery-arrow-right.svg";

const allImages = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=627&h=400&fit=crop",
];

const GallerySection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const totalPages = Math.ceil(allImages.length / 3);
  const currentPage = Math.floor(startIndex / 3) % totalPages;

  const handlePrev = () => setStartIndex((prev) => (prev - 3 + allImages.length) % allImages.length);
  const handleNext = () => setStartIndex((prev) => (prev + 3) % allImages.length);

  const visibleImages = [
    allImages[startIndex % allImages.length],
    allImages[(startIndex + 1) % allImages.length],
    allImages[(startIndex + 2) % allImages.length],
  ];

  return (
    <section className="w-full py-10 lg:py-[60px]">
      <div className="max-w-[1920px] mx-auto relative px-4 lg:px-0">
        <div className="text-center mb-6 lg:mb-[30px]">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src={squareBrush} alt="" className="w-[32px] h-[36px]" />
            <span className="text-primary text-xl lg:text-2xl font-bold uppercase leading-6">GALERÍA</span>
          </div>
          <h2 className="text-3xl lg:text-[50px] font-normal text-foreground/80 leading-tight lg:leading-[56px]" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}>
            Nuestros Trabajos Recientes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {visibleImages.map((src, i) => (
            <div key={i} className={`${i === 2 ? "hidden lg:block" : i === 1 ? "hidden sm:block" : ""} overflow-hidden`}>
              <img className="w-full h-64 sm:h-80 lg:h-96 object-cover" src={src} alt={`Imagen de galería ${i + 1}`} />
            </div>
          ))}
        </div>

        <button onClick={handlePrev} className="absolute left-2 lg:left-[45px] top-[calc(50%+40px)] -translate-y-1/2">
          <img src={galleryArrowLeft} alt="Anterior" className="w-12 h-12 lg:w-20 lg:h-20" />
        </button>
        <button onClick={handleNext} className="absolute right-2 lg:right-[45px] top-[calc(50%+40px)] -translate-y-1/2">
          <img src={galleryArrowRight} alt="Siguiente" className="w-12 h-12 lg:w-20 lg:h-20" />
        </button>

        <div className="flex items-center justify-center gap-[6px] mt-6 lg:mt-[30px]">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full cursor-pointer ${i === currentPage ? "w-4 h-4 bg-primary" : "w-3 h-3 bg-muted-foreground/50"}`}
              onClick={() => setStartIndex(i * 3)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
