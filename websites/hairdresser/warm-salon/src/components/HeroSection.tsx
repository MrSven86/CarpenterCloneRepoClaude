import heroBg from "@/assets/hero-bg.png";
import googleLogo from "@/assets/google.png";
import starIcon from "@/assets/star.svg";
import scissorsWhite from "@/assets/scissors-white.svg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[700px] lg:h-[840px] overflow-hidden">
      <img
        src={heroBg}
        alt="Interior de Peluquería Karina Ancheta"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/25" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-[250px]">
        <p className="font-cormorant text-base md:text-xl font-normal text-background leading-6 mb-2 md:mb-4">
          SAN TELMO, BUENOS AIRES
        </p>

        <h1 className="font-korolev text-[40px] md:text-[72px] lg:text-[100px] font-black text-background uppercase leading-[1.1] tracking-tight flex items-center">
          Tu peluquería<span className="relative"><img src={scissorsWhite} alt="" className="absolute -right-[50px] md:-right-[80px] lg:-right-[100px] top-[5px] md:top-[10px] lg:top-[15px] w-[50px] md:w-[80px] lg:w-[100px] h-auto" /></span>
        </h1>

        <p className="font-montserrat text-[24px] md:text-[40px] lg:text-[56px] font-semibold text-background uppercase leading-tight -mt-1 md:-mt-2">
          de confianza
        </p>

        <p className="font-montserrat text-sm md:text-lg font-normal text-background leading-7 md:leading-8 max-w-[680px] mt-4 md:mt-6">
          Karina Ancheta es estilista unisex con una larga trayectoria en San Telmo.
          Cortes, color, tratamientos y manicura — todo con productos Wella Professionals,
          con turno previo, para que el tiempo sea completamente tuyo.
        </p>

        <a
          href="https://wa.me/5491161583581"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 md:mt-10 inline-flex items-center justify-center w-[260px] h-[48px] bg-primary text-primary-foreground font-montserrat text-[15px] font-bold rounded-full hover:bg-primary/90 transition-colors"
        >
          Reservá tu turno
        </a>
        <p className="font-montserrat text-xs text-background/70 mt-2">
          Te respondemos por WhatsApp y coordinamos el horario que te quede mejor.
        </p>

        <div className="flex items-center gap-3 mt-8 md:mt-12">
          <img src={googleLogo} alt="Google" className="h-4 md:h-5 object-contain" />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={starIcon} alt="estrella" className="w-3 h-3" />
            ))}
          </div>
          <span className="font-inter text-sm md:text-base font-normal text-background/80">
            4.7 / 5 (<span className="underline cursor-pointer">97 reseñas</span>)
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;