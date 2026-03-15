import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", active: true },
  { label: "Servicios", active: false },
  { label: "Área de Servicio", active: false },
  { label: "Proyectos", active: false },
  { label: "Nosotros", active: false },
  { label: "Contacto", active: false },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full bg-background relative z-10">
      <div className="max-w-[1670px] mx-auto h-[50px] lg:h-[88px] flex items-center px-4 lg:px-6">
        {/* Nav Links - desktop */}
        <nav className="hidden lg:flex items-center gap-6 ml-[304px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-lg font-medium uppercase leading-[19.8px] ${
                link.active ? "text-primary" : "text-foreground"
              } hover:text-primary transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* CTA Button - desktop */}
        <div className="hidden lg:block ml-auto">
          <button
            className="w-[270px] h-[62px] text-xl font-bold text-primary-foreground uppercase"
            style={{ background: "var(--gradient-cta)" }}
          >
            COTIZACIÓN GRATIS
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`block py-3 text-base font-medium uppercase ${
                link.active ? "text-primary" : "text-foreground"
              } hover:text-primary transition-colors border-b border-border/50`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="w-full h-[50px] mt-4 text-base font-bold text-primary-foreground uppercase"
            style={{ background: "var(--gradient-cta)" }}
          >
            COTIZACIÓN GRATIS
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
