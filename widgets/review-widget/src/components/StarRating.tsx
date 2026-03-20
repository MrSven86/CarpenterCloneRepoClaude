import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

const StarRating = ({ rating, size = 16, className = "" }: StarRatingProps) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star
          key={i}
          size={size}
          className="fill-star text-star"
        />
      );
    } else if (i === fullStars && hasHalf) {
      stars.push(
        <span key={i} className="relative inline-flex">
          <Star size={size} className="text-star-empty fill-star-empty" />
          <span className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={size} className="fill-star text-star" />
          </span>
        </span>
      );
    } else {
      stars.push(
        <Star
          key={i}
          size={size}
          className="text-star-empty fill-star-empty"
        />
      );
    }
  }

  return <span className={`inline-flex items-center gap-0.5 ${className}`}>{stars}</span>;
};

export default StarRating;
