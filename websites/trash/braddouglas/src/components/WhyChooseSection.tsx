import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import roofWork1 from "@/assets/roof-work-1.jpg";

const WhyChooseSection = () => {
  const features = [
    {
      title: "High-Quality Materials for Lasting Durability",
      description: "We source only premium roofing materials, ensuring your new roof withstands all climate and protects your property for years to come."
    },
    {
      title: "Experienced Roof Installation Team",
      description: "Our certified roofing professionals bring expertise and attention to detail to every installation, ensuring a job done right the first time."
    },
    {
      title: "Comprehensive Roof Replacement Services",
      description: "From removing the old roof to final cleanup, we handle every aspect of the replacement process with efficiency and care. Get a free, no-obligation estimate today!"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={roofWork1} 
              alt="Professional roofing work" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="order-1 md:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="inline-block border border-border rounded-full px-4 py-2 mb-6"
              variants={itemVariants}
            >
              <span className="text-sm font-medium text-muted-foreground">QUALITY ROOFING SOLUTIONS</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-8"
              variants={itemVariants}
            >
              Why Choose Roofer.com for Roof Replacement?
            </motion.h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Button className="mt-8 font-semibold">
                Get Free Inspection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
