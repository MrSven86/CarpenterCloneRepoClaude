import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import team4 from "@/assets/team4.jpg";

const members = [
  { img: team1, name: "Anna" },
  { img: team2, name: "Erik" },
  { img: team3, name: "Sara" },
  { img: team4, name: "Marcus" },
];

const TeamSection = () => (
  <section className="w-full bg-background py-20">
    <div className="max-w-[1400px] mx-auto px-4 lg:px-0 text-center">
      <h2 className="heading-xl mb-4">Meet the team</h2>
      <p className="font-body text-lg text-foreground mb-12">
        Get to know each member of the FOUR team and the exceptional services we
        are proud to offer.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {members.map((m) => (
          <div key={m.name} className="overflow-hidden">
            <img
              src={m.img}
              alt={m.name}
              className="w-full aspect-[2/3] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <div className="border-t border-salon-light my-8" />

      <button className="btn-primary mt-4">Meet the team</button>
    </div>
  </section>
);

export default TeamSection;
