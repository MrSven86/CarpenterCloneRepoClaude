import { Leaf, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustentabilidad",
    description: "Como empresa, nos importa la sustentabilidad. Valores, integridad, honestidad y transparencia.",
    bg: "bg-background",
  },
  {
    icon: Heart,
    title: "Nuestros Valores",
    description: "Como empresa líder, nos enorgullecemos de nuestro trabajo estableciendo competitividad, preparación, seguridad y responsabilidad.",
    bg: "bg-primary",
  },
  {
    icon: Shield,
    title: "Expertos Certificados",
    description: "La seguridad es lo primero. Siempre cumplimos con las nuevas regulaciones y nos mantenemos al día con los estándares de la industria.",
    bg: "bg-background",
  },
];

const CoreValues = () => (
  <section className="relative -mt-16 z-20">
    <div className="container">
      <div className="grid md:grid-cols-3 shadow-xl rounded-lg overflow-hidden">
        {values.map((v) => (
          <div
            key={v.title}
            className={`p-8 flex flex-col items-center text-center ${
              v.bg === "bg-primary" ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
            }`}
          >
            <v.icon className={`w-10 h-10 mb-4 ${v.bg === "bg-primary" ? "text-primary-foreground" : "text-primary"}`} />
            <h3 className="font-heading text-lg font-semibold mb-2">{v.title}</h3>
            <p className="text-sm leading-relaxed opacity-80">{v.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;
