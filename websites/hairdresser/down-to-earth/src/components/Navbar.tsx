import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[60px] px-4 lg:px-0">
        <div className="font-heading text-2xl font-bold tracking-wider text-foreground">
          BOSSES
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <NavItem label="Behandlingar" hasDropdown />
          <NavItem label="Frisörer" />
          <NavItem label="Om Bosses" hasDropdown />
          <NavItem label="Inspiration" />
          <NavItem label="Kontakt" />
          <button className="btn-outline-primary ml-4 py-2 px-6 text-xs">
            Boka tid
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {["Behandlingar", "Frisörer", "Om Bosses", "Inspiration", "Kontakt"].map((item) => (
            <a key={item} href="#" className="block py-2 font-body uppercase text-sm text-foreground">
              {item}
            </a>
          ))}
          <button className="btn-primary w-full text-xs py-3">Boka tid</button>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ label, hasDropdown }: { label: string; hasDropdown?: boolean }) => (
  <a
    href="#"
    className="flex items-center gap-1 px-4 py-2 font-body uppercase text-sm text-foreground hover:text-primary transition-colors"
  >
    {label}
    {hasDropdown && <ChevronDown size={14} />}
  </a>
);

export default Navbar;
