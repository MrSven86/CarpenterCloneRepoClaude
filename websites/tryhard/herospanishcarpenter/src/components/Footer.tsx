import logoPlaceholder from "@/assets/logo-placeholder.svg";
import iconFacebook from "@/assets/icon-facebook.svg";
import iconLinkedin from "@/assets/icon-linkedin.svg";
import iconGoogle from "@/assets/icon-google.svg";
import iconYoutube from "@/assets/icon-youtube.svg";
import iconYelp from "@/assets/icon-yelp.svg";
import iconInstagram from "@/assets/icon-instagram.svg";

const helpLinks = ["Contacto", "Garantía", "Financiamiento", "Atención al Cliente"];

const serviceLinks = [
  ["Pintura Exterior", "Exteriores Comerciales"],
  ["Pintura Interior", "Revestimiento de Pisos"],
  ["Pintura de Gabinetes", "Gabinetes de Garaje"],
  ["Restauración de Puertas", "Revestimiento de Entrada"],
  ["Reparación de Estuco", "Recubrimientos"],
  ["Servicio Express", "Revestimiento de Patio"],
  ["Pintura Comercial", "Pisos Comerciales"],
  ["Interiores Comerciales", ""],
];

const socialIcons = [
  { src: iconFacebook, alt: "Facebook" },
  { src: iconLinkedin, alt: "LinkedIn" },
  { src: iconGoogle, alt: "Google" },
  { src: iconYoutube, alt: "YouTube" },
  { src: iconYelp, alt: "Yelp" },
  { src: iconInstagram, alt: "Instagram" },
];

const Footer = () => (
  <footer className="relative text-white">
    <div className="absolute inset-0 bg-[hsl(190,80%,45%)]" />

    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 pt-12 lg:pt-16 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-8 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <img src={logoPlaceholder} alt="Logo de la Empresa" className="w-[180px] lg:w-[220px] h-auto" />
          <div className="mt-2 lg:mt-4 text-sm leading-relaxed">
            <p className="font-bold">SU EMPRESA</p>
            <p>Calle Principal #123</p>
            <p>Ciudad, Estado 12345</p>
            <p>+1 (555) 123-4567</p>
            <p>LICENCIA DE CONTRATISTA #000000</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            {socialIcons.map((icon) => (
              <a key={icon.alt} href="#" className="hover:opacity-80 transition-opacity">
                <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle column */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="font-bold text-sm mb-3">AYUDA</h4>
            <ul className="flex flex-col gap-1.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm underline hover:opacity-80 transition-opacity">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3">ÁREAS DE SERVICIO</h4>
            <a href="#" className="text-sm underline hover:opacity-80 transition-opacity">Buscar Servicio</a>
          </div>
        </div>

        {/* Right column */}
        <div>
          <h4 className="font-bold text-sm mb-3">SERVICIOS</h4>
          <div className="grid grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-1.5">
            {serviceLinks.map(([left, right], i) => (
              <div key={i} className="contents">
                <a href="#" className="text-sm underline hover:opacity-80 transition-opacity">{left}</a>
                {right ? <a href="#" className="text-sm underline hover:opacity-80 transition-opacity">{right}</a> : <span />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 lg:mt-12 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs">
          © Todos los derechos reservados {new Date().getFullYear()} |{" "}
          <a href="#" className="underline hover:opacity-80">Política de Privacidad</a>
        </p>
        <p className="text-xs">Sitio web por suagencia.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;
