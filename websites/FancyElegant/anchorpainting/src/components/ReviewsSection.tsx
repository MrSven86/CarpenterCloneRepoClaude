import buildzoomIcon from "@/assets/buildzoom-icon.svg";
import licenseIcon from "@/assets/license-icon.svg";
import bbbIcon from "@/assets/bbb-icon.png";
import noSafetyIcon from "@/assets/no-safety-violation.png";

const credentials = [
  {
    icon: buildzoomIcon,
    title: "BuildZoom Score: 92/100",
    text: "Independent rating placing us in the top 32% of California licensed contractors based on licensing verification, safety records, and compliance data.",
  },
  {
    icon: licenseIcon,
    title: "California Licensed C33 Contractor",
    text: "License #1139722 requires four years of journeyman experience, passing state examinations, and ongoing compliance with CSLB oversight and consumer protections.",
  },
  {
    icon: bbbIcon,
    title: "BBB A- Rating",
    text: "Better Business Bureau rating confirms proper business structure and transparent practices as we establish our track record in the community.",
  },
  {
    icon: noSafetyIcon,
    title: "No Safety Violations",
    text: "SiteVetter safety score of 70/100 with zero violations, debarments, or OSHA issues on record for safe, compliant work practices.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-foreground" />
            <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground">
              What Our Credentials Say
            </span>
          </div>
          <h2 className="font-serif text-[48px] leading-[52px] text-foreground mb-4">
            Independently Verified Standards
          </h2>
          <p className="text-muted-foreground text-[15px] leading-[24px] max-w-[680px]">
            While we're building our customer review history as a newly established contractor, our credentials speak to the professional standards we maintain.
          </p>
        </div>

        {/* Credential cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((cred, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border/40 flex flex-col gap-3">
              <img src={cred.icon} alt={cred.title} className="w-24 h-16 object-contain object-left" />
              <h3 className="font-semibold text-foreground text-[16px] leading-[22px]">{cred.title}</h3>
              <p className="text-muted-foreground text-[14px] leading-[22px]">{cred.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
