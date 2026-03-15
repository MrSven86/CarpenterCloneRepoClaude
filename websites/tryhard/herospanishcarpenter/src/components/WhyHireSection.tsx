import { CheckCircle } from "lucide-react";
import professionalPainting from "@/assets/professional-painting.png";

const reasons = [
  {
    title: "Licenciado significa experiencia verificada y cumplimiento legal.",
    desc: "En un proyecto, su contratista debe tener el conocimiento y la posición legal para realizar el trabajo correctamente, protegiendo las superficies de su hogar y mejorando su vida útil sin esfuerzo.",
  },
  {
    title: "Afianzado significa protección financiera si algo sale mal.",
    desc: "Si un trabajo no cumple con lo acordado, su contratista afianzado es responsable de corregirlo según los estándares pactados.",
  },
  {
    title: "Asegurado significa que usted no es responsable de accidentes.",
    desc: "Si durante el trabajo ocurre un daño a la propiedad, el seguro personal/comercial y de responsabilidad del contratista lo cubre. No tendrá que preocuparse por nada.",
  },
];

const WhyHireSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            ¿Por qué contratar un contratista licenciado, afianzado y asegurado?
          </h2>
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-sm leading-relaxed text-foreground font-semibold">{r.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground mt-1">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-primary text-primary-foreground px-6 py-3 rounded font-heading text-sm tracking-wider hover:bg-orange-dark transition-colors">
            SOLICITAR PRESUPUESTO
          </button>
        </div>
        <div className="flex justify-center">
          <img src={professionalPainting} alt="Trabajo profesional" className="rounded-lg shadow-lg w-full max-w-md object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default WhyHireSection;
