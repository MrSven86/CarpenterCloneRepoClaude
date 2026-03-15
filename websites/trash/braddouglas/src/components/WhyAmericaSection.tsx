import { motion, Variants } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import roofWork2 from "@/assets/roof-work-2.jpg";

const WhyAmericaSection = () => {
  const benefits = [
    {
      title: "Protect Your Property with a New Roof",
      description: "A new roof offers enhanced protection against leaks, weather damage, and energy loss. Our durable roofing solutions help protect your investment."
    },
    {
      title: "Boost Your Property's Curb Appeal and Value",
      description: "Upgrading your roof can improve the appearance and value of your home or business, making it more attractive to potential buyers or customers."
    },
    {
      title: "Local Expertise and Knowledge",
      description: "As a local roofing company, we understand the unique needs of commercial and residential properties. Our roofs are built to last in any kind of weather."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 section-light overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="inline-block border border-border rounded-full px-4 py-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-muted-foreground">QUALITY ROOFING SOLUTIONS YOU CAN TRUST</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-8"
              variants={itemVariants}
            >
              Why America Relies on Roofer.com for Roof Replacement
            </motion.h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Button className="mt-8 font-semibold">
                <Phone className="mr-2 h-4 w-4" />
                800-365-3564
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img 
              src={roofWork2} 
              alt="Roofing professional at work" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmericaSection;
