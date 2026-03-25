import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/logo.png";
import googleIcon from "@/assets/google.svg";
import starIcon from "@/assets/star.svg";
import whatsappIcon from "@/assets/whatsapp.svg";
import instagramIcon from "@/assets/instagram.svg";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay } },
});

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[590px] overflow-hidden rounded-[10px]">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="La Pelu Style & Nail Studio"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />

      {/* Top Instagram Bar */}
      <motion.div
        variants={fadeIn(0)}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-0 w-full h-5 bg-primary flex items-center justify-center gap-2 z-20"
      >
        <span className="text-primary-foreground text-[10px] sm:text-xs font-medium font-[family-name:var(--font-body)] uppercase tracking-tight leading-5">
          Síguenos en Instagram
        </span>
        <img src={instagramIcon} alt="Instagram" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </motion.div>

      {/* Navigation */}
      <nav className="absolute top-[29px] left-0 w-full z-20 flex items-center justify-between px-4 sm:px-8 md:px-[60px]">
        {/* Logo */}
        <motion.img
          variants={fadeIn(0.1)}
          initial="hidden"
          animate="visible"
          src={logo}
          alt="La Pelu"
          className="w-24 h-[80px] sm:w-32 sm:h-[100px] md:w-40 md:h-[126px] object-contain -ml-1 md:-ml-2 -mt-1"
        />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary-foreground z-30"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md flex flex-col items-center gap-4 py-6 md:hidden z-30"
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

        {/* Desktop Nav Links */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-0"
        >
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
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pt-8 px-4 sm:px-8">
        {/* Google Rating */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-1 sm:gap-1.5 mb-3 sm:mb-4"
        >
          <img src={googleIcon} alt="Google" className="w-4 h-4 sm:w-5 sm:h-5" />
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starIcon} alt="Star" className="w-3 h-3 sm:w-4 sm:h-4" />
          ))}
          <span className="text-primary-foreground text-xs sm:text-sm font-semibold font-[family-name:var(--font-body)] leading-5 ml-1">
            4.9
          </span>
          <span className="text-primary-foreground/60 text-xs sm:text-sm font-semibold font-[family-name:var(--font-body)] leading-5 mx-0.5">
            |
          </span>
          <span className="text-primary-foreground text-xs sm:text-sm font-semibold font-[family-name:var(--font-body)] leading-5">
            78 reviews
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp(0.45)}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground text-2xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] uppercase leading-tight sm:leading-[50px] md:leading-[64.40px] tracking-tight text-center max-w-[1128px]"
          style={{ textShadow: 'var(--hero-text-shadow)' }}
        >
          Tu salón de belleza <br className="hidden sm:block" />integral en Belgrano
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp(0.6)}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground text-sm sm:text-base md:text-lg font-medium font-[family-name:var(--font-body)] uppercase leading-5 sm:leading-6 tracking-tight text-center max-w-[90%] sm:max-w-[576px] mt-4 sm:mt-6"
        >
          Tu equipo de belleza en Belgrano, con una calificación de 4,9 y casi 80 reseñas.
        </motion.p>

        {/* WhatsApp CTA */}
        <motion.button
          variants={fadeUp(0.75)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 sm:mt-8 bg-primary text-primary-foreground rounded-md shadow-2xl flex items-center gap-2 sm:gap-4 px-5 sm:px-7 py-3 sm:py-[18px] transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)]"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-primary-foreground text-sm sm:text-base font-bold font-[family-name:var(--font-body)] leading-6 sm:leading-7">
            Agendá tu turno por WhatsApp
          </span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
        </motion.button>
      </div>

      {/* Bottom Text */}
      <motion.div
        variants={fadeUp(0.9)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-6 sm:bottom-10 md:bottom-[58px] left-0 w-full text-center z-10 px-4"
      >
        <span className="text-primary-foreground text-[10px] sm:text-xs font-semibold font-[family-name:var(--font-body)] uppercase leading-5 sm:leading-6">
          Respondemos en minutos. 15% de descuento en tu primera visita.
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
