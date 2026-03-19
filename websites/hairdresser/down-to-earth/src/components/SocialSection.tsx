import igStrip1 from "@/assets/ig_strip1.png";
import igStrip2 from "@/assets/ig_strip2.png";

const SocialSection = () => (
  <section className="w-full bg-background py-20">
    <div className="max-w-[1400px] mx-auto px-4 lg:px-0 text-center">
      <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-10">
        Follow our story on instagram and facebook
      </h2>
      <div className="flex flex-col gap-4 mb-10">
        <img src={igStrip1} alt="Instagram photos row 1" className="w-full h-auto object-cover rounded-lg" />
        <img src={igStrip2} alt="Instagram photos row 2" className="w-full h-auto object-cover rounded-lg" />
      </div>
      <button className="btn-primary">See more</button>
    </div>
  </section>
);

export default SocialSection;
