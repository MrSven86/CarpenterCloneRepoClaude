import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import RatingSummary from "@/components/RatingSummary";
import ReviewCard from "@/components/ReviewCard";
import { reviews, totalReviews } from "@/data/reviews";

const INITIAL_COUNT = 2;
const LOAD_MORE_COUNT = 5;

const Index = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const shownReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-10 md:py-16">
        <RatingSummary />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-sm text-muted-foreground mt-8 mb-2 px-1"
        >
          Showing 1–{Math.min(visibleCount, reviews.length)} of {totalReviews} reviews
        </motion.p>

        <div>
          {shownReviews.map((review, i) => (
            <ReviewCard key={review.name + review.date} review={review} index={i} />
          ))}
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center pt-6"
          >
            <button
              onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
              className="group flex items-center gap-2 text-cta font-medium text-sm hover:underline transition-all duration-200 active:scale-[0.97]"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              See more reviews
              <ChevronRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;
