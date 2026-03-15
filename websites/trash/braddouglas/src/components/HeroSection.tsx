import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroWorker from "@/assets/hero-worker.png";
import fullyInsuredBadge from "@/assets/fully-insured-badge.png";
import buildzoomLogo from "@/assets/buildzoom-logo.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[550px] md:min-h-[600px] overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <img src={heroWorker} alt="Professional handyman services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-36">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 xl:gap-16">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block border border-white/50 rounded px-4 py-1.5 mb-6"
            >
              <span className="text-white text-sm font-medium tracking-widest uppercase">
                Licensed &bull; Reliable &bull; Local
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[0.98]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Professional Handyman Services in Long Beach You Can Count On
            </motion.h1>

            <motion.p
              className="text-white/90 text-base md:text-lg lg:text-xl mb-8 max-w-[760px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Brad-Man-Handy brings over 30 years of trade experience to every home repair project in Long Beach. As a licensed California contractor with 4.7-star reviews, Brad personally handles each job with the skill and care your home deserves.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-4 rounded transition-colors"
              >
                Get Estimate
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="tel:5627733960"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded transition-colors border border-white/30"
              >
                (562) 773-3960
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex flex-col items-center justify-center gap-6 mr-8 xl:mr-12"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src={fullyInsuredBadge}
              alt="Licensed CA Contractor"
              className="w-[280px] h-auto drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
