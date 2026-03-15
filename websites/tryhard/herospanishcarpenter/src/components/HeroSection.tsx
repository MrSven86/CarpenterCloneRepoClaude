import heroPerson from "@/assets/hero-person.png";
import heroBg from "@/assets/hero-background.png";
import fullyInsuredBadge from "@/assets/fully-insured-badge.svg";
import iconUnmatched from "@/assets/icon-unmatched.svg";
import iconUnbeatable from "@/assets/icon-unbeatable.svg";
import iconExceptional from "@/assets/icon-exceptional.svg";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[400px] lg:h-[675px] overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

      <div className="relative max-w-[1670px] mx-auto h-full px-4 sm:px-6 py-10 lg:py-0">
        {/* Text Block */}
        <div className="lg:absolute lg:top-[104px] lg:left-[125px] max-w-[967px]">
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold uppercase leading-tight lg:leading-[50px] text-foreground">
            SERVICIOS PROFESIONALES<br className="hidden sm:block" />
            DE CONSTRUCCIÓN Y<br className="hidden sm:block" />
            REMODELACIÓN
          </h1>

          <p className="mt-4 lg:mt-[27px] text-base lg:text-xl font-bold uppercase leading-[22px] text-foreground">
            Lo hacemos bien a la primera, siempre, ahorrándole tiempo y dinero
          </p>

          <div className="flex flex-wrap gap-4 lg:gap-10 mt-4 lg:mt-[25px]">
            <div className="flex items-center gap-2">
              <img src={iconUnmatched} alt="" className="w-6 h-6 lg:w-7 lg:h-7" />
              <span className="text-base lg:text-xl font-medium leading-[22px] text-foreground">Calidad Inigualable.</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconUnbeatable} alt="" className="w-6 h-6 lg:w-7 lg:h-7" />
              <span className="text-base lg:text-xl font-medium leading-[22px] text-foreground">Precios Imbatibles.</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconExceptional} alt="" className="w-6 h-6 lg:w-7 lg:h-7" />
              <span className="text-base lg:text-xl font-medium leading-[22px] text-foreground">Servicio Excepcional.</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-[30px] mt-8 lg:absolute lg:top-[439px] lg:left-[132px]">
          <button
            className="w-full sm:w-[270px] h-[52px] lg:h-[62px] text-lg lg:text-xl font-bold text-primary-foreground uppercase flex items-center justify-center"
            style={{ background: "var(--gradient-cta)" }}
          >
            LLÁMENOS
          </button>
          <button
            className="w-full sm:w-[270px] h-[52px] lg:h-[62px] text-lg lg:text-xl font-bold uppercase flex items-center justify-center border border-foreground"
            style={{ background: "var(--gradient-cta-ghost)" }}
          >
            COTIZACIÓN GRATIS
          </button>
        </div>

        {/* Fully Insured Badge - desktop only */}
        <img
          src={fullyInsuredBadge}
          alt="Totalmente Asegurado"
          className="hidden lg:block absolute top-[111px] left-[835px] w-[266px] h-auto -rotate-[14deg] origin-top-left"
        />

        {/* Hero Person - desktop only */}
        <img
          src={heroPerson}
          alt="Contratista profesional"
          className="hidden lg:block absolute right-0 bottom-0 h-[675px] w-auto object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default HeroSection;
