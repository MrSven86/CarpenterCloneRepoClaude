import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import whyUsImage from "@/assets/why-us-roof.jpg";

const benefits = [
  {
    title: "Licensed means verified expertise and legal compliance",
    text: "Any painting project over $500 in California requires an active CSLB license. Santiago Sanchez has proven four years of journey-level experience, passed state examinations, and undergoes criminal background checks.",
  },
  {
    title: "Bonded means financial protection if something goes wrong",
    text: "The $15,000 surety bond through Hudson Insurance Company provides financial recourse if the project isn't completed according to contract.",
  },
  {
    title: "Insured means you're not liable for accidents",
    text: "If someone is injured on your property or damage occurs during the project, workers compensation and liability insurance covers it. Without this, you could be personally liable.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <AnimatedSection direction="left" className="w-full lg:w-1/2">
            <div className="inline-block border border-foreground px-4 py-2 mb-6 rounded">
              <span className="text-foreground text-xs font-medium uppercase tracking-wider">
                Licensed • Bonded • Insured
              </span>
            </div>

            <h2 className="font-display text-foreground text-3xl md:text-4xl font-bold leading-tight mb-8">
              Why Hire a Licensed, Bonded, and Insured Painting Contractor?
            </h2>

            <div className="space-y-5 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={3} />
                  <p className="text-foreground text-base leading-6">
                    <span className="font-bold">{b.title}</span>: {b.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#estimate"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-6 py-4 rounded transition-colors"
            >
              Request Free Estimate
            </a>
          </AnimatedSection>

          <AnimatedSection direction="right" className="w-full lg:w-1/2">
            <img src={whyUsImage} alt="Professional painting work" className="w-full h-auto rounded-lg object-cover" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
