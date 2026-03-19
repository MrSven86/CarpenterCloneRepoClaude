import heroBg from "@/assets/hero-bg.png";
import texture from "@/assets/texture.png";
import HeroNav from "./HeroNav";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <img
        src={heroBg}
        alt="Barber at work"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none"
        style={{ backgroundImage: `url(${texture})`, backgroundSize: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--hero-gradient-to))]" />

      <HeroNav />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-10">
        <h1 className="font-facon text-primary-foreground text-3xl sm:text-5xl lg:text-[96px] font-bold leading-[1.1] max-w-[1513px] mb-6">
          A NEIGHBORHOOD HANGOUT HAIR SALON
        </h1>
        <p className="text-primary-foreground text-lg sm:text-2xl font-['Lato'] font-normal leading-7 mb-8 max-w-[687px]">
          Sit back, relax, have a drink, a good conversation
        </p>
        <button className="bg-primary text-primary-foreground rounded-full h-12 px-10 text-base font-semibold font-['Roboto_Condensed'] uppercase leading-6 hover:brightness-110 transition-all">
          Locations
        </button>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
