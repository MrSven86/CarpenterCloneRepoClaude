import { useState } from "react";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ctaBg from "@/assets/cta-bg.png";
import fullyInsuredBadge from "@/assets/fully-insured-badge.png";
import locallyOwnedBadge from "@/assets/locally-owned-badge.png";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Painting Services",
  "Door & Gate Services",
  "Drywall Repair",
  "Plumbing Repair",
  "Electrical Repair",
  "Home Repairs & Maintenance",
];

const evidentials = [
  "Licensed California contractor with 30+ years trade experience",
  "4.7-star Yelp rating based on 58+ customer reviews",
  "Actually answers the phone and responds quickly",
  "Fair pricing with free estimates for all Long Beach projects",
];

const EstimateSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.service) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Estimate request sent!", description: "We'll get back to you shortly." });
    setFormData({ fullName: "", email: "", phone: "", service: "", city: "", message: "" });
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white rounded-[10px] border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="estimate" className="relative min-h-[700px] overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-white text-3xl md:text-5xl leading-tight">
            Ready for Your Free Estimate?
          </h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <AnimatedSection direction="left" className="w-full lg:w-1/2">
            <div className="space-y-4">
              {evidentials.map((item) => (
                <div key={item} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={3} />
                  <p className="text-white text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-white/50 text-sm mt-8">
              No obligation • Serving Long Beach &amp; surrounding areas
            </p>

            <div className="flex items-center gap-6 mt-8">
              <img src={fullyInsuredBadge} alt="Licensed Contractor" className="w-[120px] h-auto" />
              <img src={locallyOwnedBadge} alt="Locally Owned and Operated" className="w-[120px] h-auto" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[10px] p-8 md:p-10 space-y-5"
            >
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} maxLength={100} className={inputClasses} />

              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} maxLength={255} className={`${inputClasses} flex-1`} />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} maxLength={20} className={`${inputClasses} flex-1`} />
              </div>

              <select name="service" value={formData.service} onChange={handleChange} className={`${inputClasses} ${!formData.service ? "text-muted-foreground" : ""}`}>
                <option value="">-- Select A Service --</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} maxLength={100} className={inputClasses} />

              <textarea name="message" placeholder="Tell us about your project" value={formData.message} onChange={handleChange} maxLength={1000} rows={4} className={`${inputClasses} resize-none`} />

              <button
                type="submit"
                className="w-full py-4 rounded-[10px] bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide text-base transition-colors"
              >
                Request Free Estimate
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
