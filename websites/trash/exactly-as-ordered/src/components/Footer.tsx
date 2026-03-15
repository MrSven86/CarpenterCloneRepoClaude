import { Facebook, Instagram, Twitter, Phone } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { label: "SERVICES", href: "#services" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "TESTIMONIALS", href: "#testimonials" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const areasServed = [
    ["Long Beach, CA", "Signal Hill, CA", "Lakewood, CA", "Bellflower, CA"],
    ["Cerritos, CA", "Los Alamitos, CA", "Seal Beach, CA", "Carson, CA"],
  ];

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="font-clash font-bold text-3xl mb-6">
              <span className="text-secondary">CHAMELEON</span> PAINTING
            </h2>
            <div className="font-satoshi text-white/80 space-y-1 mb-6">
              <p className="font-bold text-white">Chameleon Painting and Decorating</p>
              <p>3440 East 64th Street</p>
              <p>Long Beach, CA 90805</p>
            </div>
            <div className="font-satoshi text-white/80 space-y-1">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:5622125468" className="hover:text-secondary transition-colors">
                  (562) 212-5468
                </a>
              </p>
              <p>License #892664</p>
              <p>C-33 Painting and Decorating Contractor</p>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h3 className="font-clash text-xl mb-6">Site Navigation</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-satoshi font-bold text-sm text-white hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Areas We Serve - Column 1 */}
          <div>
            <h3 className="font-clash text-xl mb-2">Areas We Serve</h3>
            <p className="font-satoshi text-white/60 text-sm mb-4">Serving Long Beach and Surrounding Areas:</p>
            <ul className="space-y-2">
              {areasServed[0].map((area, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-satoshi text-white/80 hover:text-secondary transition-colors underline underline-offset-2"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve - Column 2 */}
          <div className="lg:pt-12">
            <ul className="space-y-2">
              {areasServed[1].map((area, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-satoshi text-white/80 hover:text-secondary transition-colors underline underline-offset-2"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-satoshi text-white/60 text-sm mt-6">
              Licensed California Contractor serving Los Angeles and Orange County areas
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="font-satoshi text-sm text-white/60">
              © Copyright 2025 Chameleon Painting and Decorating | All Rights Reserved.
              <span className="hidden md:inline"> | </span>
              <span className="block md:inline mt-2 md:mt-0">
                <a href="#" className="hover:text-secondary transition-colors underline">Sitemap</a>
                {" | "}
                <a href="#" className="hover:text-secondary transition-colors underline">Privacy</a>
                {" | "}
                <a href="#" className="hover:text-secondary transition-colors underline">Accessibility</a>
                {" | "}
                <a href="#" className="hover:text-secondary transition-colors underline">Disclaimer</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
