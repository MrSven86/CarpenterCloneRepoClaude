import horizontalBorder from "@/assets/HorizontalBorder.svg";

const reviews = [
  { name: "Noah", text: "Riktigt bra service och väldigt bra frisörer. Jag är jätte nöjd med min upplevelse och jag kan till 100% rekommendera" },
  { name: "Ludvig", text: "Definitivt bästa fades i Uppsala! Effektiva men lägger den tid som behövs för att få det perfekt och alltid trevliga. Kommer du en halvtimma innan din bokning är det aldrig några problem med att dra igång tidigare. Rekommenderar varmt!" },
  { name: "Jerome", text: "Har klippt mig flertal gånger här, aldrig haft en dålig upplevelse. Bra pris, bra klippning. Ligger centralt i stan." },
  { name: "Mohamad", text: "Bästa frisörerna i Uppsala utan tvekan. Levererar bästa faden gång på gång vid varje tillfälle. 10/10 grabbar fortsätt så 🤝" },
  { name: "Aria", text: "Jag har varit kund i många år och är riktigt nöjd! Extremt trevlig personal som vet hur man lägger en bra fade." },
];

const StarIcon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.28657 -0.0078125L10.2425 6.01275H16.5728L11.4523 9.73362L13.4081 15.7541L8.28657 12.0333L3.16519 15.7541L5.12138 9.73362L0 6.01275H6.33048L8.28657 -0.0078125Z" fill="#F15A24"/>
  </svg>
);

const ReviewsSection = () => (
  <section className="w-full bg-background py-20 overflow-hidden">
    <div className="flex animate-scroll-reviews gap-6" style={{ width: "fit-content" }}>
      {[...reviews, ...reviews].map((r, i) => (
        <div key={i} className="review-card flex flex-col">
          <h4 className="font-heading text-2xl text-foreground mb-4">{r.name}</h4>
          <img src={horizontalBorder} alt="" className="w-full mb-6" />
          <p className="font-body text-foreground/80 text-sm leading-relaxed mb-auto">{r.text}</p>
          <div className="mt-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <StarIcon key={j} />
              ))}
            </div>
            <p className="text-foreground/70 text-sm font-body">Recension från Google</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewsSection;
