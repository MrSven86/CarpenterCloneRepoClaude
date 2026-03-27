import { useState } from "react";
import heroBg from "@/assets/hero-bg-real.png";
import iconHandsOn from "@/assets/icon-hands-on.svg";
import iconBestPrice from "@/assets/icon-best-price.svg";
import vectorUnderline from "@/assets/vector-underline.svg";
import guaranteeBadge from "@/assets/guarantee-badge-2.png";
import ctaUnderline from "@/assets/cta-underline.svg";
import ratingGoogle5 from "@/assets/rating-google-5star.svg";
import ratingBBB from "@/assets/rating-bbb.svg";
import ratingFacebook5 from "@/assets/rating-facebook-5star.svg";

const HeroSection = () => {
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { address, fullName, phone });
  };

  return (
    <section
      className="relative w-full h-[646px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 to-gray-800/60" />

      <div className="max-w-[1920px] mx-auto relative h-full">
        {/* Left content */}
        <div className="absolute left-[259px] top-[76px] w-[768px]">
          <h1 className="text-white text-6xl font-bold font-sans leading-[60px]">
            Deck &amp; Stair<br />
            Waterproofing in<br />
            La Mirada
          </h1>
          <img src={vectorUnderline} alt="" className="mt-1 w-[199px] h-[25px]" />
          <p className="mt-4 text-white/90 text-xl font-normal font-sans leading-7 max-w-[652px]">
            Protect your deck, stairs, and outdoor surfaces from water damage with<br />
            professional waterproof coating systems. Owner-operated, locally trusted.
          </p>
          <div className="flex items-center gap-12 mt-16">
            <div className="flex items-center gap-4">
              <img src={iconHandsOn} alt="Free inspection" className="w-14 h-14" />
              <span className="text-white text-xl font-normal leading-7">Free inspection</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={iconBestPrice} alt="Best price guarantee" className="w-14 h-14" />
              <span className="text-white text-xl font-normal leading-7">Best price guarantee</span>
            </div>
          </div>
        </div>

        {/* Right CTA form */}
        <div className="absolute right-[200px] top-[26px] w-[440px]">
          {/* Guarantee badge */}
          <img
            src={guaranteeBadge}
            alt="100% Money Back Guarantee"
            className="absolute -top-2 -right-2 w-[90px] h-[90px] z-20"
          />

          <div
            className="relative rounded-[20px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, hsl(230, 40%, 52%) 0%, hsl(220, 35%, 48%) 100%)',
            }}
          >
            {/* Header */}
            <div className="text-center pt-8 pb-4 px-8">
              <p className="text-white text-lg font-bold italic font-sans">
                Schedule Your
              </p>
              <p className="text-white text-[32px] font-bold italic font-sans leading-tight">
                Free Inspection Today!
              </p>
              <img src={ctaUnderline} alt="" className="mx-auto mt-1 w-[220px]" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 pb-4 space-y-3">
              <input
                type="text"
                placeholder="Enter Property Address*"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-white border border-white/40 rounded-lg px-4 py-3.5 text-sm text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white border border-white/40 rounded-lg px-4 py-3.5 text-sm text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="tel"
                placeholder="+1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-white/40 rounded-lg px-4 py-3.5 text-sm text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="w-full text-white font-bold py-4 rounded-lg text-lg transition-all hover:brightness-110"
                style={{
                  background: 'linear-gradient(180deg, hsl(270, 70%, 55%) 0%, hsl(270, 60%, 40%) 100%)',
                }}
              >
                Get FREE Inspection
              </button>
            </form>

            {/* Disclaimer */}
            <p className="text-white/60 text-[11px] text-center leading-snug px-10 pb-5">
              By pressing 'Get FREE Inspection' you are explicitly agreeing
              to our terms and conditions and privacy policy, and consenting
              to receive text messages. To unsubscribe, text STOP to +1
              (800) 365-3564.
            </p>

            {/* Ratings row */}
            <div className="flex items-center justify-center gap-4 pb-6 px-6">
              <img src={ratingGoogle5} alt="Google 4.9/5 rating" className="h-[28px]" />
              <img src={ratingBBB} alt="BBB 5 star rating" className="h-[32px]" />
              <img src={ratingFacebook5} alt="Facebook 5 star rating" className="h-[27px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
