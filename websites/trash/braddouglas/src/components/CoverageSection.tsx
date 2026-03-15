import AnimatedSection from "./AnimatedSection";

const serviceAreas = ["Long Beach", "Signal Hill", "Lakewood", "Belmont Shore", "Downey", "Paramount", "Bellflower", "Seal Beach", "Cypress", "Los Alamitos", "Anaheim", "Buena Park", "Cerritos", "Artesia", "Norwalk"];

const CoverageSection = () => {
  return (
    <section className="relative bg-muted">
      <div className="flex justify-center">
        <div className="bg-secondary rounded-t-full px-12 py-3">
          <h2 className="font-display text-secondary-foreground text-2xl md:text-4xl font-bold text-center leading-tight">
            Based in Long Beach, Serving Surrounding Areas
          </h2>
        </div>
      </div>

      <div className="w-full h-[400px] md:h-[480px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26500.0!2d-118.19!3d33.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd313b68a738f3%3A0x5cc9b5d8b1dc7c1a!2sLong+Beach%2C+CA!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Service coverage area - Long Beach, CA"
        />
      </div>

      <div className="bg-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm mb-2">Service Areas</p>
          <p className="text-white font-semibold text-base">
            {serviceAreas.join(" • ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
