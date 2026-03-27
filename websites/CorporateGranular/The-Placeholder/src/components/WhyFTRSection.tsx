import kitchenImg from "@/assets/why-ftr-kitchen.jpg";

const WhyFTRSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 flex gap-16 items-start">
        {/* Left content */}
        <div className="flex-1 max-w-[540px]">
          <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: '#2AB585' }}>
            WHY FTR?
          </p>
          <h2 className="text-[42px] font-black leading-[1.1] text-gray-900 mb-3">
            Better than the rest.
          </h2>
          {/* Decorative dashes */}
          <div className="flex items-center gap-1 mb-5">
            <div className="w-6 h-[3px] bg-gray-900 rounded-full" />
            <div className="w-10 h-[3px] rounded-full" style={{ backgroundColor: '#2AB585' }} />
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            More than a construction company, FTR is about transforming spaces and maximizing property potential.
          </p>

          {/* Card - Over 40 Years */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Over 40 Years of Expertise.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Four decades of mastery drives us. Our legacy spans over 1,000 completed projects in remodeling and ground-up construction.
            </p>
          </div>

          {/* Client-First Foundation */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Client-First Foundation.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Customer satisfaction is our top priority. Our consistent trust and communication-based process ensures projects reach completion without compromise.
            </p>
          </div>

          {/* Dependability */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dependability You Can Count On.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our experienced team is committed to reliability. We proudly stand by our 100% project completion rate. Every project is fully licensed and insured for your peace of mind.
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-end">
          <img
            src={kitchenImg}
            alt="Modern kitchen remodel by FTR"
            className="w-full max-w-[560px] rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyFTRSection;
