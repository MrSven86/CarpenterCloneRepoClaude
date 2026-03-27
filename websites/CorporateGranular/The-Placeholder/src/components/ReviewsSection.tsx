import googleStar from "@/assets/google-star.svg";
import googleHalfStar from "@/assets/google-half-star.svg";
import googleLogoFull from "@/assets/google-logo-full.svg";
import googleIcon from "@/assets/google-icon.svg";
import verifiedBadge from "@/assets/verified-trustindex.svg";
import { ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Dennis Moody",
    date: "2025-03-31",
    initial: "D",
    initialBg: "#7B1FA2",
    avatar: null,
    text: "Very prompt and professional! The guys were in and out with care and consideration for protecting...",
  },
  {
    name: "Carol Gilbert",
    date: "2024-12-13",
    initial: null,
    initialBg: null,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXKQKgBfHOVzNkW6eCWfLrT9VbLHY0K7yEjFKgqUQ=s40-c-rp-mo-br100",
    text: "The Escalantes guys were prompt, kept the house clean using drop cloths, did a beautiful job patching crack...",
  },
  {
    name: "Roberta Nemitz",
    date: "2024-10-25",
    initial: "R",
    initialBg: "#43A047",
    avatar: null,
    text: "I hired Escalante's painting to paint the exterior of my house. They explained the entire process to me. The...",
  },
];

const FiveStars = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <img key={i} src={googleStar} alt="" className="w-[18px] h-[18px]" />
    ))}
    <svg className="ml-1 w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="none">
      <path d="M9 12l2 2 4-4" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="10" stroke="#1a73e8" strokeWidth="1.5" fill="none"/>
    </svg>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-6 flex items-start gap-8">
        {/* Left: Google rating summary */}
        <div className="flex flex-col items-center min-w-[180px] pt-2">
          <span className="text-[22px] font-bold text-gray-800 tracking-wide mb-1">EXCELLENT</span>
          <div className="flex items-center gap-0.5 mb-1">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={googleStar} alt="" className="w-[30px] h-[30px]" />
            ))}
            <img src={googleHalfStar} alt="" className="w-[30px] h-[30px]" />
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Based on <span className="font-bold text-gray-800">14 reviews</span>
          </p>
          <img src={googleLogoFull} alt="Google" className="h-[30px]" />
        </div>

        {/* Review cards */}
        <div className="flex gap-6 flex-1 overflow-hidden">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[260px] bg-white rounded-lg shadow-[0_1px_6px_rgba(0,0,0,0.1)] p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: review.initialBg || "#999" }}
                  >
                    {review.initial}
                  </div>
                )}
                <div className="flex-1">
                  <p className="font-bold text-sm text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
              </div>

              {/* Stars */}
              <div className="mb-3">
                <FiveStars />
              </div>

              {/* Text */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                {review.text}
              </p>

              {/* Read more */}
              <button className="text-sm text-gray-500 mt-2 text-left hover:text-gray-700">
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Next arrow */}
        <button className="mt-16 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 shrink-0">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Verified badge */}
      <div className="max-w-[1400px] mx-auto px-6 flex justify-end mt-4">
        <img src={verifiedBadge} alt="Verified by Trustindex" className="h-[28px]" />
      </div>
    </section>
  );
};

export default ReviewsSection;
