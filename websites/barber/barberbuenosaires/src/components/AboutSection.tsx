import clipperSketch from "@/assets/clipper-sketch.png";
import salonSketch from "@/assets/salon-sketch.png";

const AboutSection = () => {
  return (
    <section className="relative bg-background">
      <div className="relative pt-20 sm:pt-32 pb-20 sm:pb-32">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[204px]">
          <div className="max-w-[832px] mx-auto text-center">
            <h2 className="font-['Bowlby_One'] text-foreground text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.4] mb-8">
              Porem Barbershop Jordaan
            </h2>
            <p className="text-foreground text-sm font-normal font-['Lato'] leading-8 sm:leading-9 max-w-[734px] mx-auto">
              While we believe in providing the best and latest professional hair care services in the industry, we also value our clients'
              comfort. That's why we have a clean and cozy salon, where you can sit back, relax, enjoy a cold beverage and snack, and
              entrust your hair to our professionals.
            </p>
          </div>
        </div>

        <img
          src={clipperSketch}
          alt="Hair clipper sketch"
          className="absolute left-0 bottom-0 w-[120px] sm:w-[200px] lg:w-[368px] h-auto z-10 translate-y-1/2"
        />
        <img
          src={salonSketch}
          alt="Barbershop interior sketch"
          className="absolute right-0 top-8 w-[150px] sm:w-[350px] lg:w-[450px] h-auto z-10"
        />
      </div>

      <div className="relative">
        <div className="w-full h-20 sm:h-40 bg-[#CED0AF]" />
      </div>
    </section>
  );
};

export default AboutSection;
