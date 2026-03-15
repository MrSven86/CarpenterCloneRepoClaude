import ctaBg from "@/assets/cta-background.png";
import heroPerson from "@/assets/hero-person.png";
import fullyInsuredBadge from "@/assets/fully-insured-badge.png";
import thumbsUpForm from "@/assets/thumbs-up-form.svg";
import iconQuality from "@/assets/icon-quality.svg";
import iconPrices from "@/assets/icon-prices.svg";
import iconService from "@/assets/icon-service.svg";
import squareBrush from "@/assets/square-brush.svg";
import googleIcon from "@/assets/google-icon.svg";
import facebookIcon from "@/assets/facebook-icon.svg";
import accreditedIcon from "@/assets/accredited-icon.svg";
import usFlag from "@/assets/us-flag.png";
import { Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}>
      <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />

      <div className="hidden lg:block w-96 h-96 absolute left-[371px] top-[-207px] opacity-20 mix-blend-lighten bg-[radial-gradient(ellipse_168.42%_168.42%_at_50.00%_50.00%,_#ED8B30_50%,_#FFFBD3_100%)] rounded-full blur-xl" />
      <div className="hidden lg:block w-96 h-96 absolute right-0 top-[-3px] opacity-20 mix-blend-lighten bg-[radial-gradient(ellipse_168.42%_168.42%_at_50.00%_50.00%,_#44E3D9_50%,_rgba(175,82,249,0)_100%)] rounded-full blur-xl" />
      <div className="hidden lg:block w-96 h-96 absolute left-0 bottom-0 opacity-20 mix-blend-lighten bg-[radial-gradient(ellipse_168.42%_168.42%_at_50.00%_50.00%,_#AF52F9_50%,_rgba(175,82,249,0)_100%)] rounded-full blur-xl" />

      {/* Desktop layout */}
      <div className="relative hidden xl:block w-[1440px] mx-auto h-[974px]">
        <div className="absolute left-[160px] top-[130px] w-[570px]">
          <div className="flex items-center gap-3 mb-[20px]">
            <img src={squareBrush} alt="" className="w-[32px] h-auto" />
            <span className="text-primary text-2xl font-bold uppercase leading-6" style={{ fontFamily: "'Franklin Gothic Book', sans-serif" }}>
              ¿Interesado en trabajar con nosotros?
            </span>
          </div>
          <h2 className="text-foreground text-[48px] leading-[50px] text-center max-w-[570px]" style={{ fontFamily: "'Franklin Gothic Heavy', sans-serif" }}>
            Obtenga una cotización gratis en 24 horas llenando nuestro formulario
          </h2>
          <p className="mt-[40px] text-center text-muted-foreground text-lg leading-7">
            Construimos la confianza del cliente a través de un servicio
            consistentemente excepcional y un historial comprobado de resolver
            proyectos con experiencia.
          </p>
          <div className="flex items-start gap-[40px] mt-[40px] justify-center">
            <div className="flex items-center gap-2">
              <img src={iconQuality} alt="" className="w-[42px] h-[42px]" />
              <span className="text-xl font-medium leading-5 text-foreground">Calidad<br />Inigualable.</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconPrices} alt="" className="w-[43px] h-[43px]" />
              <span className="text-xl font-medium leading-5 text-foreground">Precios<br />Imbatibles.</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconService} alt="" className="w-[40px] h-[40px]" />
              <span className="text-xl font-medium leading-5 text-foreground">Servicio<br />Excepcional.</span>
            </div>
          </div>
        </div>

        <img src={fullyInsuredBadge} alt="Totalmente Asegurado" className="absolute left-[300px] top-[600px] w-[310px] h-[256px] -rotate-[18.33deg] origin-top-left" />
        <img src={heroPerson} alt="Contratista profesional" className="absolute left-[480px] bottom-0 h-[637px] w-auto object-contain object-bottom z-20 pointer-events-none" />

        <div className="absolute right-[20px] top-[64px] w-[500px] bg-white border border-black z-10">
          <FormContent />
        </div>
      </div>

      {/* Mobile / Tablet layout */}
      <div className="relative xl:hidden px-4 sm:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={squareBrush} alt="" className="w-[28px] h-auto" />
            <span className="text-primary text-xl font-bold uppercase leading-6">
              ¿Interesado en trabajar con nosotros?
            </span>
          </div>
          <h2 className="text-foreground text-3xl sm:text-4xl leading-tight font-bold mx-auto max-w-lg">
            Obtenga una cotización gratis en 24 horas llenando nuestro formulario
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-7 max-w-md mx-auto">
            Construimos la confianza del cliente a través de un servicio
            consistentemente excepcional y un historial comprobado.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <img src={iconQuality} alt="" className="w-8 h-8" />
              <span className="text-sm font-medium leading-4 text-foreground">Calidad<br />Inigualable.</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconPrices} alt="" className="w-8 h-8" />
              <span className="text-sm font-medium leading-4 text-foreground">Precios<br />Imbatibles.</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconService} alt="" className="w-8 h-8" />
              <span className="text-sm font-medium leading-4 text-foreground">Servicio<br />Excepcional.</span>
            </div>
          </div>
        </div>

        <div className="max-w-[500px] mx-auto bg-white border border-black">
          <FormContent />
        </div>

        <div className="flex justify-center mt-8">
          <img src={heroPerson} alt="Contratista profesional" className="h-[300px] sm:h-[400px] w-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

const FormContent = () => (
  <>
    <div className="flex items-start gap-3 px-[30px] pt-[24px]">
      <img src={thumbsUpForm} alt="" className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]" />
      <div className="pt-[10px]">
        <div className="text-foreground text-xl sm:text-2xl leading-7" style={{ fontFamily: "'Franklin Gothic Heavy', sans-serif" }}>
          Cotización gratis en 24 horas
        </div>
        <div className="flex items-center gap-3 mt-[6px]">
          {["Beneficio 1", "Beneficio 2", "Beneficio 3"].map((b) => (
            <div key={b} className="flex items-center gap-1">
              <Check className="w-5 h-3.5 text-muted-foreground" />
              <span className="text-sm sm:text-base leading-7 text-muted-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="px-4 sm:px-[24px] pt-[24px] pb-[24px]">
      <input type="text" placeholder="Nombre Completo" className="w-full h-12 bg-white rounded-[10px] border border-black px-[15px] text-base sm:text-lg text-neutral-400 mb-[16px]" />
      <div className="flex flex-col sm:flex-row gap-[16px] mb-[16px]">
        <input type="email" placeholder="Correo Electrónico" className="w-full sm:w-[calc(50%-8px)] h-12 bg-white rounded-[10px] border border-black px-[15px] text-base sm:text-lg text-neutral-400" />
        <div className="w-full sm:w-[calc(50%-8px)] h-12 bg-white rounded-[10px] border border-black flex items-center overflow-hidden">
          <div className="w-[44px] h-12 bg-black/10 rounded-tl-[10px] rounded-bl-[10px] flex items-center justify-center gap-1 flex-shrink-0">
            <img src={usFlag} alt="US" className="w-5 h-[11px]" style={{ boxShadow: "0px 0px 1px 0px rgba(136,136,136,1)" }} />
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-neutral-600" />
          </div>
          <input type="tel" placeholder="Número de Teléfono" className="flex-1 h-full px-[12px] text-base sm:text-lg text-neutral-400 border-none outline-none" />
        </div>
      </div>
      <select className="w-full h-12 rounded-[10px] border border-black px-[16px] text-base sm:text-lg text-zinc-600 mb-[16px] bg-white appearance-none">
        <option>-- Seleccione un Servicio --</option>
      </select>
      <input type="text" placeholder="Su Ciudad (opcional)" className="w-full h-12 bg-white rounded-[10px] border border-black px-[15px] text-base sm:text-lg text-neutral-400 mb-[16px]" />
      <textarea placeholder="Cuéntenos más sobre su proyecto aquí" className="w-full h-28 bg-white rounded-[10px] border border-black px-[15px] py-[12px] text-base sm:text-lg text-neutral-400 mb-[16px] resize-none" />
      <button className="w-full h-14 text-lg font-bold text-neutral-50 uppercase tracking-wide" style={{ background: "var(--gradient-cta)" }}>
        COTIZACIÓN GRATIS
      </button>
    </div>

    <div className="flex flex-wrap items-center gap-[10px] px-4 sm:px-[24px] pb-[20px]">
      <div className="flex items-center gap-[5px]">
        <img src={googleIcon} alt="Google" className="w-[40px] h-[40px] rounded-full" />
        <div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-foreground">5.0 </span>
            <span className="text-sm font-bold text-yellow-400 tracking-widest">★★★★★</span>
          </div>
          <div className="text-[10px] text-foreground">Basado en 185 Reseñas</div>
        </div>
      </div>
      <div className="flex items-center gap-[5px]">
        <img src={facebookIcon} alt="Facebook" className="w-8 h-8 rounded-full" />
        <div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-foreground">5.0 </span>
            <span className="text-sm font-bold text-yellow-400 tracking-widest">★★★★★</span>
          </div>
          <div className="text-[10px] text-foreground">Basado en 24 Reseñas</div>
        </div>
      </div>
      <div className="flex items-center gap-[5px]">
        <img src={accreditedIcon} alt="BBB" className="w-8 h-8 rounded-full" />
        <div>
          <div className="text-sm font-bold text-foreground">Acreditado</div>
          <div className="text-[10px] text-foreground">Calificación A+</div>
        </div>
      </div>
    </div>
  </>
);

export default CTASection;
