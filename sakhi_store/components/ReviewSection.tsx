import React, { useState } from 'react';

const ReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => setHoverRating(index);
  const handleMouseLeave = () => setHoverRating(0);
  const handleClick = (index: number) => setRating(index);

  const reviews = [
    {
      name: "Jane Doe",
      comment: "Great product! Highly recommended.",
      rating: 5,
    },
    {
      name: "John Smith",
      comment: "Good quality, fast shipping!",
      rating: 4,
    },
    // Add more reviews as needed
  ];

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-heading3-bold text-center">Customer Reviews</h2>
      <div className="mt-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="border-b pb-4 mb-4">
            <div className="flex items-center">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    onMouseEnter={() => handleMouseEnter(i + 1)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(i + 1)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i + 1 <= (hoverRating || review.rating) ? "gold" : "gray"}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.518 7.778h8.165c.97 0 1.371 1.24.588 1.81l-6.592 4.796 2.517 7.778c.3.921-.755 1.688-1.539 1.118L12 19.941l-6.608 4.166c-.784.57-1.839-.197-1.539-1.118l2.517-7.778-6.592-4.796c-.783-.57-.382-1.81.588-1.81h8.165l2.518-7.778z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
            <p className="mt-1 text-gray-500">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
