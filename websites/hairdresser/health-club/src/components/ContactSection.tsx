import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import contactBg from "@/assets/contact-bg.png";
import whatsappIcon from "@/assets/whatsapp.svg";
import instagramIcon from "@/assets/instagram.svg";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
  },
});

const hours = [
  { day: "Lunes", time: "09:00 – 19:30" },
  { day: "Martes", time: "08:30 – 19:30" },
  { day: "Miércoles", time: "09:00 – 19:30" },
  { day: "Jueves", time: "07:30 – 19:30" },
  { day: "Viernes", time: "08:30 – 19:30" },
  { day: "Sábado", time: "08:00 – 19:30" },
  { day: "Domingo", time: "Cerrado" },
];

const ContactSection = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-[60px] py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Contactanos */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-background/95 backdrop-blur-sm rounded-lg p-8 sm:p-10 text-center flex flex-col items-center border border-border"
          >
            <h3 className="text-foreground text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Contactanos
            </h3>

            <p className="text-foreground font-semibold font-[family-name:var(--font-heading)] text-sm sm:text-base mb-1">
              La Pelu – Belgrano
            </p>

            <a
              href="https://wa.me/541134842107"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground text-sm font-[family-name:var(--font-body)] mt-3 hover:text-foreground transition-colors"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
              011 3484-2107
            </a>

            <a
              href="https://instagram.com/lapelu.belgrano"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground text-sm font-[family-name:var(--font-body)] mt-2 hover:text-foreground transition-colors"
            >
              <img src={instagramIcon} alt="Instagram" className="w-4 h-4" />
              @lapelu.belgrano
            </a>

            <a
              href="https://wa.me/541134842107"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-foreground text-primary-foreground rounded-md flex items-center gap-3 px-6 py-3 hover:bg-foreground/90 transition-colors"
            >
              <span className="text-sm font-bold font-[family-name:var(--font-body)] uppercase tracking-wider">
                Reservá tu Turno
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 2: Horarios */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-background/95 backdrop-blur-sm rounded-lg p-8 sm:p-10 text-center border border-border"
          >
            <h3 className="text-foreground text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
              Horarios
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm font-[family-name:var(--font-body)] mb-6">
              Nuestros horarios de atención:
            </p>

            <div className="space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center text-sm font-[family-name:var(--font-body)]">
                  <span className="text-foreground font-medium underline underline-offset-2 decoration-muted-foreground/30">
                    {h.day}:
                  </span>
                  <span className={`${h.time === "Cerrado" ? "text-destructive font-semibold" : "text-muted-foreground"}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Cómo llegar */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-background/95 backdrop-blur-sm rounded-lg p-8 sm:p-10 text-center border border-border flex flex-col"
          >
            <h3 className="text-foreground text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
              Cómo llegar
            </h3>

            {/* Google Maps Embed */}
            <div className="w-full rounded-md overflow-hidden mb-5 flex-shrink-0" style={{ height: "180px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5!2d-58.4567!3d-34.5612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d0a0a0a0a1%3A0x0!2sFranklin%20D.%20Roosevelt%202350%2C%20Belgrano%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Pelu Belgrano - Mapa"
              />
            </div>

            <div className="text-sm font-[family-name:var(--font-body)] text-muted-foreground space-y-1">
              <p className="text-foreground font-semibold">Franklin D. Roosevelt 2350</p>
              <p>Local 9, Galería Rincón de los Niños</p>
              <p>Belgrano, Buenos Aires</p>
              <p className="text-xs mt-2 italic">Ingresá a la galería y buscá el Local 9.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
