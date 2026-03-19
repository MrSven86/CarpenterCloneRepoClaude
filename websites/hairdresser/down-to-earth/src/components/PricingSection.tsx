import { useState } from "react";

const tabs = ["Klippning", "Färg & Klipp", "Inpackningar", "Bryn & Fransar", "Styling", "Löshår"];

const priceData: Record<string, { name: string; price: string; desc: string }[]> = {
  Klippning: [
    { name: "Herrklippning", price: "500:-", desc: "Ink hårtvätt och styling, passar dig som klipper dig kontinuerligt och har inte utmärkande tjockt hår." },
    { name: "Herrklippning (tjockt hår)", price: "580:-", desc: "Ink hårtvätt och styling, passar dig som ska klippa en ny frisyr eller vet med dig att ditt hår kräver längre tid" },
    { name: "Damklippning", price: "660:-", desc: "Ink hårtvätt och lättare styling, passar dig som klipper dig kontinuerligt och inte har utmärkande tjockt hår." },
    { name: "Damklippning (tjockt hår)", price: "800:-", desc: "Ink hårtvätt och lättare styling, passar dig som ska klippa en ny frisyr eller att du vet med dig att ditt hår kräver längre tid." },
    { name: "Barnklippning upp till 8 år", price: "450:-", desc: "Hårtvätt ingår ej" },
    { name: "Lugg / skägg", price: "190:-", desc: "" },
  ],
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Klippning");
  const items = priceData[activeTab] || priceData["Klippning"];

  return (
    <section className="w-full bg-background py-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
        <div className="border-2 border-foreground p-6 lg:p-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 lg:gap-8 mb-12 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-body uppercase text-sm tracking-widest transition-colors ${
                  activeTab === tab
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Price grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6">
            {items.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between items-baseline border-b-2 border-primary pb-1 mb-2">
                  <span className="font-body uppercase text-sm tracking-wide text-foreground">
                    {item.name}
                  </span>
                  <span className="font-body uppercase text-sm tracking-wide text-foreground">
                    {item.price}
                  </span>
                </div>
                {item.desc && (
                  <p className="text-muted-foreground text-sm font-body leading-6">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
