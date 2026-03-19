import clipperSketch from "@/assets/clipper-sketch.png";
import iconPhone from "@/assets/icon-phone.svg";
import iconLocation from "@/assets/icon-location.svg";
import iconClock from "@/assets/icon-clock.svg";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-background px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left side */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-end gap-4 mb-8">
            <img
              src={clipperSketch}
              alt=""
              className="w-[80px] sm:w-[120px] h-auto -mb-2"
              aria-hidden="true"
            />
            <h2 className="font-['Bowlby_One'] text-foreground text-xl sm:text-2xl lg:text-3xl leading-tight">
              Call or send us a message.
            </h2>
          </div>

          <p className="font-['Lato'] text-foreground/70 text-base leading-relaxed mb-8 sm:mb-10 max-w-[500px]">
            Call during our business hours or send us a message and we will respond as soon as possible. Thank you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={iconPhone} alt="" className="w-[23px] h-[23px]" />
              <span className="font-['Lato'] text-foreground text-base">321.241.6595</span>
            </div>
            <div className="flex items-start gap-4">
              <img src={iconLocation} alt="" className="w-[23px] h-[23px] mt-0.5" />
              <div className="font-['Lato'] text-foreground text-base leading-relaxed">
                Salt Hair Studio<br />
                1640 Highway A1A, Suite A<br />
                Satellite Beach, FL 323937
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={iconClock} alt="" className="w-[23px] h-[23px] mt-0.5" />
              <div className="font-['Lato'] text-foreground text-base leading-relaxed">
                Tuesday – Friday 10am–7pm<br />
                Saturday 10am-5pm<br />
                Closed Sunday & Monday
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-['Lato'] text-foreground text-sm mb-2 block">
                Your Name<span className="text-primary">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className="w-full border border-foreground/20 rounded-md px-4 py-3 bg-transparent font-['Lato'] text-foreground text-base focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-['Lato'] text-foreground text-sm mb-2 block">
                Email Address<span className="text-primary">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="w-full border border-foreground/20 rounded-md px-4 py-3 bg-transparent font-['Lato'] text-foreground text-base focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-['Lato'] text-foreground text-sm mb-2 block">
                Message<span className="text-primary">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                maxLength={1000}
                rows={5}
                className="w-full border border-foreground/20 rounded-md px-4 py-3 bg-transparent font-['Lato'] text-foreground text-base focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-['Lato'] font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              LOCATIONS
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
