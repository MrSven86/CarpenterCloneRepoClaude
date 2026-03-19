import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="w-full bg-salon-footer-bg text-muted-foreground pt-12 pb-8">
    <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Logo */}
        <div>
          <div className="font-heading text-2xl font-bold text-primary-foreground tracking-wider mb-4">
            RKS
          </div>
        </div>

        {/* Links */}
        <div className="space-y-2">
          {["Home", "Our Team", "Events", "Pricing", "Referral Program", "Model Program", "Shop Products", "Gift Cards", "Gratuity", "Careers", "Privacy Policy", "Contact Us"].map((link) => (
            <a key={link} href="#" className="block text-sm font-mono font-light hover:text-primary-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Location 1 */}
        <div>
          <h4 className="text-primary-foreground text-sm font-mono mb-2">Flatiron Salon</h4>
          <p className="text-sm font-mono font-light leading-6">253 5th Avenue, 5th Floor<br />New York, NY 10016</p>
          <p className="text-sm font-mono font-light mt-2">(516) 588-7744</p>
          <div className="text-sm font-mono font-light mt-3 leading-5">
            Sun: Closed<br />Mon: 10am - 8pm<br />Tue: 10am - 8pm<br />Wed: 10am - 8pm<br />Thu: 10am - 8pm<br />Fri: 10am - 8pm<br />Sat: 10am - 6pm
          </div>
        </div>

        {/* Location 2 */}
        <div>
          <h4 className="text-primary-foreground text-sm font-mono mb-2">TriBeCa Salon</h4>
          <p className="text-sm font-mono font-light leading-6">317 Church Street<br />New York, NY 10013</p>
          <p className="text-sm font-mono font-light mt-2">(516) 447-3304</p>
          <div className="text-sm font-mono font-light mt-3 leading-5">
            Sun: 11am - 5pm<br />Mon: Closed<br />Tue: 10am - 8pm<br />Wed: 10am - 8pm<br />Thu: 10am - 8pm<br />Fri: 10am - 8pm<br />Sat: 10am - 6pm
          </div>
        </div>

        {/* Location 3 */}
        <div>
          <h4 className="text-primary-foreground text-sm font-mono mb-2">Madison Salon</h4>
          <p className="text-sm font-mono font-light leading-6">1063 Madison Avenue, 2nd floor<br />New York, NY 10028</p>
          <p className="text-sm font-mono font-light mt-2">(516) 440-4626</p>
          <div className="text-sm font-mono font-light mt-3 leading-5">
            Sun: 10am - 6pm<br />Mon: 9am - 7pm<br />Tue: 9am - 7pm<br />Wed: 10am - 7pm<br />Thu: 9am - 7pm<br />Fri: 9am - 7pm<br />Sat: By Appointment
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs font-mono">© 2024 Roman K Salon, LLC. | All rights reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Instagram size={18} className="text-primary-foreground hover:text-primary transition-colors cursor-pointer" />
          <Facebook size={18} className="text-primary-foreground hover:text-primary transition-colors cursor-pointer" />
          <Youtube size={18} className="text-primary-foreground hover:text-primary transition-colors cursor-pointer" />
          <Twitter size={18} className="text-primary-foreground hover:text-primary transition-colors cursor-pointer" />
        </div>
      </div>

      <p className="text-xs font-mono mt-4 leading-6">
        <span className="font-medium">Cancellation Policy:</span> At Roman K Salon, we kindly ask that any cancellations or reschedules be made at least 24 hours in advance.
      </p>
    </div>
  </footer>
);

export default Footer;
