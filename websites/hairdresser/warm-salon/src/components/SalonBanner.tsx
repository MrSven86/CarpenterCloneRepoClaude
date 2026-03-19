import scissorsBg from "@/assets/scissors-bg.png";

const SalonBanner = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      <img
        src={scissorsBg}
        alt="Peluquería Karina"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-[209px]">
        <p className="font-cormorant text-base md:text-xl text-background leading-6 mb-3 md:mb-4 tracking-wide">
          ¿LISTA PARA RESERVAR?
        </p>

        <h2 className="font-korolev text-[28px] md:text-[48px] font-bold text-background leading-tight md:leading-[48px] mb-4 md:mb-6">
          Reservá tu turno
          <br />
          con Karina
        </h2>

        <p className="font-montserrat text-base md:text-xl font-semibold text-background leading-7 md:leading-8 mb-3 md:mb-4">
          Lunes a Viernes, 10:30 a 19:00
        </p>

        <p className="font-montserrat text-sm md:text-base text-background/90 leading-6 max-w-[500px] mb-6">
          Karina atiende de lunes a viernes, de 10:30 a 19:00, con turno previo.
          Escribinos por WhatsApp y coordinamos el día y horario que te quede mejor.
        </p>

        <a
          href="https://wa.me/5491161583581"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-[260px] h-[48px] bg-primary text-primary-foreground font-montserrat text-[15px] font-bold rounded-full hover:bg-primary/90 transition-colors"
        >
          Escribir por WhatsApp
        </a>
        <p className="font-montserrat text-xs text-background/70 mt-2">
          Sin compromiso — contanos qué estás buscando y lo resolvemos.
        </p>
      </div>
    </section>
  );
};

export default SalonBanner;