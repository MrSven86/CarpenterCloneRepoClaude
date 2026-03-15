import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import anchorLogo from "@/assets/anchor-logo.webp";

const navItems = [
  { label: "Home" },
  { label: "Services" },
  { label: "Gallery" },
  { label: "Contact" },
];

const MainNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src={anchorLogo} alt="Anchor Painting Inc" className="h-10" />
        </a>

        {/* Nav Items - hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-1 px-3 py-2 text-foreground hover:text-accent transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '13.6px', lineHeight: '24px', letterSpacing: '-0.16px' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA - hidden on mobile */}
        <Button variant="cta" size="lg" className="hidden md:inline-flex">
          Get Free Estimate
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: mobileOpen ? 320 : 0, opacity: mobileOpen ? 1 : 0 }}
      >
        <div className="flex flex-col px-4 pb-4 gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={handleNavClick}
              className="px-3 py-3 text-foreground hover:text-accent hover:bg-muted rounded-md transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '15px',
                transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                transform: mobileOpen ? 'translateX(0)' : 'translateX(-12px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {item.label}
            </a>
          ))}
          <div
            className="pt-2 transition-all duration-200"
            style={{
              transitionDelay: mobileOpen ? `${navItems.length * 50}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            <a href="tel:7734088134">
              <Button variant="cta" size="lg" className="w-full">
                Call for Free Estimate
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
