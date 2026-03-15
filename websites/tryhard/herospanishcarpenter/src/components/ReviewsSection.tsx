import noiseBg from "@/assets/noise.png";
import rating46 from "@/assets/rating-4-6.png";
import reviewMichael from "@/assets/review-michael.png";
import reviewErica from "@/assets/review-erica.png";

const reviews = [
  { name: null, subtitle: "Basado en Reseñas de Google", photo: null, rating: "5.0", text: "Altamente recomendado. Fue un placer trabajar con ellos. Tenía una casa antigua con un techo de más de 20 años que necesitaba reemplazo. Una vez que decidí los materiales, estaba programado para la siguiente semana y el trabajo se completó en un día." },
  { name: "Miguel S.", subtitle: "Basado en Reseñas de Google", photo: reviewMichael, rating: "5.0", text: "Trabajar con esta empresa fue muy fácil. Fueron muy transparentes y comenzaron a trabajar bastante rápido. ¡Terminaron nuestro proyecto en poco tiempo! Aprecié mucho todos sus servicios." },
  { name: "Laura G.", subtitle: "Basado en Reseñas de Google", photo: reviewErica, rating: "5.0", text: "El equipo fue un socio maravilloso durante todo el proyecto. Me guiaron en cada obstáculo y me mantuvieron bien informada del proceso y los detalles. Aprecio su profesionalismo, ética y buen trato. ¡Los recomiendo a todos mis conocidos!" },
];

const GoogleLogo = ({ size = 44 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M37.6 22.5c0-1.28-.11-2.51-.33-3.69H22v6.98h8.73a7.47 7.47 0 01-3.24 4.9v4.07h5.24C35.65 31.77 37.6 27.5 37.6 22.5z" fill="#4285F4" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22 38c4.38 0 8.06-1.45 10.73-3.93l-5.24-4.07c-1.45.97-3.3 1.55-5.49 1.55-4.22 0-7.8-2.85-9.08-6.68H7.5v4.2A16.18 16.18 0 0022 38z" fill="#34A853" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.92 24.87A9.72 9.72 0 0112.39 22c0-.99.17-1.95.53-2.87v-4.2H7.5A16.18 16.18 0 006 22c0 2.61.63 5.09 1.5 7.07l5.42-4.2z" fill="#FBBC05" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22 12.45c2.38 0 4.51.82 6.19 2.42l4.63-4.63C30.05 7.58 26.37 6 22 6A16.18 16.18 0 007.5 14.93l5.42 4.2C14.2 15.3 17.78 12.45 22 12.45z" fill="#EA4335" />
  </svg>
);

const Glint = ({ width, height, top, left, right, rotate, opacity }: { width: number; height: number; top?: string; left?: string; right?: string; rotate: number; opacity: number }) => (
  <div className="absolute pointer-events-none rounded-full hidden lg:block" style={{ width, height, top, left, right, background: 'radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)', transform: `rotate(${rotate}deg)`, opacity }} />
);

const ReviewsSection = () => {
  return (
    <section className="w-full relative overflow-hidden pb-12 lg:pb-[80px]">
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(56,189,248,0.18)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(${noiseBg})`, backgroundRepeat: 'repeat', backgroundSize: '300px 300px', opacity: 0.55 }} />
      <Glint width={340} height={200} top="-40px" left="5%" rotate={-25} opacity={0.6} />
      <Glint width={260} height={160} top="60%" right="6%" rotate={20} opacity={0.5} />

      <div className="relative z-10 pt-12 lg:pt-[76px]">
        <div className="flex flex-col items-center text-center mb-8 px-4">
          <div className="flex items-center gap-3 mb-5">
            <GoogleLogo size={44} />
            <div className="flex flex-col items-start leading-tight">
              <span className="font-bold text-lg lg:text-[20px]" style={{ color: '#111827' }}>Excelente en Google</span>
              <div className="flex items-center gap-[6px] mt-[2px]">
                <span className="font-bold text-[15px]" style={{ color: '#111827' }}>4.6</span>
                <img src={rating46} alt="4.6 estrellas" className="h-[18px]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="#00BFEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="#00BFEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-lg lg:text-[22px] uppercase tracking-wide" style={{ color: '#00BFEF' }}>
              LEA NUESTRAS RESEÑAS REALES
            </span>
          </div>

          <h2 className="font-normal text-3xl lg:text-[48px] leading-tight lg:leading-[1.12]" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", color: '#374151' }}>
            Lo que dicen nuestros<br className="hidden sm:block" />clientes
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row w-full mt-[20px] gap-4 lg:gap-0 px-4 lg:px-0">
          {reviews.map((review, index) => (
            <div key={index} className="flex-1 bg-white overflow-hidden" style={{ boxShadow: '0px 10px 30px 0px rgba(0,0,0,0.10)', minHeight: '288px' }}>
              <div className="px-6 lg:px-[31px] pt-8 lg:pt-[40px] pb-6 lg:pb-[31px] h-full flex flex-col">
                <div className="flex items-start justify-between mb-6 lg:mb-[30px]">
                  <div className="flex items-center gap-3">
                    {review.photo ? (
                      <img src={review.photo} alt={review.name || "Reseñador"} className="w-12 h-12 lg:w-[65px] lg:h-[65px] rounded-full object-cover flex-shrink-0" />
                    ) : (
                      <div className="w-12 h-12 lg:w-[65px] lg:h-[65px] rounded-full flex-shrink-0 bg-slate-200" />
                    )}
                    <div className="flex flex-col gap-[4px]">
                      {review.name && <span className="font-bold text-base lg:text-[20px] leading-5 capitalize" style={{ color: '#1c1917' }}>{review.name}</span>}
                      <span className="font-normal text-sm lg:text-[15px] leading-4" style={{ color: '#0a0a0a' }}>{review.subtitle}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px] flex-shrink-0">
                    <GoogleLogo size={36} />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-base lg:text-[20px] leading-none" style={{ color: '#1a1a1a' }}>{review.rating}</span>
                      <span className="text-base lg:text-[18px] leading-none tracking-wide" style={{ color: '#E4A44A' }}>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm lg:text-[17px] font-normal leading-6" style={{ color: '#71717a' }}>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
