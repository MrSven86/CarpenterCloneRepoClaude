import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import instagramIcon from "@/assets/instagram.svg";
import { ChevronDown, Menu, X } from "lucide-react";

const StickyNav = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-0 left-0 w-full z-50"
        >
          {/* Instagram Bar */}
          <div className="w-full h-5 bg-primary flex items-center justify-center gap-2">
            <span className="text-primary-foreground text-[10px] sm:text-xs font-medium font-[family-name:var(--font-body)] uppercase tracking-tight leading-5">
              Síguenos en Instagram
            </span>
            <img src={instagramIcon} alt="Instagram" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>

          {/* Nav */}
          <nav className="w-full bg-foreground/95 backdrop-blur-md flex items-center justify-between px-4 sm:px-8 md:px-[60px] py-2">
            <img
              src={logo}
              alt="La Pelu"
              className="w-20 h-[60px] sm:w-24 sm:h-[70px] object-contain"
            />

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-primary-foreground z-30"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 w-full bg-foreground/95 backdrop-blur-md flex flex-col items-center gap-4 py-6 md:hidden"
              >
                {["Inicio", "Servicios", "Nuestro Equipo", "Gift Cards", "Contacto"].map((item) => (
                  <a key={item} href="#" className="text-primary-foreground text-sm font-semibold font-[family-name:var(--font-nav)] uppercase">
                    {item}
                  </a>
                ))}
                <button className="bg-primary-foreground text-primary text-sm font-semibold font-[family-name:var(--font-nav)] uppercase px-6 py-3 rounded-[10px]">
                  Reservá tu Turno
                </button>
              </motion.div>
            )}

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-0">
              <a href="#" className="text-primary-foreground text-xs font-semibold font-[family-name:var(--font-nav)] uppercase leading-6 px-4">
                Inicio
              </a>
              <div className="flex items-center">
                <a href="#" className="text-primary-foreground text-xs font-semibold font-[family-name:var(--font-nav)] uppercase leading-6 px-4">
                  Servicios
                </a>
                <ChevronDown className="w-3 h-3 text-primary-foreground -ml-3" />
              </div>
              <a href="#" className="text-primary-foreground text-xs font-semibold font-[family-name:var(--font-nav)] uppercase leading-6 px-4">
                Nuestro Equipo
              </a>
              <a href="#" className="text-primary-foreground text-xs font-semibold font-[family-name:var(--font-body)] uppercase leading-6 px-4">
                Gift Cards
              </a>
              <a href="#" className="text-primary-foreground text-xs font-semibold font-[family-name:var(--font-body)] uppercase leading-6 px-4">
                Contacto
              </a>
              <button className="ml-6 bg-primary text-primary-foreground text-xs font-semibold font-[family-name:var(--font-nav)] uppercase leading-6 px-6 py-[13px] rounded-[10px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]">
                Reservá tu Turno
              </button>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyNav;
