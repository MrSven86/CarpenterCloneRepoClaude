import logo from "@/assets/logo.svg";
import iconPhone from "@/assets/icon-phone.svg";
import iconEmail from "@/assets/icon-email.svg";
import iconLocation from "@/assets/icon-location.svg";
import { Button } from "@/components/ui/button";

const HeaderBar = () => {
  return (
    <div className="w-full bg-muted">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <img src={logo} alt="JF Deck & Stair Waterproofing" className="h-[52px]" />

        {/* Contact Info & CTA */}
        <div className="flex items-center gap-8">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <img src={iconPhone} alt="" className="w-5 h-5" />
            <div>
              <div className="text-xs text-muted-foreground">Call Us:</div>
              <div className="text-sm font-bold text-foreground">(714) 600-6948</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <img src={iconEmail} alt="" className="w-5 h-5" />
            <div>
              <div className="text-xs text-muted-foreground">Email Us:</div>
              <div className="text-sm font-bold text-foreground">info@jfdeckwaterproofing.com</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <img src={iconLocation} alt="" className="w-5 h-5" />
            <div>
              <div className="text-xs text-muted-foreground">Location:</div>
              <div className="text-sm font-bold text-foreground">La Mirada, CA 90638</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-2.5 rounded-md">
            GET A FREE ESTIMATE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
