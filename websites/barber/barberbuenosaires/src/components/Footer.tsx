import footerLogo from "@/assets/footer-logo.png";
import chairSketch from "@/assets/chair-sketch.png";
import socialInstagram from "@/assets/social-instagram.svg";
import socialTiktok from "@/assets/social-tiktok.svg";
import socialLinkedin from "@/assets/social-linkedin.svg";
import socialFacebook from "@/assets/social-facebook.svg";
import socialYoutube from "@/assets/social-youtube.svg";

const navLinks = ["BARBERS", "TREATMENTS", "NEWS", "CONTACT", "LOCATIONS"];

const socials = [
  { icon: socialInstagram, alt: "Instagram", href: "#" },
  { icon: socialTiktok, alt: "TikTok", href: "#" },
  { icon: socialLinkedin, alt: "LinkedIn", href: "#" },
  { icon: socialFacebook, alt: "Facebook", href: "#" },
  { icon: socialYoutube, alt: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#1a2e1a] overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 pt-12 sm:pt-16 pb-8">
        {/* Logo */}
        <div className="mb-10 sm:mb-12">
          <img src={footerLogo} alt="Porem Barbershop" className="w-[70px] sm:w-[90px] h-auto" />
        </div>

        <div className="flex">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8">
            {/* Col 1: Locations & Hours */}
            <div>
              <h4 className="font-['Bowlby_One'] text-amber-400 text-sm uppercase mb-3">POREM JORDAAN</h4>
              <p className="font-['Lato'] text-white/80 text-sm leading-relaxed">
                Nieuwe Willemsstraat 14,<br />1015 JH Amsterdam
              </p>
              <h4 className="font-['Bowlby_One'] text-amber-400 text-sm uppercase mt-6 mb-3">POREM DAM SQUARE</h4>
              <p className="font-['Lato'] text-white/80 text-sm leading-relaxed">
                Raadhuisstraat 12,<br />1016 DE Amsterdam
              </p>
              <p className="font-['Lato'] text-white/80 text-sm mt-6 leading-relaxed">
                <span className="font-bold text-white">Opening hours</span><br />
                Mo - Su | 10:00 - 19:00
              </p>
            </div>

            {/* Col 2: Nav */}
            <div>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="font-['Bowlby_One'] text-amber-400 text-base lg:text-lg uppercase hover:text-amber-300 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 3: Routes */}
            <div>
              <h4 className="font-['Bowlby_One'] text-amber-400 text-sm uppercase mb-2">POREM JORDAAN</h4>
              <a href="#" className="inline-flex items-center gap-2 font-['Lato'] text-white/80 text-sm hover:text-white transition-colors">
                Route description <span>→</span>
              </a>
              <h4 className="font-['Bowlby_One'] text-amber-400 text-sm uppercase mt-8 mb-2">POREM DAM SQUARE</h4>
              <a href="#" className="inline-flex items-center gap-2 font-['Lato'] text-white/80 text-sm hover:text-white transition-colors">
                Route description <span>→</span>
              </a>
            </div>

            {/* Col 4: Socials */}
            <div className="flex flex-row sm:flex-col sm:items-end gap-3">
              {socials.map((s) => (
                <a key={s.alt} href={s.href} className="hover:opacity-80 transition-opacity">
                  <img src={s.icon} alt={s.alt} className="w-[30px] sm:w-[34px] h-[30px] sm:h-[34px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Chair sketch */}
          <div className="hidden lg:block relative w-[220px] flex-shrink-0">
            <img
              src={chairSketch}
              alt=""
              className="absolute -right-10 -top-8 w-[280px] h-auto opacity-90"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-12 sm:mt-16 pt-6 border-t border-white/10">
          <p className="font-['Lato'] text-amber-400 text-xs tracking-wider uppercase">
            COPYRIGHT 2025 POREM BARBERSHOP
          </p>
          <p className="font-['Lato'] text-amber-400 text-xs tracking-wider uppercase text-center sm:text-right">
            WEBSITE BY BUILD WITH BLOCKS & DE MARKETING MENUKAART
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
