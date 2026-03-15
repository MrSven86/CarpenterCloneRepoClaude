const ServiceIntroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-gray-400 font-inter text-sm">Image Placeholder</span>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="font-general-sans font-medium text-base text-gray-600 mb-4 block">
              Quality Painting Work
            </span>
            <h2 className="font-satoshi font-bold text-[40px] lg:text-[48px] text-foreground leading-tight mb-6">
              Licensed Painting Contractor Serving Long Beach Since 2007
            </h2>
            <p className="font-inter text-base text-muted-foreground leading-relaxed mb-8">
              Chameleon Painting and Decorating is a fully licensed California painting contractor based in Long Beach. We hold an active C-33 Painting and Decorating license and have served the local community since 2007. Our work meets California's strict contractor licensing requirements, including required bonding, insurance, and professional standards.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-satoshi font-bold text-sm rounded transition-colors">
              GET FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroSection;
