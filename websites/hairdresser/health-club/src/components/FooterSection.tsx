import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp.svg";
import instagramIcon from "@/assets/instagram.svg";

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white/80">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-[60px] py-14 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="La Pelu" className="w-28 sm:w-32 mb-4" />
            <p className="text-white/40 text-xs font-[family-name:var(--font-body)] leading-relaxed">
              Style & Nail Studio
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold font-[family-name:var(--font-heading)] mb-5 uppercase tracking-wider">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {["Inicio", "Nosotras", "Servicios", "Reseñas", "Contacto"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 text-sm font-[family-name:var(--font-body)] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white text-sm font-semibold font-[family-name:var(--font-heading)] mb-5 uppercase tracking-wider">
              Ubicación
            </h4>
            <div className="text-white/60 text-sm font-[family-name:var(--font-body)] space-y-1.5 leading-relaxed">
              <p className="text-white/80">Franklin D. Roosevelt 2350</p>
              <p>Local 9, Galería Rincón de los Niños</p>
              <p>Belgrano, Buenos Aires</p>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <a
                href="https://wa.me/541134842107"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 text-sm font-[family-name:var(--font-body)] hover:text-white transition-colors"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 brightness-0 invert opacity-60" />
                011 3484-2107
              </a>
              <a
                href="https://instagram.com/lapelu.belgrano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 text-sm font-[family-name:var(--font-body)] hover:text-white transition-colors"
              >
                <img src={instagramIcon} alt="Instagram" className="w-4 h-4 brightness-0 invert opacity-60" />
                @lapelu.belgrano
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white text-sm font-semibold font-[family-name:var(--font-heading)] mb-5 uppercase tracking-wider">
              Horarios
            </h4>
            <div className="text-sm font-[family-name:var(--font-body)] space-y-1.5">
              {[
                { day: "Lun", time: "09:00 – 19:30" },
                { day: "Mar", time: "08:30 – 19:30" },
                { day: "Mié", time: "09:00 – 19:30" },
                { day: "Jue", time: "07:30 – 19:30" },
                { day: "Vie", time: "08:30 – 19:30" },
                { day: "Sáb", time: "08:00 – 19:30" },
                { day: "Dom", time: "Cerrado" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between">
                  <span className="text-white/60">{h.day}:</span>
                  <span className={h.time === "Cerrado" ? "text-white/40" : "text-white/60"}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-[60px] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-[family-name:var(--font-body)]">
            © {new Date().getFullYear()} La Pelu – Style & Nail Studio | Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/lapelu.belgrano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5 brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://wa.me/541134842107"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
