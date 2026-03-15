import { ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { label: "SERVICES", hasDropdown: true, href: "#" },
    { label: "RESIDENTIAL PAINTING", hasDropdown: false, href: "/residential-painting" },
    { label: "ABOUT", hasDropdown: true, href: "#" },
    { label: "GALLERY", hasDropdown: true, href: "#" },
    { label: "CONTACT", hasDropdown: false, href: "/contact" },
  ];

  return (
    <nav className="bg-background py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-xl font-bold">
            <span className="font-satoshi font-bold text-foreground">
              <span className="text-primary">C</span>hameleon
            </span>
            <div className="text-xs text-primary font-satoshi font-bold -mt-1">Painting</div>
            <div className="text-[10px] text-muted-foreground font-inter">Est. 2007</div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            item.href === "#" ? (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-1 font-inter font-semibold text-[15px] text-foreground hover:text-primary transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="text-secondary" />}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-1 font-inter font-semibold text-[15px] text-foreground hover:text-primary transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="text-secondary" />}
              </Link>
            )
          ))}
        </div>

        {/* Phone Number CTA */}
        <a href="tel:5622125468" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 font-satoshi font-bold text-base leading-[33px] tracking-normal transition-colors">
          <Phone size={18} />
          (562) 212-5468
        </a>
      </div>
    </nav>
  );
};

export default Navigation;