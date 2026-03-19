import serviceHair from "@/assets/service-hair.png";
import serviceHeadSpa from "@/assets/service-headspa.png";
import serviceSkincare from "@/assets/service-skincare.png";
import serviceAcupuncture from "@/assets/service-acupuncture.png";

const services = [
  {
    image: serviceHair,
    title: "CORTE & COLOR",
    description:
      "Cortes para mujer y hombre, coloración, mechas, babylights. Karina escucha lo que querés y trabaja para que el resultado sea exactamente eso.",
  },
  {
    image: serviceHeadSpa,
    title: "TRATAMIENTOS CAPILARES",
    description:
      "Botox capilar, tratamientos de keratina, alisado progresivo y japonés, y tratamientos de nutrición. Para pelo que necesita recuperación, cuidado o un cambio duradero.",
  },
  {
    image: serviceSkincare,
    title: "MANICURA & PEDICURA",
    description:
      "Manicura, pedicura con parafina y esmaltado semipermanente — disponible con turno previo.",
  },
  {
    image: serviceAcupuncture,
    title: "WELLA PROFESSIONALS",
    description:
      "Todos nuestros servicios utilizan productos Wella Professionals, la marca de coloración profesional más reconocida del mundo. Resultados que duran y cuidan tu pelo.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-background py-12 md:py-20 px-6 md:px-16 lg:px-[209px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col">
            <div className="w-full aspect-[3/4] overflow-hidden mb-4 md:mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-montserrat text-sm md:text-lg font-medium text-foreground uppercase tracking-wide mb-2 md:mb-4">
              {service.title}
            </h3>
            <p className="font-montserrat text-xs md:text-sm font-normal text-foreground leading-5 md:leading-6 mb-4 md:mb-6">
              {service.description}
            </p>
            <a
              href="#"
              className="font-montserrat text-xs md:text-sm font-bold text-primary uppercase tracking-wide hover:underline"
            >
              MÁS DETALLES
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;