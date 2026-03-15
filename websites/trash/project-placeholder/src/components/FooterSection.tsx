import logo from "@/assets/logo.svg";
import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="w-full" style={{ background: 'hsl(222, 35%, 45%)' }}>
      <div className="max-w-[1400px] mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Description */}
          <div>
            <img src={logo} alt="JF Deck & Stair Waterproofing" className="h-14 brightness-0 invert mb-6" />
            <p className="text-white/70 text-sm leading-relaxed">
              JF Deck & Stair Waterproofing stands as a pillar of the local community, providing
              a wide array of waterproofing services tailored to protect and enhance your property.
              With a wealth of experience, our family-operated enterprise blends time-honored
              principles with cutting-edge methods to ensure unmatched outcomes.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Call Us Now</h4>
                <p className="text-white/70 text-sm">(714) 600-6948</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Our Location</h4>
                <p className="text-white/70 text-sm">La Mirada, CA</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Business Hours</h4>
                <p className="text-white/70 text-sm">MON-SAT: 7am-6pm</p>
                <p className="text-white/70 text-sm">SUN: CLOSED</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Get a Quote</h4>
                <p className="text-white/70 text-sm">Request a Quote</p>
              </div>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Residential Services</h4>
            <ul className="text-white/70 text-sm space-y-1.5 mb-6">
              <li>Deck Waterproofing</li>
              <li>Stair Waterproofing</li>
              <li>Balcony Waterproofing</li>
            </ul>
            <h4 className="text-white font-bold text-sm mb-3">Commercial Services</h4>
            <ul className="text-white/70 text-sm space-y-1.5">
              <li>Commercial Waterproofing</li>
              <li>Exterior Coating</li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Service Areas</h4>
            <ul className="text-white/70 text-sm space-y-1.5">
              <li>La Mirada</li>
              <li>Whittier</li>
              <li>Buena Park</li>
              <li>Cerritos</li>
              <li>Norwalk</li>
              <li>Downey</li>
              <li>Santa Fe Springs</li>
              <li>Fullerton</li>
              <li>Brea</li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-white/20">
          <span className="text-white/50 text-sm">© 2025 JF Deck & Stair Waterproofing. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
