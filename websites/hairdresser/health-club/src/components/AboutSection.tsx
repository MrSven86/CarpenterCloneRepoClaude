import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import salon1 from "@/assets/salon-1.png";
import salon2 from "@/assets/salon-2.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay } },
});

const images = [salon1, salon2];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section className="w-full bg-background py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text Content */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 max-w-[700px]"
        >
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-[42px] font-bold font-[family-name:var(--font-heading)] leading-tight md:leading-[1.2] mb-6 sm:mb-8">
            Más que un salón — tu espacio de belleza en Belgrano
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <p className="text-foreground/80 text-sm sm:text-[15px] md:text-base font-normal font-[family-name:var(--font-body)] leading-relaxed">
              En La Pelu nos dedicamos a que cada visita sea un momento para vos. Somos un equipo de
              profesionales que trabaja con paciencia, dedicación y atención al detalle — ya sea en un
              corte que refleje tu estilo, en una manicuría que dure semanas o en un tratamiento que
              renueve tu mirada.
            </p>
            <p className="text-foreground/80 text-sm sm:text-[15px] md:text-base font-normal font-[family-name:var(--font-body)] leading-relaxed">
              Estamos en Belgrano, dentro de la Galería Rincón de los Niños (Roosevelt 2350, Local 9).
              Nuestro espacio tiene algo que las clientas notan enseguida: se siente como llegar a casa.
              No por casualidad es uno de los elogios que más se repite en nuestras reseñas.
            </p>
          </div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 flex gap-3 sm:gap-4 items-stretch max-w-[600px] lg:max-w-none w-full"
        >
          {/* Main image with carousel controls */}
          <div className="relative flex-1 rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:min-h-[360px] md:min-h-[420px]">
            <img
              src={images[current]}
              alt="Nuestro salón"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Carousel controls */}
            <div className="absolute bottom-3 right-3 flex gap-1.5">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full bg-foreground/60 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/80 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4 text-background" />
              </button>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full bg-foreground/60 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/80 transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-4 h-4 text-background" />
              </button>
            </div>
          </div>

          {/* Second image (visible on md+) */}
          <div className="hidden sm:block flex-1 rounded-2xl overflow-hidden">
            <img
              src={images[(current + 1) % images.length]}
              alt="Nuestro salón"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
