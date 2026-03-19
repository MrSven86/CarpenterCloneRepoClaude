import aboutPhoto from "@/assets/about-photo.png";

const AboutHiroshiSection = () => {
  return (
    <section className="bg-background py-0">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Text content */}
        <div className="lg:w-1/2 flex flex-col justify-center px-10 lg:px-20 py-20">
          <h2 className="font-['Bowlby_One'] text-foreground text-4xl lg:text-5xl uppercase leading-tight mb-8">
            About<br />HIROSHI
          </h2>
          <p className="font-['Lato'] text-foreground/80 text-base leading-relaxed max-w-[550px] mb-16">
            In 1978, Hiroshi Kitamura, a source of pride for Kyoto, Japan, embarked on a remarkable journey when he opened the doors to his salon, "Hiroshi Hair Design," nestled on Canon Drive, right in the heart of the enchanting Beverly Hills.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 font-['Lato'] font-bold text-foreground text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
          >
            READ MORE
            <span className="text-lg">→</span>
          </a>
        </div>

        {/* Right: Photo */}
        <div className="lg:w-1/2">
          <img
            src={aboutPhoto}
            alt="Barbershop team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHiroshiSection;
