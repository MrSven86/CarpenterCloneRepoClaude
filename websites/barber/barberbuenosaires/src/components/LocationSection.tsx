import compass from "@/assets/compass.svg";
import storefrontSketch from "@/assets/storefront-sketch.png";
import googleMaps from "@/assets/google-maps.png";
import swoosh from "@/assets/swoosh.png";
import { useState } from "react";

const locations = [
  {
    id: "jordaan",
    label: "JORDAAN",
    phone: "+31 20 786 43 26",
    email: "info@porembarbershop.nl",
    address: ["Nieuwe Willemsstraat 14,", "1015 JH Amsterdam"],
    title: "POREM JORDAAN",
  },
  {
    id: "dam-square",
    label: "DAM SQUARE",
    phone: "+31 20 786 43 26",
    email: "info@porembarbershop.nl",
    address: ["Dam Square 1,", "1012 JS Amsterdam"],
    title: "POREM DAM SQUARE",
  },
];

const LocationSection = () => {
  const [activeTab, setActiveTab] = useState("jordaan");
  const activeLocation = locations.find((l) => l.id === activeTab)!;

  return (
    <section className="relative bg-background py-12 sm:py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Compass - hidden on small screens */}
      <img
        src={compass}
        alt="Compass"
        className="hidden sm:block absolute top-6 left-6 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
      />

      {/* Tab switcher */}
      <div className="flex justify-center mb-12 sm:mb-20">
        <div className="inline-flex bg-muted rounded-full overflow-hidden">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveTab(loc.id)}
              className={`px-6 sm:px-8 py-3 text-sm font-['Lato'] font-bold tracking-wider transition-colors ${
                activeTab === loc.id
                  ? "bg-primary text-primary-foreground rounded-full"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>
      </div>

      {/* Google Maps - hidden on small */}
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex absolute top-6 right-10 flex-col items-center gap-1"
      >
        <img src={googleMaps} alt="Google Maps" className="w-[50px] h-auto" />
      </a>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-24">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={storefrontSketch}
            alt="Barbershop storefront"
            className="w-full max-w-[400px] lg:max-w-[500px] h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 pb-4 sm:pb-8">
          <div className="relative mb-8 sm:mb-10">
            <img
              src={swoosh}
              alt=""
              className="hidden sm:block absolute -left-[78px] top-0 w-[60px] h-auto"
              aria-hidden="true"
            />
            <h3 className="font-['Bowlby_One'] text-foreground text-xl lg:text-2xl uppercase leading-tight">
              POREM BARBERSHOP<br />{activeLocation.label}
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="font-['Lato'] font-bold text-foreground text-base mb-1">Phone Number</p>
              <p className="font-['Lato'] text-foreground text-base">{activeLocation.phone}</p>
            </div>
            <div>
              <p className="font-['Lato'] font-bold text-foreground text-base mb-1">Email</p>
              <p className="font-['Lato'] text-foreground text-base">{activeLocation.email}</p>
            </div>
            <div>
              <p className="font-['Lato'] font-bold text-foreground text-base mb-1">Adress</p>
              {activeLocation.address.map((line, i) => (
                <p key={i} className="font-['Lato'] text-foreground text-base">{line}</p>
              ))}
            </div>
            <div>
              <h3 className="font-['Bowlby_One'] text-foreground text-xl sm:text-2xl lg:text-3xl mb-2">
                {activeLocation.title}
              </h3>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-['Lato'] text-foreground text-base hover:underline"
              >
                Route description <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
