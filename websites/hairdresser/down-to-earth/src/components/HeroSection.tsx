import heroImg from "@/assets/hero_img.png";

const HeroSection = () => (
  <section className="w-full bg-background overflow-hidden">
    <div className="flex flex-col lg:flex-row">
      {/* Left text */}
      <div className="flex-1 flex flex-col justify-center section-padding py-16 lg:py-0">
        <p className="font-heading text-base text-foreground tracking-wide mb-3">
          Frisör Uppsala
        </p>
        <h1 className="heading-xl mb-6">
          Hår – vår passion sedan
          <br />
          1890
        </h1>
        <p className="body-text max-w-[596px] mb-8">
          BOSSES Hår och Styling är en{" "}
          <strong>frisör i Uppsala</strong> som i över 130 år gjort
          Uppsalaborna
          <br />
          snygga för alla typer av sammanhang. Här får du inte enbart en
          behandling av absoluta
          <br />
          toppklass utan även en stunds välbehövlig avkoppling.
        </p>
        <div>
          <button className="btn-primary">Boka tid</button>
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 bg-salon-light min-h-[500px] lg:min-h-[807px]">
        <img
          src={heroImg}
          alt="Kvinna med vackert hår"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
