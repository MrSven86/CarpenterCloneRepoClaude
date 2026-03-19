import { useState, useRef } from "react";
import scissorsBlack from "@/assets/scissors-black.svg";
import teamAmy from "@/assets/team-amy.png";
import teamMichelle from "@/assets/team-michelle.png";
import teamJoe from "@/assets/team-joe.png";
import teamLaura from "@/assets/team-laura.png";

const reviews = [
  { image: teamAmy, name: "GLORIA C.", role: "\"Mi pelo estaba muy dañado por una tintura mal hecha. Karina pudo arreglarlo y ahora mi pelo está hermoso.\" ★★★★★" },
  { image: teamMichelle, name: "NOELIA F.", role: "\"Nunca tuve un problema con mi pelo. Todo impecable, y es una persona maravillosa.\" ★★★★★" },
  { image: teamJoe, name: "MARISOL S.", role: "\"Soy su clienta y amiga hace 8 años.\" ★★★★★" },
  { image: teamLaura, name: "MARINA B.", role: "\"No solo es una excelente profesional — el ambiente siempre es cálido. Kari es una persona maravillosa, llena de luz.\" ★★★★★" },
  { image: teamAmy, name: "JOSE V.", role: "\"Profesional, se nota su experiencia. Charla agradable, excelente atención. Voy a volver.\" ★★★★★" },
];

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const updateScrollState = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollState, 350);
    }
  };

  return (
    <section className="w-full bg-background py-12 md:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left text column */}
        <div className="flex-shrink-0 w-full lg:w-[500px] px-6 lg:pl-[48px] lg:pr-[48px] pt-0 lg:pt-[34px] mb-8 lg:mb-0">
          <img src={scissorsBlack} alt="" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] mb-2" />

          <p className="font-cormorant text-xl text-foreground leading-6 mb-4">
            RESEÑAS DE GOOGLE
          </p>

          <h2 className="font-korolev text-[32px] md:text-[48px] font-bold text-foreground leading-[1] mb-6">
            Lo que dicen
            <br />
            las que ya vinieron
          </h2>

          <p className="font-montserrat text-lg md:text-xl font-semibold text-muted-foreground leading-8 mb-2">
            4.7 estrellas en Google
          </p>

          <p className="font-montserrat text-sm md:text-base text-muted-foreground leading-6 mb-8 max-w-[500px]">
            <span className="font-bold">97 reseñas verificadas </span>
            de clientas y clientes que confían en Karina para el cuidado de su pelo.
            100% recomendada en Facebook.
          </p>

          <a
            href="https://wa.me/5491161583581"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-6 rounded-[40px] border border-primary font-montserrat text-sm font-bold text-foreground capitalize mb-6 hover:bg-primary/10 transition-colors inline-flex items-center"
          >
            Ver todas las reseñas
          </a>

          <div className="flex items-center gap-[80px] mt-4">
            <button
              onClick={() => scroll("left")}
              className="w-7 h-6 flex items-center justify-center"
              aria-label="Anterior"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.32959 5.95811C-0.109863 6.39756 -0.109863 7.11123 0.32959 7.55068L5.95459 13.1757C6.39404 13.6151 7.10772 13.6151 7.54717 13.1757C7.98662 12.7362 7.98662 12.0226 7.54717 11.5831L3.83818 7.87764H14.6241C15.2464 7.87764 15.7491 7.3749 15.7491 6.75264C15.7491 6.13037 15.2464 5.62764 14.6241 5.62764H3.8417L7.54365 1.92217C7.98311 1.48271 7.98311 0.769043 7.54365 0.32959C7.1042 -0.109863 6.39053 -0.109863 5.95107 0.32959L0.326074 5.95459L0.32959 5.95811Z" fill="hsl(var(--primary))" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-7 h-6 flex items-center justify-center"
              aria-label="Siguiente"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4195 7.54717C15.859 7.10772 15.859 6.39404 15.4195 5.95459L9.79453 0.32959C9.35508 -0.109863 8.64141 -0.109863 8.20195 0.32959C7.7625 0.769043 7.7625 1.48271 8.20195 1.92217L11.9109 5.62764H1.125C0.502734 5.62764 0 6.13037 0 6.75264C0 7.3749 0.502734 7.87764 1.125 7.87764H11.9074L8.20547 11.5831C7.76602 12.0226 7.76602 12.7362 8.20547 13.1757C8.64492 13.6151 9.35859 13.6151 9.79805 13.1757L15.423 7.55068L15.4195 7.54717Z" fill="hsl(var(--primary))" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-4 md:gap-[40px] overflow-x-auto scrollbar-hide px-6 lg:pr-[48px] lg:pl-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((member) => (
            <div
              key={member.name}
              className="relative flex-shrink-0 w-[240px] md:w-[320px] h-[300px] md:h-[400px] bg-muted shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover opacity-95"
              />
              <div className="absolute inset-0 opacity-95 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />
              <div className="absolute left-4 bottom-[53px] opacity-95">
                <span className="text-background text-2xl md:text-3xl font-medium font-cormorant">
                  {member.name}
                </span>
              </div>
              <div className="absolute left-4 right-4 bottom-[1.6px] opacity-95">
                <span className="text-background text-xs md:text-sm font-normal font-montserrat leading-5">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;