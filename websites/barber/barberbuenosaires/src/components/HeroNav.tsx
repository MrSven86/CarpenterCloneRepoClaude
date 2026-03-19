import logo from "@/assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Barbers", "Treatments", "News", "Contact"];

const HeroNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-6 sm:px-10 lg:px-[156px] py-6 sm:py-8">
      {/* Logo */}
      <div className="flex items-center justify-between">
        <img src={logo} alt="Porem Barbershop" className="h-12 sm:h-[72px] w-auto" />

        {/* Hamburger - mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Nav pill - desktop */}
      <div className="hidden md:flex items-center justify-center -mt-[56px] sm:-mt-[72px]">
        <div className="flex items-center bg-[hsla(var(--nav-bg))] backdrop-blur-sm rounded-full h-14 px-6 gap-0">
          <div className="flex items-center gap-6 pr-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground text-base font-semibold font-['Roboto_Condensed'] uppercase leading-6 tracking-wide hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-background rounded-full h-12 px-6 text-primary text-base font-semibold font-['Roboto_Condensed'] uppercase leading-6 hover:bg-primary hover:text-primary-foreground transition-colors">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-primary/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-primary-foreground text-2xl font-semibold font-['Roboto_Condensed'] uppercase tracking-wide"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-background rounded-full h-12 px-8 text-primary text-base font-semibold font-['Roboto_Condensed'] uppercase"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default HeroNav;
