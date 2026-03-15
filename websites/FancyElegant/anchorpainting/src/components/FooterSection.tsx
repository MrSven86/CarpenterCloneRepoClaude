import footerBg from "@/assets/footer-bg.png";
import footerOverlay from "@/assets/footer-overlay.png";
import phoneIcon from "@/assets/phone-icon.svg";
import mailIcon from "@/assets/mail-icon.svg";
import locationIcon from "@/assets/location-icon.svg";

const serviceLinks = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Refinishing",
  "Surface Preparation & Repair",
];

const serviceAreas = [
  "Hawthorne", "Inglewood", "Manhattan Beach", "Hermosa Beach",
  "Redondo Beach", "El Segundo", "Torrance",
];

const FooterSection = () => {
  return (
    <footer>
      <div className="relative bg-primary overflow-hidden">
        <img src={footerBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <img src={footerOverlay} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-primary-foreground font-bold text-xl mb-2">Anchor Painting Inc</h3>
              <div className="w-10 h-[2px] bg-hero-cta mb-6" />
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <img src={locationIcon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">
                      12202 Manor Dr Apt 4<br />Hawthorne, CA 90250
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img src={phoneIcon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">(773) 408-8134</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img src={mailIcon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">Contact for estimate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* License */}
            <div>
              <h3 className="text-primary-foreground font-bold text-xl mb-2">License</h3>
              <div className="w-10 h-[2px] bg-hero-cta mb-6" />
              <p className="text-stone-400 text-base leading-8">
                California C33 License #1139722
              </p>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-primary-foreground font-bold text-xl mb-2">Our Services</h3>
              <div className="w-10 h-[2px] bg-hero-cta mb-6" />
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link} className="flex items-center gap-2">
                    <span className="text-stone-400 text-xs">›</span>
                    <a href="#" className="text-stone-400 text-base leading-8 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours & Service Area */}
            <div>
              <h3 className="text-primary-foreground font-bold text-xl mb-2">Hours</h3>
              <div className="w-10 h-[2px] bg-hero-cta mb-6" />
              <p className="text-stone-400 text-base leading-8 mb-1">Monday–Friday: 8:00 AM – 5:00 PM</p>
              <p className="text-stone-400 text-base leading-8 mb-6">Saturday: By Appointment</p>

              <h4 className="text-primary-foreground font-bold text-base mb-2">Service Area</h4>
              <p className="text-stone-400 text-base leading-8">
                {serviceAreas.join(", ")}, and surrounding South Bay communities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-4">
        <p className="text-center text-stone-400 text-sm">
          © Copyright 2026 Anchor Painting Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
