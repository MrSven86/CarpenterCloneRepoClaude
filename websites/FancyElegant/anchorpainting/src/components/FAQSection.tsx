import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faqPoster from "@/assets/faq-poster.webp";
import faqDots from "@/assets/faq-dots.svg";

const faqs = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we hold California C33 Painting and Decorating License #1139722, which is active and in good standing. We carry a $25,000 contractor bond and operate as a properly structured corporation. Our BuildZoom score of 92/100 places us in the top 32% of California contractors.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Hawthorne, CA and serve the entire South Bay area including Hawthorne, Inglewood, Manhattan Beach, Hermosa Beach, Redondo Beach, El Segundo, Torrance, and surrounding communities.",
  },
  {
    question: "What types of painting do you do?",
    answer:
      "We handle both residential and commercial projects including interior painting (walls, ceilings, trim, doors), exterior painting (siding, trim, fascia, soffits, decks), cabinet refinishing, and all necessary surface preparation and repairs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timeline depends on project size and scope. A single room typically takes 1-2 days, while a whole house interior might take 3-5 days, and exterior projects 3-7 days depending on size and condition. We'll provide a specific timeline with your estimate.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1 max-w-[680px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-foreground" />
              <span className="text-foreground text-[13px] font-semibold tracking-[0.15em] uppercase">
                Common Questions
              </span>
            </div>

            <h2 className="font-serif text-[48px] leading-[56px] text-foreground mb-4">
              Frequently<br />Asked Questions
            </h2>

            <p className="text-muted-foreground text-[15px] leading-[24px] mb-10 max-w-[580px]">
              Here are answers to common questions about our painting services and what you can expect.
            </p>

            <div className="flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-border/40 py-6">
                    <button
                      className="flex items-start justify-between w-full text-left gap-4"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-hero-cta font-semibold text-[16px] leading-[26px] shrink-0">Q.</span>
                        <span className="font-semibold text-foreground text-[16px] leading-[26px]">
                          {faq.question}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#4a6741] flex items-center justify-center shrink-0">
                        {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="mt-4 ml-8">
                        <p className="text-muted-foreground text-[14px] leading-[24px]">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center relative">
            <div className="absolute top-12 right-4 w-[420px] h-[540px] bg-hero-cta rounded-2xl" />
            <img src={faqDots} alt="" className="absolute bottom-16 left-8 w-[140px] h-[140px] opacity-30" />
            <div className="relative z-10 w-[400px] h-[470px] rounded-2xl shadow-lg translate-x-2 -translate-y-4 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={faqPoster}
                className="w-full h-full object-cover"
              >
                <source src="https://mrsven.com/Videos/Anchor%20Painting.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
