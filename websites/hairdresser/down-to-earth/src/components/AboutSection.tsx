import salonInterior from "@/assets/salon_interior.jpg";

const AboutSection = () => (
  <section className="w-full bg-background overflow-hidden">
    <div className="flex flex-col lg:flex-row">
      {/* Left image with fade */}
      <div className="lg:w-[60%] relative min-h-[400px] lg:min-h-[768px]">
        <img
          src={salonInterior}
          alt="Salongens interiör"
          className="w-full h-full object-cover"
        />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-96 bg-gradient-to-r from-transparent to-background" />
      </div>

      {/* Right text */}
      <div className="lg:w-[40%] flex flex-col justify-center px-4 lg:px-12 py-16">
        <p className="font-heading text-base text-foreground tracking-wide mb-3">
          Hår | Styling
        </p>
        <h2 className="heading-xl mb-8">
          BOSSES – en frisör i
          <br />
          Uppsala
        </h2>
        <p className="body-text mb-4">
          BOSSES Hår och styling räknas till en av landets anrikaste salonger.
          För en äkta Uppsalabo är Bosses ett lika naturligt riktmärke som
          Domkyrkan och Carolina Rediviva.
        </p>
        <p className="body-text mb-10">
          Hos oss är du i säkra händer. Alla frisörer hos oss är utbildade och
          kan visa upp gesäll- eller mästarbrev. Vi vill vara en förebild för
          övriga branschen när det kommer till yrkesskicklighet och kvalité.
          Det ska synas att vi lägger ner vår själ i det vi gör – oavsett om
          du vill ha en tidlös frisyr eller följa den senaste trenden.
        </p>
        <div>
          <button className="btn-outline-primary">Läs mer om oss</button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
