import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import serviceHair from "@/assets/service-hair.png";
import serviceNails from "@/assets/service-nails.png";
import serviceLashes from "@/assets/service-lashes.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay } },
});

const services = [
  {
    title: "Peluquería",
    description: "Corte, color, balayage, mechas, alisado, botox capilar, keratina y brushing. Para damas, caballeros y niños.",
    image: serviceHair,
  },
  {
    title: "Manicuría y Pedicuría",
    description: "Esmaltado semipermanente, kapping, uñas esculpidas, nail art personalizado y belleza de pies.",
    image: serviceNails,
  },
  {
    title: "Pestañas y Cejas",
    description: "Esmaltado semipermanente, kapping, uñas esculpidas, nail art personalizado y belleza de pies.",
    image: serviceLashes,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-foreground py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-full aspect-square rounded-none overflow-hidden mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-primary-foreground text-lg font-bold font-[family-name:var(--font-heading)] leading-7 text-center mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground text-sm font-normal font-[family-name:var(--font-body)] leading-5 text-center max-w-[320px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <button className="bg-background text-foreground rounded-md shadow-2xl flex items-center gap-4 px-8 py-4 hover:bg-background/90 transition-colors">
            <span className="text-base font-bold font-[family-name:var(--font-body)] leading-7">
              Ver todos los servicios
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
