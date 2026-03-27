import { useState } from "react";
import ctaBg from "@/assets/cta-bg.png";
import flagUs from "@/assets/flag-us.png";
import badgeReadersChoice from "@/assets/badge-readers-choice.png";
import badgeBBB from "@/assets/badge-bbb.png";
import badgeBestOf209 from "@/assets/badge-best-of-209.png";
import badgeBestOfCeres from "@/assets/badge-best-of-ceres.png";
import badgeSummitHonors from "@/assets/badge-summit-honors.png";

const CTASection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CTA form submitted:", { fullName, email, phone, service, city, message });
  };

  return (
    <section
      className="relative w-full min-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative max-w-[1400px] mx-auto px-4 py-20 flex flex-col lg:flex-row items-start gap-12">
        {/* Left content */}
        <div className="flex-1 pt-8">
          <h2 className="text-white text-5xl font-bold leading-tight">
            40 Years of Experience
          </h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-[560px]">
            Since 1986, the team at JF Deck & Stair Waterproofing has provided exceptional
            waterproofing services to both residential and commercial clients. As a trusted
            local business, we're held to very high standards of quality and professionalism.
          </p>

          {/* Badges */}
          <div className="flex items-center gap-6 mt-16">
            <img src={badgeReadersChoice} alt="Readers' Choice Award" className="h-[80px]" />
            <img src={badgeBBB} alt="BBB A+ Rating" className="h-[80px]" />
            <img src={badgeBestOf209} alt="Best of 209 2022" className="h-[80px]" />
            <img src={badgeBestOfCeres} alt="Best of Ceres 2019" className="h-[80px]" />
            <img src={badgeSummitHonors} alt="Summit Highest Honors" className="h-[80px]" />
          </div>
        </div>

        {/* Right form - wider to match reference */}
        <div className="w-full max-w-[520px] bg-white rounded-none p-10 shadow-2xl">
          <p className="text-foreground text-base font-bold">
            Interested in working with us?
          </p>
          <h3 className="text-foreground text-[28px] font-bold mt-2 mb-8">
            Fill out this form to get connected.
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border-2 border-foreground/20 rounded-md px-5 py-4 text-base text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-2 border-foreground/20 rounded-md px-5 py-4 text-base text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              />
              <div className="flex-1 flex items-center border-2 border-foreground/20 rounded-md overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-4 border-r-2 border-foreground/20 bg-muted/30">
                  <img src={flagUs} alt="US" className="w-8 h-5 object-contain" />
                  <span className="text-xs text-muted-foreground">▼</span>
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-4 text-base text-foreground placeholder-muted-foreground focus:outline-none"
                />
              </div>
            </div>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border-2 border-foreground/20 rounded-md px-5 py-4 text-base text-foreground focus:outline-none focus:border-primary"
            >
              <option value="">-- Select A Service --</option>
              <option value="deck">Deck Waterproofing</option>
              <option value="stairs">Stair Waterproofing</option>
              <option value="balcony">Balcony Waterproofing</option>
              <option value="painting">Painting Services</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Your City (optional)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border-2 border-foreground/20 rounded-md px-5 py-4 text-base text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Tell us more about your project idea here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full border-2 border-foreground/20 rounded-md px-5 py-4 text-base text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
            />
            <button
              type="submit"
              className="w-full text-white font-bold py-5 rounded-none text-lg tracking-wider transition-all hover:brightness-110"
              style={{
                background: 'linear-gradient(90deg, hsl(190, 80%, 50%) 0%, hsl(250, 60%, 45%) 100%)',
              }}
            >
              GET FREE QUOTE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
