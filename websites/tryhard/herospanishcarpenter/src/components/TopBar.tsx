import googleIcon from "@/assets/google-icon.svg";
import facebookIcon from "@/assets/facebook-icon.svg";
import bbbIconRound from "@/assets/bbb-icon-round.svg";
import socialIcons from "@/assets/social-icons.svg";
import phoneIcon from "@/assets/phone-icon.svg";
import emailIcon from "@/assets/email-icon.svg";

const TopBar = () => {
  return (
    <div className="w-full h-auto lg:h-16 relative">
      {/* Desktop layout */}
      <div className="hidden lg:block absolute right-0 top-0 h-full bg-topbar" style={{ left: '360px', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%)' }}>
        <div className="h-full flex items-center justify-between px-8 ml-10">
          {/* Reviews Section */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <img src={googleIcon} alt="Google" className="w-9 h-9 rounded-full" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-topbar-foreground text-sm font-bold">5.0 </span>
                  <span className="text-star text-base font-bold tracking-widest">★★★★★</span>
                </div>
                <span className="text-topbar-foreground text-[13px] italic">Basado en 185 Reseñas</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={facebookIcon} alt="Facebook" className="w-9 h-9 rounded-full" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-topbar-foreground text-sm font-bold">5.0 </span>
                  <span className="text-star text-base font-bold tracking-widest">★★★★★</span>
                </div>
                <span className="text-topbar-foreground text-[13px] italic">Basado en 24 Reseñas</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={bbbIconRound} alt="BBB Acreditado" className="w-9 h-9 rounded-full" />
              <div className="flex flex-col">
                <span className="text-topbar-foreground text-sm font-bold">Acreditado</span>
                <span className="text-topbar-foreground text-[13px] italic">Calificación A+</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6 ml-6">
            <span className="text-topbar-foreground text-lg font-medium">¡Llámenos Ahora!</span>
            <div className="flex items-center gap-2">
              <img src={phoneIcon} alt="Teléfono" className="w-6 h-6" />
              <span className="text-topbar-foreground text-lg font-bold">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={emailIcon} alt="Email" className="w-5 h-5 [&_path]:fill-white" />
              <span className="text-topbar-foreground text-lg font-bold">info@suempresa.com</span>
            </div>
          </div>

          <div className="ml-6">
            <img src={socialIcons} alt="Redes Sociales" className="h-8" />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden bg-topbar px-3 py-1.5">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1.5">
            <img src={phoneIcon} alt="Teléfono" className="w-4 h-4" />
            <a href="tel:+15551234567" className="text-topbar-foreground text-xs font-bold">+1 (555) 123-4567</a>
          </div>
          <div className="flex items-center gap-1.5">
            <img src={emailIcon} alt="Email" className="w-3.5 h-3.5 [&_path]:fill-white" />
            <a href="mailto:info@suempresa.com" className="text-topbar-foreground text-xs font-bold">info@suempresa.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
