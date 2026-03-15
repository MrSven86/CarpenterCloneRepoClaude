import { ChevronRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-contractor-2.jpg";
import iconUser from "@/assets/icons/icon-user.png";
import iconPhone from "@/assets/icons/icon-phone.png";
import iconEmail from "@/assets/icons/icon-email.png";
import iconServices from "@/assets/icons/icon-services.png";
import iconGoogle from "@/assets/icons/icon-google.png";
import iconBBB from "@/assets/icons/icon-bbb.png";
import iconFacebook from "@/assets/icons/icon-facebook.png";
import iconStars from "@/assets/icons/icon-stars.png";

const HeroSection2 = () => {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Blue Overlay - using primary color */}
      <div className="absolute inset-0 bg-[#1a3a4a]/75" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div>
            <h1 className="font-satoshi font-bold text-[48px] lg:text-[56px] text-white leading-tight mb-6">
              Professional Painting<br />
              Services in<br />
              Long Beach
            </h1>
            <p className="font-general-sans font-medium text-base text-white/80 mb-8 max-w-md">
              Fully licensed painting contractor serving Long Beach and surrounding areas since 2007
            </p>
            <button className="bg-primary hover:bg-[hsl(197,57%,35%)] text-white px-6 py-3 font-satoshi font-bold text-sm flex items-center gap-2 rounded transition-colors">
              REQUEST FREE ESTIMATE
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Right Form */}
          <div className="w-[80%] ml-auto border-2 border-primary rounded-lg overflow-hidden">
            {/* Blue Header - Primary color */}
            <div className="bg-primary px-6 py-5">
              <h2 className="font-satoshi font-bold text-2xl text-white text-center mb-1">
                GET A FREE QUOTE
              </h2>
              <p className="font-general-sans font-medium text-white/80 text-center text-sm">
                Enter your contact information below
              </p>
            </div>
            
            {/* Dark Form Area */}
            <div className="bg-[#1a2a35] px-6 py-5">
              <form className="space-y-3">
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-12 flex items-center justify-center">
                    <img src={iconUser} alt="" className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="FIRST NAME"
                    className="flex-1 bg-white py-3 pr-4 text-sm font-inter placeholder:text-gray-500 outline-none"
                  />
                </div>
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-12 flex items-center justify-center">
                    <img src={iconUser} alt="" className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="LAST NAME"
                    className="flex-1 bg-white py-3 pr-4 text-sm font-inter placeholder:text-gray-500 outline-none"
                  />
                </div>
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-12 flex items-center justify-center">
                    <img src={iconPhone} alt="" className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className="flex-1 bg-white py-3 pr-4 text-sm font-inter placeholder:text-gray-500 outline-none"
                  />
                </div>
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-12 flex items-center justify-center">
                    <img src={iconEmail} alt="" className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="flex-1 bg-white py-3 pr-4 text-sm font-inter placeholder:text-gray-500 outline-none"
                  />
                </div>
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-12 flex items-center justify-center">
                    <img src={iconServices} alt="" className="w-5 h-5" />
                  </div>
                  <select className="flex-1 bg-white py-3 pr-10 text-sm font-inter text-gray-500 appearance-none outline-none">
                    <option>SERVICES</option>
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Surface Preparation & Finishing</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-[hsl(197,57%,35%)] text-white font-satoshi font-bold py-4 rounded text-base transition-colors mt-2"
                >
                  SUBMIT
                </button>
              </form>

              {/* Disclaimer Text */}
              <p className="font-inter text-xs text-white/70 text-center mt-6 leading-relaxed">
                Submit your project details and we'll contact you within 24 hours to discuss your painting needs and provide a detailed estimate.
              </p>

              {/* Review Widget */}
              <div className="flex items-center justify-center gap-6 mt-6">
                {/* Google */}
                <div className="flex flex-col items-center gap-1">
                  <img src={iconGoogle} alt="Google" className="w-8 h-8" />
                  <img src={iconStars} alt="5 stars" className="h-4" />
                  <span className="font-satoshi font-bold text-xs text-secondary">4.9/5 RATING</span>
                </div>
                
                {/* BBB */}
                <div className="flex flex-col items-center gap-1">
                  <img src={iconBBB} alt="BBB" className="w-8 h-8 object-contain" />
                  <img src={iconStars} alt="5 stars" className="h-4" />
                  <span className="font-satoshi font-bold text-xs text-secondary">5 RATING</span>
                </div>
                
                {/* Facebook */}
                <div className="flex flex-col items-center gap-1">
                  <img src={iconFacebook} alt="Facebook" className="w-8 h-8" />
                  <img src={iconStars} alt="5 stars" className="h-4" />
                  <span className="font-satoshi font-bold text-xs text-secondary">5 RATING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;