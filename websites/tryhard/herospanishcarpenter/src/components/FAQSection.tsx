import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "¿TIENEN EXPERIENCIA?", a: "Sí, contamos con más de 30 años de experiencia en la industria de recubrimientos, pintura y servicios generales." },
  { q: "¿TIENEN LICENCIA VÁLIDA?", a: "Sí, contamos con una licencia de contratista válida y estamos completamente asegurados y afianzados." },
  { q: "¿HACEN TRABAJOS COMERCIALES?", a: "Sí, realizamos trabajos tanto comerciales como industriales. Desde proyectos pequeños hasta muy grandes." },
  { q: "¿OFRECEN PRESUPUESTOS?", a: "Sí, todos los presupuestos son gratuitos. Llámenos o envíenos un correo para obtener un presupuesto sin costo." },
  { q: "¿HACEN TRABAJOS PEQUEÑOS?", a: "Sí, realizamos trabajos de todos los tamaños, desde los más pequeños hasta los más grandes. Ningún trabajo es demasiado pequeño o grande para nosotros." },
  { q: "¿SU EXPERIENCIA ES LEGÍTIMA?", a: "Contamos con más de 30 años de experiencia y las mejores certificaciones de nuestra industria, garantizando un trabajo de calidad." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-primary">
      <div className="container">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-2">PREGUNTAS FRECUENTES</h2>
        <p className="text-center text-primary-foreground/80 text-sm mb-12">Respondemos sus dudas más comunes</p>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-primary-foreground/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-primary-foreground text-sm font-semibold text-left"
              >
                {faq.q}
                <ChevronDown className={`w-4 h-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-primary-foreground/70 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
