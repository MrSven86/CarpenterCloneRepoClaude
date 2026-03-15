import { Facebook } from "lucide-react";


const servicesList = ["Painting Services", "Drywall Repair", "Door Installation", "Plumbing Repair", "Electrical Repair", "Gate & Fence Work"];
const serviceAreas = ["Long Beach, CA", "Signal Hill", "Lakewood", "Belmont Shore", "Cypress", "Los Alamitos"];

const Footer = () => {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 self-start">
            <span className="flex items-center gap-1 mb-4">
              <span className="font-display text-xl font-bold text-white leading-tight">Brad Douglas Waterman <span className="text-primary">Painting</span></span>
            </span>
            <p className="text-white/60 text-sm leading-relaxed">
              Long Beach's Trusted Local Handyman
            </p>
          </div>

          <div className="self-start">
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesList.map((service) => (
                <li key={service}><span className="text-sm text-white/60">{service}</span></li>
              ))}
            </ul>
          </div>

          <div className="self-start">
            <h3 className="font-display font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}><span className="text-sm text-white/60">{area}</span></li>
              ))}
            </ul>
          </div>

          <div className="self-start">
            <h3 className="font-display font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm text-white/60">📞 (562) 773-3960</p>
            <p className="text-sm text-white/60 mt-1">✉️ bradmanhandy@gmail.com</p>
            <p className="text-sm text-white/60 mt-1">📍 Long Beach, CA 90803</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2026 Brad-Man-Handy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Facebook className="h-5 w-5 text-white/70" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
