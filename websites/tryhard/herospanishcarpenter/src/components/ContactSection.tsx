import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">CONTÁCTENOS</h2>
        <p className="text-muted-foreground text-sm mb-8">Generalmente respondemos en 24 horas. Llámenos en cualquier momento.</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold">TELÉFONO: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-semibold">EMAIL: INFO@SUEMPRESA.COM</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold">HORARIO: LUNES - VIERNES 8:00AM - 5:00PM</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Nombre"
                className="border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                placeholder="Teléfono"
                className="border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <input
              placeholder="Correo Electrónico"
              className="w-full border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              placeholder="Su mensaje"
              rows={4}
              className="w-full border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading text-sm tracking-wider hover:bg-orange-dark transition-colors">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
