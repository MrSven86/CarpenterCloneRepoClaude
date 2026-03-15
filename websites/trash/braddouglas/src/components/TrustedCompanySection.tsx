import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import vanImage from "@/assets/van.png";

const TrustedCompanySection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <AnimatedSection direction="left" className="w-full lg:w-1/2">
            <img src={vanImage} alt="Brad-Man-Handy service vehicle" className="w-full h-auto object-contain" />
          </AnimatedSection>

          <AnimatedSection direction="right" className="w-full lg:w-1/2">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] text-foreground mb-6 leading-tight">
              Brad-Man-Handy — Licensed Handyman Based in Long Beach
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Brad is a local Long Beach handyman who has earned the trust of homeowners throughout the area since 2017. With a California contractor license and decades of hands-on experience, Brad provides reliable, professional service for all your home repair needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={3} />
                <p className="text-foreground text-base leading-6">
                  <span className="font-bold">Actually answers the phone</span> — Unlike many contractors, Brad responds quickly to calls and can often schedule service the next day.
                </p>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={3} />
                <p className="text-foreground text-base leading-6">
                  <span className="font-bold">Personal service you can trust</span> — Brad personally handles every job from start to finish, ensuring quality workmanship and careful attention to your home.
                </p>
              </div>
            </div>

            <a
              href="#estimate"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-4 rounded transition-colors"
            >
              Request Free Estimate
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanySection;
