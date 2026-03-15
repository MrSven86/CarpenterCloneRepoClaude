import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  const services = [
    "Residential Roofing",
    "Solar Panel Installation",
    "Holiday Light Installation",
    "Commercial Roofing",
    "Waterproofing",
    "Roof Repair",
    "Gutter Installation"
  ];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to us anytime.<br />
              We're here to help!
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone Number</p>
                  <a href="tel:800-365-7464" className="font-semibold text-primary hover:underline">
                    800-365-7464
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:nathan@roofer.com" className="font-semibold text-primary hover:underline">
                    nathan@roofer.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
                  <Input type="text" className="w-full" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Address</label>
                  <Input type="text" placeholder="Enter Property Address" className="w-full" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                  <Input type="email" className="w-full" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
                  <div className="flex gap-2">
                    <div className="w-12 flex items-center justify-center bg-muted rounded-md text-sm text-muted-foreground">
                      +1
                    </div>
                    <Input type="tel" className="flex-1" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Choose Service*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="- Choose Service -" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <Textarea className="w-full min-h-[120px]" />
              </div>

              <div className="flex justify-end">
                <Button className="font-semibold">
                  Submit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
