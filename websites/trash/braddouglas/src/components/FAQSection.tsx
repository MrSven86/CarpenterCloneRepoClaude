import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of services does Brad offer?",
      answer: "Brad provides painting (interior and exterior), drywall repair, door and gate installation and repair, fence work, light plumbing and electrical repairs, appliance installation, ceiling fan installation, furniture assembly, and general home maintenance. Most small jobs can be completed in a few hours."
    },
    {
      question: "Does Brad offer free estimates?",
      answer: "Yes. Brad offers free estimates for all projects in Long Beach. He'll listen to your needs, evaluate the work, and provide a clear, upfront quote with fair pricing."
    },
    {
      question: "How quickly can Brad come out?",
      answer: "Brad prioritizes fast response times. Unlike contractors who don't return calls, Brad answers his phone and can often schedule service the next day for many jobs."
    },
    {
      question: "What areas does Brad serve?",
      answer: "Brad serves Long Beach and surrounding areas including Signal Hill, Lakewood, Belmont Shore, Downey, Paramount, Bellflower, Seal Beach, Cypress, Los Alamitos, Anaheim, Buena Park, Cerritos, Artesia, and Norwalk."
    },
  ];

  return (
    <section className="py-16 md:py-24 section-dark overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-block border border-primary rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">GOT QUESTIONS? WE'VE GOT ANSWERS!</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-foreground/70 mt-4 text-base">
            Long Beach homeowners often have questions about handyman services. Here are answers to help you plan your project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
