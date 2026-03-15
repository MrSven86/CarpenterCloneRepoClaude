import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "Prompt, skilled and easy to work with. Did an excellent job repairing a section of fence and gutter down spout. Pricing was fair. Since I have no DIY game I will use Brad again.",
    name: "Daniel L.",
    location: "Long Beach (Yelp Review)",
  },
  {
    text: "Very responsive, professional, and did the job well and surprisingly quickly. I believe his bio 'I don't want your money I want your business'. Will send more jobs in the future!",
    name: "Marcelo D.",
    location: "Long Beach (Yelp Review)",
  },
  {
    text: "Very reliable, has installed a new dryer vent for our house, installed a chandelier, replaced our crown moulding, and installed a rain diverter on our roof. Very reasonable prices, and professional. Our go to handyman.",
    name: "Anna M.",
    location: "Long Beach (Yelp Review)",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-foreground text-3xl md:text-4xl font-bold leading-tight">
            What Our Customers Say
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white rounded-lg p-8 h-full flex flex-col shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed mb-6 flex-1">
                  "{t.text}"
                </p>
                <p className="text-muted-foreground text-sm font-semibold">
                  — {t.name}, {t.location}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
