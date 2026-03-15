import squareBrush from "@/assets/square-brush.svg";

const AboutSection = () => {
  return (
    <section className="w-full" style={{ backgroundColor: '#dce9ef' }}>
      <div className="max-w-[1440px] mx-auto relative px-4 sm:px-8 lg:px-[80px] py-12 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[60px]">
          {/* Left content */}
          <div className="w-full lg:w-[48%] pt-[10px]">
            <div className="flex items-center gap-2 mb-[10px]">
              <img src={squareBrush} alt="" className="w-[28px] h-[28px]" />
              <span className="font-bold text-lg lg:text-[20px] uppercase tracking-wide" style={{ color: '#00BFEF' }}>SOBRE NOSOTROS</span>
            </div>
            <h2 className="leading-tight lg:leading-[1.1] mb-6 lg:mb-[30px] text-3xl lg:text-[50px]" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", color: '#1a1a1a' }}>
              NUESTRA<br />DIFERENCIA
            </h2>
            <p className="text-base lg:text-[17px] leading-7 mb-8 lg:mb-[40px]" style={{ color: '#555555' }}>
              Imagine su hogar con un exterior impresionante que aumenta su atractivo, mejora la comodidad y reduce los costos de energía. Con nosotros, esto no es solo una posibilidad — es una promesa. No solo trabajamos en hogares — hacemos realidad el hogar de sus sueños.
            </p>
            <button className="w-full sm:w-[480px] h-[60px] text-white font-bold text-[18px] uppercase tracking-wider cursor-pointer border-none" style={{ background: 'var(--gradient-cta)' }}>
              COTIZACIÓN GRATIS
            </button>
          </div>
          {/* Right image */}
          <div className="w-full lg:w-[48%]">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=500&fit=crop" alt="Exterior hermoso de hogar" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
