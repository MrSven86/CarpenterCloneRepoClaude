import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";
import StarRating from "./StarRating";
import googleGOverlay from "@/assets/google-g-overlay.png";
import type { Review } from "@/data/reviews";

const nameToColor = (name: string) => {
  const colors = ["#5c6bc0", "#e8710a", "#0d652d", "#c5221f", "#7b1fa2", "#1a73e8"];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  const initial = review.name.charAt(0).toUpperCase();
  const bgColor = nameToColor(review.name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.07, 0.35),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="border-b border-border py-6 last:border-b-0"
    >
      {/* Header: avatar + name + date */}
      <div className="flex items-center gap-3 mb-3">
        {/* Circle with initial + Google G overlapping bottom-right */}
        <div className="relative shrink-0" style={{ width: 44, height: 44 }}>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ backgroundColor: bgColor }}
          >
            <span className="text-white" style={{ fontSize: "22px", fontWeight: 500, lineHeight: 1 }}>
              {initial}
            </span>
          </div>
          {/* Google G with white stroke border */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              width: 20,
              height: 20,
              bottom: -2,
              right: -4,
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: "0 0 0 2px white",
            }}
          >
            <img src={googleGOverlay} alt="" style={{ width: 18, height: 18 }} />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <span
            className="text-foreground block"
            style={{ fontSize: "18px", fontWeight: 600, lineHeight: "24px", letterSpacing: "-0.3px" }}
          >
            {review.name}
          </span>
          <span className="text-muted-foreground" style={{ fontSize: "14px", lineHeight: "20px" }}>
            {review.date}
          </span>
        </div>
      </div>

      {/* Stars */}
      <div className="mb-2">
        <StarRating rating={review.rating} size={16} />
      </div>

      {/* Review text */}
      {review.text && (
        <p className="text-foreground" style={{ fontSize: "14px", lineHeight: "22px", overflowWrap: "break-word" }}>
          {review.text}
        </p>
      )}

      {(review.recommend || review.cost) && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
          {review.recommend && (
            <div className="flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: "13px" }}>
              <ThumbsUp size={13} />
              <span>Recommends this pro</span>
            </div>
          )}
          {review.cost && (
            <span className="text-muted-foreground" style={{ fontSize: "13px" }}>
              Cost: <span className="font-medium text-foreground">{review.cost}</span>
            </span>
          )}
        </div>
      )}
    </motion.article>
  );
};

export default ReviewCard;
