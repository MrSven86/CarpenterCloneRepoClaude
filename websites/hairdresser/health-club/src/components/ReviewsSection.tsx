import { motion } from "framer-motion";
import googleIcon from "@/assets/google-icon.png";
import starIcon from "@/assets/star.svg";

const reviews = [
  { name: "Analuz Abele", rating: 5, text: "Excelente atención siempre!! Nancy con su trabajo de manicuria y pedicuria completa es impecable!!. Super recomendables!!" },
  { name: "Cecilia Brizuela", rating: 5, text: "Excelente atención! Nancy muy atenta y prolija." },
  { name: "Lucia Negri", rating: 5, text: "Excente servicio de Peluquería, Marta y Carmen muy buenas personas y profesionales. Recomendada LA Pelu 100%" },
  { name: "Diana Altavilla", rating: 5, text: "Siempre excelentes e impecables! Muy buenos precios!" },
  { name: "Margaret Jose Tarache Castellin", rating: 5, text: "Exelente servicio, muy prolijas y la atención 10000 puntos" },
  { name: "Alejandra Tobares", rating: 5, text: "Lugar calido con mucha profecionalidad" },
  { name: "Blanca Castillo", rating: 4, text: "Exelente atencion!! Muy buen servicio" },
  { name: "Tatiana Forero", rating: 5, text: "Siempre salgo encantada con mi manicura y pedicura de Nanci. El trato de Carmen es excelente y saben exactamente lo que necesito. ¡Recomiendo 100%!" },
  { name: "Agustina Berrafato", rating: 5, text: "Marta me hizo un corte de pelo hermoso! Entendió a la perfección lo que le pedí y en general en el lugar me atendieron con mucha calidez 🩷" },
  { name: "Nella Tellería", rating: 5, text: "Si buscas un estudio de uñas que te haga una manicura impecable, duradera y con diseños hermosos, este es el lugar. Nancy, una artista de verdad. 💅🏼 Super recomendado 🥰" },
  { name: "Susana Tedesco", rating: 5, text: "Felicito la atencion del equipo de trabajo. Que agradable y cálido momento pasé. Felicito el delicado desempeño de Marta." },
  { name: "Ana Tellini", rating: 5, text: "Amabilidad y excelencia, son las mejores y únicas" },
  { name: "Cynthia Williams", rating: 5, text: "Es mi lugar favorito! Lo consentida y renovada qué salgo, vale cada minuto. Recomiendo cada servicio. Mi Nancy es la mejor manicurista 🩷🩷🩷" },
  { name: "Luz Nuñez Souto", rating: 4, text: "Me hago color y corto el cabello con la genia de Marta!!! Es única!! Charlamos y tomamos cafecito… un placer atenderme aquí!!!" },
  { name: "Yessika Rebolledo", rating: 5, text: "Excelente servicio 😌" },
  { name: "Griselda Cafferata", rating: 5, text: "Excelente atención, súper profesional Marta la peluquera, gracias, la recomiendo, excelente colorista y peinadora 💯❤️" },
  { name: "Malena Gimenez", rating: 5, text: "Son las mejores perfecto trabajo" },
  { name: "Sil Rich", rating: 5, text: "Excelente la atención de Marta Ponce, muy eficiente. Me hice color. Precios muy acomodados y muy buena atención en general" },
  { name: "Mercedes Corcega", rating: 5, text: "Me encanta la atención que brindan, en peluquería y manicura, súper recomendada La Pelu" },
  { name: "Andrea Veronica Pimentel", rating: 5, text: "Excelente lugar y agradable ambiente. La cosmetóloga Gabriela es muy cuidadora y super profesional con resultados visibles en la piel. Super recomendada." },
  { name: "Oriana Lugo", rating: 5, text: "Excelente atención y servicio. Muy profesionales" },
  { name: "Jaidy Carolin Morales", rating: 5, text: "Excelente atención y servicio... son impecables en todo 👏 me hice tinte, corte, uñas y todo excelente quede complacida las recomiendo ampliamente" },
  { name: "Marbe Romero", rating: 5, text: "Ya he ido en 3 oportunidades y aunque me queda lejos las sigo eligiendo. Zore hace unos cortes hermosos, te entiende perfectamente. La manicurista excelente también." },
  { name: "David Leon", rating: 5, text: "Me encanto el resultado y aproveché y me hice belleza de pies. Trabajan bien, buena atención y muy bajos precios 👍" },
  { name: "Sonia Marquina", rating: 5, text: "La atención es estupenda, me fui a pintar manos, pies y el cabello. Todo impecable me quedo, súper recomendable" },
  { name: "Linervis Jimon", rating: 5, text: "Excelente atención y profesionalismo. Nancy realiza un hermoso e impecable trabajo siempre deja mis manos hermosas y Zore le brinda los mejores cuidados a mi cabello 😀😀" },
  { name: "Mary", rating: 5, text: "Excelente servicio, las recomiendo al 100% quede muy feliz con mi cabello" },
  { name: "María Cristina Domínguez", rating: 5, text: "¡De 10 como siempre! Zore y Nancy son las mejores" },
  { name: "Marilí Carrillo", rating: 5, text: "Excelente servicios :) te hacen sentir como en casa y tanto Nancy como Zore son tremendas profesionales" },
  { name: "Consuelo Delgado", rating: 5, text: "Excelente atención" },
  { name: "Ines Girardi", rating: 5, text: "Buenisima atencion" },
  { name: "Anna Piñero Leañez", rating: 5, text: "Es comodo, te tratan excelente y los resultados son lindos" },
  { name: "Daniel Hernandez", rating: 5, text: "Excelente atención" },
  { name: "Juan Iturra", rating: 4, text: "Muy buena atencion" },
  { name: "Graciela Puppo", rating: 5, text: "Muy buena atención. Profesionales que saben. Precios accesibles." },
  { name: "Virginia Ching", rating: 5, text: "Excelente. Muy buena atención. Las recomiendo a 💯." },
  { name: "Yosmar Gimón", rating: 5, text: "Excelente servicio!!! Son las Mejores!!! 😘" },
  { name: "Diosleidy Brazón", rating: 5, text: "Excelente atención" },
  { name: "Alejandra Mendoza", rating: 5, text: "Excelente atención y buenas profesionales!!!" },
  { name: "Paola Velasquez", rating: 5, text: "Excelente, 100% recomendado" },
  { name: "Maria Fernanda Mendoza", rating: 5, text: "Excelente trabajo, atención y buen trato, volvería nuevamente!" },
  { name: "Dayana Hernandez", rating: 5, text: "Excelente atención y trabajo, Me encantó. Recomendadisima" },
  { name: "Yris Mundarain", rating: 5, text: "Me hice una mechas me quedaron muy lindas" },
  { name: "Petra Guzman", rating: 5, text: "Excelente muy buen servicio." },
  { name: "Ysabel Quiñones", rating: 5, text: "Excelente servicio y atención. Lo recomiendo! 💯" },
  { name: "Milibel Torres", rating: 5, text: "Fui con un mal trabajo en el cabello y Zorelys me arregló y me dejó como siempre soñé. Además un amor de persona adorable, todo el equipo." },
  { name: "NEGROINDIO", rating: 5, text: "Son unas Genias, muy atentas y amorosas. Mis pies ahora no son una vergüenza gracias a Nancy." },
  { name: "Claritza Marin", rating: 5, text: "Son exelente profesionales" },
  { name: "Lesly Jimon", rating: 5, text: "Excelente atención, muy buenas profesionales" },
  { name: "Margarita Galindo G.", rating: 5, text: "Excelente atención y profesionalismo en los procesos que realizan! Súper recomendado" },
  { name: "EriK Jimon", rating: 5, text: "Excelente servicio, todo muy impecable!!" },
  { name: "Jean Carlos Cordero", rating: 5, text: "Excelente servicio" },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: "#EE5533", fontSize: "24px", lineHeight: 1 }}>★</span>
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <div
    className="flex-shrink-0 flex flex-col"
    style={{
      width: "420px",
      backgroundColor: "#FFFF6B",
      borderRadius: "0 24px 24px 0",
      padding: "32px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    }}
  >
    {/* Name with bottom border */}
    <div style={{ width: "100%", paddingBottom: "16px", borderBottom: "1px solid #FBCEBD" }}>
      <h4 style={{ fontWeight: 700, fontSize: "22px", color: "#000", fontFamily: "var(--font-heading)" }}>
        {review.name}
      </h4>
    </div>

    {/* Review text */}
    <p style={{ fontSize: "15px", color: "#222", lineHeight: 1.6, marginTop: "20px", fontFamily: "var(--font-body)" }}>
      {review.text}
    </p>

    {/* Stars */}
    <div style={{ marginTop: "24px" }}>
      <Stars count={review.rating} />
    </div>

    {/* Source */}
    <p style={{ fontSize: "13px", color: "#333", marginTop: "8px", fontFamily: "var(--font-body)" }}>
      Reseña desde Google
    </p>
  </div>
);

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
  },
});

const ReviewsSection = () => {
  const duplicated = [...reviews, ...reviews];

  return (
    <section className="w-full bg-background py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-[60px] text-center mb-10 sm:mb-14">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-2"
        >
          4.9 Stars
        </motion.h2>
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-1.5 mb-4"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <img key={i} src={starIcon} alt="star" className="w-6 h-5 sm:w-7 sm:h-6" />
          ))}
        </motion.div>
        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-muted-foreground text-xs sm:text-sm font-[family-name:var(--font-body)] mb-5 max-w-[320px] mx-auto leading-relaxed"
        >
          Tu equipo de belleza en Belgrano, con 4.9
          <br />
          de calificación y casi 78 reseñas
        </motion.p>
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3"
        >
          <img src={googleIcon} alt="Google" style={{ width: "auto", height: "auto" }} />
          <span className="text-foreground text-sm sm:text-base font-semibold font-[family-name:var(--font-heading)] leading-tight">
            Google<br />Reseñas
          </span>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused]">
          {duplicated.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
