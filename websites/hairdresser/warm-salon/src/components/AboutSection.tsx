import scissorsIcon from "@/assets/scissors.svg";
import hairModelComposite from "@/assets/hair-model-composite.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-background py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-4">
        {/* Left Content */}
        <div className="flex-1">
          <p className="font-cormorant text-[20px] font-normal text-foreground leading-6 tracking-[3px] mb-2">
            SAN TELMO, BUENOS AIRES
          </p>

          <h2 className="font-korolev text-[32px] md:text-[48px] font-bold text-foreground leading-[1.1] mb-3">
            Un salón donde te
            <br />
            escuchan de verdad
          </h2>

          <div className="flex items-center gap-2 mb-4">
            <img src={scissorsIcon} alt="" className="w-[50px] md:w-[70px] h-[50px] md:h-[70px]" />
            <p className="font-montserrat text-base md:text-[20px] font-semibold text-muted-foreground">
              Y donde se nota
            </p>
          </div>

          <p className="font-['Lato',sans-serif] text-[15px] md:text-[16px] font-normal text-muted-foreground leading-[1.6] max-w-[480px]">
            <span className="font-bold">En Peluquería Karina Ancheta,</span> cada turno
            lo atiende Karina personalmente. No hay sorpresas sobre quién te va a atender.
            Es una de las cosas que sus clientas mencionan una y otra vez: sabés exactamente
            con quién estás tratando, siempre.
          </p>

          <p className="font-['Lato',sans-serif] text-[15px] md:text-[16px] font-normal text-muted-foreground leading-[1.6] max-w-[480px] mt-4">
            El salón trabaja exclusivamente con productos <strong>Wella Professionals</strong> — la marca
            de coloración profesional más reconocida del mundo — para que los resultados no solo
            se vean bien el día del turno, sino que cuiden la salud de tu pelo a lo largo del tiempo.
          </p>

          <a
            href="https://wa.me/5491161583581"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center w-[224px] h-[42px] rounded-full bg-primary text-primary-foreground font-montserrat text-[14px] font-bold hover:bg-primary/90 transition-colors"
          >
            Conocé más
          </a>
        </div>

        {/* Right Image */}
        <div className="max-w-[300px] md:max-w-[450px] flex-shrink-0 flex items-center justify-center">
          <img
            src={hairModelComposite}
            alt="Modelo con cabello hermoso"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;