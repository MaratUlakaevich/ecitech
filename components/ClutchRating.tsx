import React, { FC } from "react";

// PLACEHOLDER Clutch rating embed.
// Numbers and review count are hardcoded — NOT pulled from the Clutch API.
// TODO (PM): Replace with the official Clutch widget script once account access is available.
//            https://clutch.co/press-tools/widget-builder

interface ClutchRatingProps {
  rating?: number;
  reviewCount?: number;
  profileUrl?: string;
}

const StarIcon: FC<{ filled?: boolean; half?: boolean }> = ({
  filled = true,
}) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-600"}`}
    fill="currentColor"
  >
    <path d="M12 2.25l2.955 5.988 6.607.96-4.781 4.66 1.128 6.58L12 17.77l-5.909 3.108 1.128-6.58L2.438 9.198l6.607-.96L12 2.25z" />
  </svg>
);

const ClutchRating: FC<ClutchRatingProps> = ({
  rating = 4.9,
  reviewCount = 27,
  profileUrl = "https://clutch.co/profile/ecitech",
}) => {
  const fullStars = Math.floor(rating);
  const stars = Array.from({ length: 5 }, (_, i) => i < fullStars);

  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-4 bg-gray-800 hover:bg-gray-700 transition-colors rounded-2xl px-6 py-4 border border-gray-700"
      aria-label={`ECITech Clutch rating: ${rating} out of 5 based on ${reviewCount} reviews`}
    >
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-widest text-gray-400">
          Reviewed on
        </span>
        <span className="text-red-500 font-bold text-xl leading-none">
          Clutch
        </span>
      </div>

      <div className="h-10 w-px bg-gray-700" />

      <div className="flex flex-col">
        <div className="flex items-center gap-1" aria-hidden="true">
          {stars.map((isFilled, i) => (
            <StarIcon key={i} filled={isFilled} />
          ))}
        </div>
        <span className="text-sm text-gray-300 mt-1">
          <span className="font-semibold text-white">
            {rating.toFixed(1)} / 5
          </span>{" "}
          based on {reviewCount} reviews
        </span>
      </div>
    </a>
  );
};

export default ClutchRating;
