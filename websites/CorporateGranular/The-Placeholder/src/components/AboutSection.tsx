import aboutPhoto from "@/assets/about-photo.png";
import aboutOverlay from "@/assets/about-overlay.svg";
import iconEmailOrange from "@/assets/icon-email-orange.svg";
import iconPhoneOrange from "@/assets/icon-phone-orange.svg";
import vectorUnderlineOrange from "@/assets/vector-underline-orange.svg";

const AboutSection = () => {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-row items-center gap-16">
        {/* Left: Photo with overlay that bulges out */}
        <div className="relative flex-shrink-0" style={{ width: 516, height: 516 }}>
          {/* The photo itself */}
          <div className="absolute top-0 right-0 w-[516px] h-[516px] rounded-[15px] overflow-hidden">
            <img
              src={aboutPhoto}
              alt="JF Deck & Stair Waterproofing project"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Blue overlay card - bulges out to the left */}
          <div
            className="absolute z-10"
            style={{ left: -30, top: '50%', transform: 'translateY(-50%)' }}
          >
            <div className="relative w-[300px]">
              {/* Blue rectangle */}
              <div className="bg-[#4A6FA5]/[0.73] px-7 pt-8 pb-10 w-full">
                <h3 className="text-primary-foreground font-bold text-lg font-sans uppercase tracking-wide leading-tight">
                  JF DECK &amp; STAIR
                </h3>
                <p className="text-primary-foreground font-bold text-xs font-sans uppercase tracking-wide mt-0.5">
                  WATERPROOFING
                </p>
                <p className="text-primary-foreground/90 text-sm font-sans italic mt-4 leading-relaxed text-center">
                  At FTR, we're not just<br />
                  builders— we're partners<br />
                  on a journey to bring your<br />
                  vision to life.
                </p>
              </div>
              {/* Dark triangle bulging down below the card */}
              <div
                className="absolute left-0"
                style={{
                  top: '100%',
                  width: 0,
                  height: 0,
                  borderTop: '36px solid hsl(220, 20%, 15%)',
                  borderRight: '36px solid transparent',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-foreground font-bold text-sm font-sans uppercase tracking-[0.2em]">
            ABOUT US
          </span>
          <h2 className="text-foreground text-[42px] font-bold font-sans leading-[1.15] mt-3">
            Local La Mirada<br />
            Waterproofing You Can<br />
            Count On
          </h2>
          <img src={vectorUnderlineOrange} alt="" className="w-[199px] h-[25px] mt-1" />

          <p className="text-muted-foreground text-base font-sans leading-7 mt-6 max-w-[520px]">
            Recruitment services, often provided by specialized agencies or firms,
            offer organizations assistance in identifying, attracting, and hiring
            suitable candidates for their job openings.
          </p>

          {/* Divider */}
          <div className="w-full max-w-[520px] h-px bg-border mt-8" />

          {/* Contact row */}
          <div className="flex items-center gap-10 mt-8">
            <div className="flex items-center gap-3">
              <img src={iconEmailOrange} alt="" className="w-[50px] h-[50px]" />
              <span className="text-foreground text-base font-sans">hconsult@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={iconPhoneOrange} alt="" className="w-[50px] h-[50px]" />
              <span className="text-foreground text-base font-sans">(217) 555-0113</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-8 w-fit px-8 py-3 bg-primary text-primary-foreground font-bold text-sm font-sans uppercase tracking-wider hover:bg-primary/90 transition-colors">
            GET A FREE ESTIMATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
