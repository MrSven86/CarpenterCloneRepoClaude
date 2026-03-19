import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full bg-background py-12">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-6">
        <p className="font-body text-base font-bold text-foreground text-center">
          Inspiration, erbjudanden & nyheter i vårt nyhetsbrev
        </p>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Din e-post"
              className="bg-muted rounded-full px-10 py-4 pr-40 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none w-[380px]"
            />
            <button className="absolute right-0 top-0 h-full btn-primary rounded-full px-8">
              Skicka
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <input type="checkbox" className="w-4 h-4 rounded border-2 border-muted-foreground" />
        <span className="text-muted-foreground text-xs font-body">
          Jag godkänner de allmänna villkoren
        </span>
      </div>
    </section>
  );
};

export default NewsletterSection;
