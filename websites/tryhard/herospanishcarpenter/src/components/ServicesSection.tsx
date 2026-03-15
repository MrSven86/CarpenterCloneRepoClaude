import squareBrush from "@/assets/square-brush.svg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceConcrete from "@/assets/service-concrete.jpg";
import serviceCabinet from "@/assets/service-cabinet.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import servicePowerwash from "@/assets/service-powerwash.jpg";

const services = [
  { image: serviceExterior, title: "Pintura Exterior", description: "Creemos que los detalles más pequeños importan. Nunca apresuraremos su trabajo de pintura exterior. Utilizamos los productos de la más alta calidad de la industria para garantizar resultados duraderos." },
  { image: serviceInterior, title: "Pintura Interior", description: "Dele nueva vida a sus espacios con la ayuda de nuestros profesionales. Podemos reparar paredes, aplicar una nueva capa de pintura e instalar molduras. Ofrecemos consultas de color para ayudarle a elegir el tono perfecto." },
  { image: serviceConcrete, title: "Revestimiento de Pisos", description: "¿Busca una solución de pisos tan duradera como hermosa? Podemos instalar un sistema de pisos resistente en tan solo un día, con acabados de la más alta calidad." },
  { image: serviceCabinet, title: "Pintura de Gabinetes", description: "Desde desmontar los gabinetes hasta pintar cada pieza con varias capas para un acabado perfectamente liso, es uno de nuestros servicios más solicitados por nuestros clientes." },
  { image: serviceCommercial, title: "Servicios Comerciales", description: "No solo trabajamos en hogares, también somos expertos en proyectos comerciales con el equipo y los recursos necesarios para satisfacer las necesidades de su negocio." },
  { image: servicePowerwash, title: "Lavado a Presión", description: "El lavado a presión puede parecer un trabajo sencillo, pero sin experiencia es fácil dañar las superficies. Deje el trabajo en manos de nuestro equipo profesional." },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-background py-8 lg:py-[45px]">
      <div className="max-w-[1410px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-[8px]">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src={squareBrush} alt="" className="w-[32px] h-[36px]" />
            <span className="text-primary text-xl lg:text-2xl font-bold uppercase leading-6">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl lg:text-[50px] font-normal text-foreground/80 leading-tight lg:leading-[56px]" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}>
            ¿Listo para grandes resultados?
          </h2>
          <p className="text-foreground text-base lg:text-lg leading-7 mt-1" style={{ fontFamily: "'Franklin Gothic Book', 'Calibri', sans-serif" }}>Estos son nuestros servicios más populares</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[10px]">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-[200px] object-cover" />
              <div className="pt-[15px] px-[13px] pb-[10px] text-center">
                <h3 className="text-xl lg:text-2xl font-normal text-foreground mb-1" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-7" style={{ fontFamily: "'Franklin Gothic Book', 'Calibri', sans-serif" }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
