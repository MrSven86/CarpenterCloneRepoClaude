import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import squareBrush from "@/assets/square-brush.svg";

const cities = [
  "Ciudad Centro", "Zona Norte", "Zona Sur", "Valle Verde", "Las Colinas",
  "Ribera del Río", "San Miguel", "Santa Cruz", "El Mirador", "La Esperanza",
];

const ServiceAreasSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] py-12 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[60px]">
          {/* Left Content */}
          <div className="w-full lg:w-[48%] pt-[10px]">
            <div className="flex items-center gap-2 mb-[10px]">
              <img src={squareBrush} alt="" className="w-[28px] h-[28px]" />
              <span className="font-bold text-lg lg:text-[20px] uppercase tracking-wide" style={{ color: 'hsl(195, 100%, 47%)' }}>ÁREAS DE SERVICIO</span>
            </div>
            <h2 className="leading-tight lg:leading-[1.1] mb-8 lg:mb-[40px] text-3xl lg:text-[50px]" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", color: '#1a1a1a' }}>
              SIRVIENDO CON ORGULLO<br />A LAS SIGUIENTES COMUNIDADES
            </h2>
            <div className="grid grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-3 lg:gap-y-4 mb-10">
              {cities.map((city) => (
                <a key={city} href="#" className="flex items-center gap-3 px-4 lg:px-5 py-2.5 lg:py-3 border border-primary/40 rounded-full text-foreground hover:border-primary hover:bg-primary/5 transition-colors text-sm lg:text-[15px] font-medium">
                  {city}
                </a>
              ))}
            </div>
          </div>
          {/* Right Map */}
          <div className="w-full lg:w-[48%] rounded-lg overflow-hidden" style={{ minHeight: '400px' }}>
            <ServiceAreaMap cities={cities} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
