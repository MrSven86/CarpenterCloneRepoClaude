import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = ["Servicios", "Sobre Karina", "Reseñas", "Galería", "Contacto"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-background border-b border-border relative">
      <div className="h-24 flex items-center justify-between px-6 lg:justify-center lg:px-0">
        {/* Logo */}
        <div className="lg:absolute lg:left-[190px] lg:-top-2">
          <img src={logo} alt="Peluquería Karina" className="w-20 h-20 lg:w-28 lg:h-28 object-contain" />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-poppins text-lg font-bold text-foreground hover:text-foreground/80 relative group transition-colors"
            >
              {link}
              <span className="absolute bottom-[-34px] left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
          <button className="w-36 h-11 border border-input font-poppins text-lg font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
            Reservar
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-background border-b border-border z-40 flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-poppins text-lg font-bold text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="w-36 h-11 border border-input font-poppins text-lg font-medium text-foreground">
            Reservar
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;