import beforeafter1 from "@/assets/beforeafter1.png";
import beforeafter2 from "@/assets/beforeafter2.png";
import beforeafter3 from "@/assets/beforeafter3.png";

const projects = [beforeafter1, beforeafter2, beforeafter3];

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-muted">
    <div className="container">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-2">PROYECTOS</h2>
      <p className="text-center text-muted-foreground text-sm mb-12">
        Nos enorgullecemos de completar cada trabajo a tiempo, de forma segura y dentro del presupuesto.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((img, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-lg">
            <img src={img} alt={`Proyecto ${i + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
