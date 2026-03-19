import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2A2A2A] text-background/80 py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto_auto] gap-8 md:gap-12 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-cormorant text-[24px] md:text-[28px] font-normal text-background underline underline-offset-4 decoration-background/40">
              Peluquería Karina Ancheta
            </h3>
          </div>

          {/* Contact Info */}
          <div className="font-['Lato',sans-serif] text-[13px] md:text-[14px] leading-relaxed space-y-3">
            <p>
              Perú 622<br />
              San Telmo<br />
              Buenos Aires, Argentina
            </p>
            <p>
              <a href="tel:+5491161583581" className="underline underline-offset-2 hover:text-background">
                +54 9 11 6158-3581
              </a>
            </p>
            <p>Lunes a Viernes: 10:30 – 19:00</p>
            <p>Solo con turno previo</p>
          </div>

          {/* Nav Links */}
          <div className="font-['Lato',sans-serif] text-[13px] md:text-[14px] space-y-3 md:space-y-5">
            {["Inicio", "Servicios", "Sobre Karina", "Reseñas", "Galería", "Contacto"].map((link) => (
              <p key={link}><a href="#" className="hover:text-background">{link}</a></p>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex sm:flex-col gap-5 items-start sm:items-center">
            <a href="#" className="hover:text-background" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-background" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;