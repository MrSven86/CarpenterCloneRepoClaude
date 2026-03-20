import { Star } from "lucide-react";
import { motion } from "framer-motion";
import StarRating from "./StarRating";
import { ratingDistribution, overallRating, totalReviews } from "@/data/reviews";

const RatingSummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1
            className="text-foreground mb-2"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "-0.5px",
            }}
          >
            Reviews
          </h1>
          <div className="flex items-center gap-2">
            <span
              className="text-foreground"
              style={{
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "36px",
                letterSpacing: "-0.5px",
              }}
            >
              {overallRating}
            </span>
            <StarRating rating={overallRating} size={20} />
            <span
              className="text-foreground"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              {totalReviews} Reviews
            </span>
          </div>
        </div>
        <button
          className="border-2 border-cta text-cta rounded-full hover:bg-cta hover:text-cta-foreground transition-colors duration-200 active:scale-[0.97]"
          style={{
            fontSize: "16px",
            fontWeight: 600,
            padding: "10px 32px",
            lineHeight: "20px",
          }}
        >
          Write a review
        </button>
      </div>

      {/* Rating bars */}
      <div className="space-y-1.5 mt-4">
        {ratingDistribution.map((item, i) => (
          <motion.div
            key={item.stars}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-2"
            style={{ fontSize: "14px", lineHeight: "20px" }}
          >
            <span className="w-3 text-right font-semibold text-foreground">{item.stars}</span>
            <Star size={14} className="fill-star text-star shrink-0" />
            <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full bg-primary rounded-full"
              />
            </div>
            <span className="w-8 text-right text-muted-foreground tabular-nums" style={{ fontSize: "14px" }}>
              {item.percentage}%
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RatingSummary;
