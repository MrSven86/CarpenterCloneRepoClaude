const InfoCards = () => (
  <section className="w-full bg-salon-light py-20">
    <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Contact */}
      <div className="bg-background rounded-2xl border border-foreground p-8 text-center">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Kontakta oss</h3>
        <p className="font-body text-sm font-bold text-foreground mb-1">Salong Östermalm</p>
        <p className="text-muted-foreground text-sm font-body mb-4">
          Tel: <span className="underline">070-993 02 02</span>
          <br />
          info@sagaharstudio.se
        </p>
        <p className="font-body text-sm font-bold text-foreground mb-1">Salong Kungsholmen</p>
        <p className="text-muted-foreground text-sm font-body mb-6">
          Tel: <span className="underline">072-393 02 02</span>
          <br />
          info@sagaharstudio.se
        </p>
        <button className="bg-foreground text-background font-body text-sm rounded-full px-6 py-3">
          Boka tid
        </button>
      </div>

      {/* Hours */}
      <div className="bg-background rounded-2xl border border-foreground p-8 text-center">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Öppettider</h3>
        <p className="text-muted-foreground text-sm font-body mb-4">
          Det här är våra ordinarie öppettider för våra salonger
        </p>
        <p className="font-body text-sm font-bold text-foreground mb-1">Salong Östermalm</p>
        <p className="text-foreground text-xs font-body mb-1"><span className="underline">Mån:</span> kl. 10.00 - 18.30</p>
        <p className="text-foreground text-xs font-body mb-1"><span className="underline">Tis - Lör:</span> kl. 10.00 - 19.00</p>
        <p className="text-foreground text-xs font-body mb-3"><span className="underline">Sön:</span> kl. 10.00 - 17.00</p>
        <p className="font-body text-sm font-bold text-foreground mb-1">Salong Kungsholmen</p>
        <p className="text-foreground text-xs font-body mb-1"><span className="underline">Mån - Fre:</span> kl. 10.00 - 18.30 (Tor: Stängt)</p>
        <p className="text-foreground text-xs font-body"><span className="underline">Lör - Sön:</span> kl. 10.00 - 18.00</p>
      </div>

      {/* Map */}
      <div className="bg-background rounded-2xl border border-foreground p-8 text-center">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Hitta till oss</h3>
        <div className="flex justify-center gap-2 mb-4">
          <span className="bg-orange-50 rounded-full px-4 py-1 text-xs font-body text-foreground">Östermalm</span>
          <span className="bg-muted rounded-full px-4 py-1 text-xs font-body text-foreground">Kungsholmen</span>
        </div>
        <div className="w-full h-52 bg-muted rounded-2xl overflow-hidden">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.5!2d17.6389!3d59.8586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDUxJzMxLjAiTiAxN8KwMzgnMjAuMCJF!5e0!3m2!1sen!2sse!4v1234567890"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default InfoCards;
