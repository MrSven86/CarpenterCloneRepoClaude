import rectangleDust from "@/assets/rectangle-dust.png";
import containerBedroom from "@/assets/container-bedroom.png";
import squareBrush from "@/assets/square-brush.svg";
import iconUnmatched from "@/assets/icon-unmatched.svg";
import iconUnbeatable from "@/assets/icon-unbeatable.svg";
import iconExceptional from "@/assets/icon-exceptional.svg";
import vectorIcon from "@/assets/vector-icon.svg";

const ResidentialSection = () => {
  return (
    <>
      <div className="relative w-full" style={{ backgroundImage: `url(${rectangleDust})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-[1440px] mx-auto py-10 lg:py-[60px] px-4 sm:px-8 lg:px-[80px]">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[60px]">
            {/* Left Text Block */}
            <div className="w-full lg:w-[45%] pt-[10px]">
              <div className="flex items-center gap-3 mb-2">
                <img src={squareBrush} alt="" className="w-[48px] h-auto" />
                <span className="text-primary text-xl font-semibold">Expertos en Servicios Residenciales</span>
              </div>
              <h2 className="text-3xl lg:text-[48px] font-bold uppercase leading-tight lg:leading-[50px] text-foreground mb-6 lg:mb-8">
                SERVICIOS RESIDENCIALES<br />
                <span className="underline decoration-primary decoration-[3px] underline-offset-[6px]">EN</span> SU COMUNIDAD
              </h2>
              <p className="text-base lg:text-[17px] leading-7 text-foreground mb-8 lg:mb-10">
                Si necesita ayuda con su proyecto residencial, confíe en nosotros.
                Como una de las empresas líderes en su área, ofrecemos calidad
                garantizada. Nuestros expertos brindan resultados excepcionales
                de manera rápida y accesible.
              </p>
              <div className="flex flex-wrap gap-6 lg:gap-10">
                <div className="flex items-center gap-2">
                  <img src={iconUnmatched} alt="" className="w-8 h-8" />
                  <span className="text-sm font-bold text-foreground leading-tight">Calidad<br />Inigualable.</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconUnbeatable} alt="" className="w-8 h-8" />
                  <span className="text-sm font-bold text-foreground leading-tight">Precios<br />Imbatibles.</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconExceptional} alt="" className="w-8 h-8" />
                  <span className="text-sm font-bold text-foreground leading-tight">Servicio<br />Excepcional.</span>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="w-full lg:w-[55%] flex items-start">
              <img src={containerBedroom} alt="Habitación bellamente decorada" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Blue Band */}
      <div className="w-full h-[70px] bg-primary overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 mx-8">
              <img src={vectorIcon} alt="" className="w-[30px] h-[16px]" />
              <span className="text-primary-foreground text-sm font-bold uppercase tracking-wider">
                RESTAURANDO EL PASADO. CONSTRUYENDO EL FUTURO.
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResidentialSection;
