import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import mailIcon from "@/assets/mail_icon.svg";
import phoneIcon from "@/assets/phone_icon.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME" },
    { label: "SERVICES", hasDropdown: true },
    { label: "ABOUT US", hasDropdown: true },
    { label: "CONTACT", hasDropdown: true },
  ];

  return (
    <header className="bg-white py-0 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-[90px]">
        <span className="flex items-center shrink-0">
          <span className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">Brad Douglas Waterman<br className="hidden sm:block" /><span className="text-primary"> Painting</span></span>
        </span>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-1 text-sm font-semibold tracking-wide text-foreground hover:text-primary transition-colors font-display"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#estimate"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-6 py-3 rounded transition-colors"
          >
            <img src={mailIcon} alt="" className="h-4 w-4" />
            FREE ESTIMATE
          </a>
          <a href="tel:5627733960" className="flex items-center gap-2 bg-foreground text-white text-sm font-semibold px-6 py-3 rounded hover:bg-foreground/90 transition-colors">
            <img src={phoneIcon} alt="" className="h-4 w-4" />
            (562) 773-3960
          </a>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-sm tracking-wide text-foreground hover:text-primary transition-colors font-display">
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a href="#estimate" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded">
                <img src={mailIcon} alt="" className="h-4 w-4" />
                FREE ESTIMATE
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
