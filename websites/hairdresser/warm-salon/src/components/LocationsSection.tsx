import scissorsIcon from "@/assets/scissors.svg";
import mapImage from "@/assets/map-location.png";

const LocationsSection = () => {
  return (
    <section className="w-full bg-background py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-start">
          {/* Left — Map */}
          <div className="md:pt-[88px] order-2 md:order-1">
            <a
              href="https://maps.google.com/?q=Perú+622+San+Telmo+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={mapImage}
                alt="Ubicación del salón en Google Maps"
                className="w-full h-auto object-cover"
              />
            </a>
          </div>

          {/* Right — Info */}
          <div className="md:pl-8 order-1 md:order-2">
            <div className="flex items-start gap-3 mb-2">
              <p className="font-montserrat text-sm text-muted-foreground tracking-wide mt-6">
                Contacto
              </p>
              <img src={scissorsIcon} alt="" className="w-20 md:w-28 h-20 md:h-28 rotate-[135deg]" />
            </div>

            <h2 className="font-korolev text-[28px] md:text-[40px] font-bold text-foreground leading-tight mb-3">
              Visitanos en San Telmo
            </h2>

            <p className="font-montserrat text-base md:text-[18px] font-semibold text-muted-foreground mb-4 md:mb-6">
              Peluquería Karina Ancheta
            </p>

            <p className="font-['Lato',sans-serif] text-[15px] md:text-[16px] leading-[1.6] text-muted-foreground max-w-[480px] mb-6 md:mb-8">
              Karina atiende de lunes a viernes, de 10:30 a 19:00, con turno previo.
              Escribinos por WhatsApp y coordinamos el día y horario que te quede mejor.
              Sin compromiso — contanos qué estás buscando y lo resolvemos.
            </p>

            <a
              href="https://wa.me/5491161583581"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-[260px] h-[42px] bg-primary text-primary-foreground font-montserrat text-[14px] font-bold rounded-full hover:opacity-90 transition-opacity mb-8 md:mb-10"
            >
              Escribir por WhatsApp
            </a>

            {/* Location Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-4">
              <div>
                <h3 className="font-korolev text-[18px] md:text-[20px] font-bold text-foreground mb-2">
                  Peluquería Karina
                </h3>
                <p className="font-['Lato',sans-serif] text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">
                  Perú 622,<br />
                  San Telmo, Buenos Aires
                </p>
                <p className="font-['Lato',sans-serif] text-[14px] md:text-[15px] text-muted-foreground mt-2">
                  <a href="tel:+5491161583581" className="hover:underline">+54 9 11 6158-3581</a>
                </p>
                <div className="mt-3 inline-flex items-center border border-foreground rounded-full px-4 py-1.5 text-[12px] md:text-[13px] font-montserrat">
                  <span className="font-bold mr-2">Lun–Vie</span>
                  <span>10:30 – 19:00</span>
                </div>
              </div>

              <div>
                <h3 className="font-korolev text-[18px] md:text-[20px] font-bold text-foreground mb-2">
                  Credenciales
                </h3>
                <p className="font-['Lato',sans-serif] text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">
                  ⭐ 4.7 / 5 en Google<br />
                  97 Reseñas Verificadas<br />
                  100% Recomendada en Facebook<br />
                  Productos Wella Professionals
                </p>
                <div className="mt-3 inline-flex items-center border border-foreground rounded-full px-4 py-1.5 text-[12px] md:text-[13px] font-montserrat">
                  <span className="font-bold mr-2">Pago</span>
                  <span>Efectivo y tarjeta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;