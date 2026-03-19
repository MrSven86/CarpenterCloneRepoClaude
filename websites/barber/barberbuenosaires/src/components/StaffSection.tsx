import staffAndreev from "@/assets/staff-andreev.png";
import staffPatlan from "@/assets/staff-patlan.png";
import staffShinkarenko from "@/assets/staff-shinkarenko.png";
import staffBryantsev from "@/assets/staff-bryantsev.png";
import staffBg from "@/assets/staff-bg.png";
import staffOrnament from "@/assets/staff-ornament.svg";

const StaffSection = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={staffBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <img
        src={staffOrnament}
        alt=""
        className="absolute left-1/2 top-8 -translate-x-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] opacity-60"
        aria-hidden="true"
      />

      <div className="relative z-10 pt-12 sm:pt-16 pb-0">
        <div className="text-center mb-10 sm:mb-12 px-6">
          <h2 className="font-['Bowlby_One'] text-foreground text-3xl sm:text-4xl lg:text-5xl font-normal mb-6">
            Meet our Staff
          </h2>
          <p className="text-foreground text-sm font-normal font-['Lato'] leading-7 sm:leading-8 max-w-[700px] mx-auto">
            While we believe in providing the best and latest professional hair care services in the industry, we also value our clients'
            comfort. That's why we have a clean and cozy salon, where you can sit back, relax, enjoy a cold beverage and snack, and
            entrust your hair to our professionals.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-primary z-0" />
          <div className="relative z-10 flex justify-center items-end gap-0">
            <img src={staffAndreev} alt="Staff member" className="w-1/2 sm:w-1/4 max-w-[300px] h-auto object-contain object-bottom" />
            <img src={staffPatlan} alt="Staff member" className="w-1/2 sm:w-1/4 max-w-[300px] h-auto object-contain object-bottom" />
            <img src={staffShinkarenko} alt="Staff member" className="hidden sm:block w-1/4 max-w-[300px] h-auto object-contain object-bottom" />
            <img src={staffBryantsev} alt="Staff member" className="hidden sm:block w-1/4 max-w-[300px] h-auto object-contain object-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
