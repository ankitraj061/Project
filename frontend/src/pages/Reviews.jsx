import React from 'react';

const reviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    feedback: "Absolutely fantastic! The service exceeded my expectations. Highly recommend!",
  },
  {
    name: "Bob Smith",
    rating: 4,
    feedback: "Great experience overall, but there’s a little room for improvement in delivery speed.",
  },
  {
    name: "Catherine Lee",
    rating: 5,
    feedback: "Excellent quality! I’m a repeat customer for a reason. Keep up the great work!",
  },
  {
    name: "David Brown",
    rating: 3,
    feedback: "The product is decent, but the packaging could use some improvement.",
  },
  {
    name: "Emily White",
    rating: 5,
    feedback: "Phenomenal experience! The support team was quick to respond to my queries.",
  },
  {
    name: "Frank Green",
    rating: 4,
    feedback: "Very satisfied with my purchase, but I wish there were more color options.",
  },
  {
    name: "Grace Martinez",
    rating: 5,
    feedback: "I’m so happy with my purchase! The quality is outstanding, and it arrived on time.",
  },
  {
    name: "Hank Wilson",
    rating: 2,
    feedback: "Unfortunately, my experience was not great. The product didn’t match the description.",
  },
  {
    name: "Isabella Hall",
    rating: 5,
    feedback: "Superb customer service and excellent quality! Will definitely order again.",
  },
  {
    name: "Jack Taylor",
    rating: 4,
    feedback: "Good value for money, but the delivery took a bit longer than expected.",
  },
  {
    name: "Karen Walker",
    rating: 5,
    feedback: "The team went above and beyond to ensure I was satisfied. Thank you so much!",
  },
  {
    name: "Liam Adams",
    rating: 3,
    feedback: "The product is okay, but I think it’s slightly overpriced for what you get.",
  },
  {
    name: "Mia Nelson",
    rating: 5,
    feedback: "Absolutely love it! The quality and attention to detail are amazing.",
  },
  {
    name: "Noah Scott",
    rating: 4,
    feedback: "Great experience overall, but I would appreciate faster responses from the team.",
  },
  {
    name: "Olivia Campbell",
    rating: 5,
    feedback: "Highly recommend! This has been one of the best shopping experiences I’ve had.",
  },
];

const Reviews = () => {
  return (
    <div className="p-6 bg-gray-50 font-sans">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
            <p className="mt-1 text-yellow-500">
              <strong>Rating:</strong> {"⭐".repeat(review.rating)}
            </p>
            <p className="mt-2 text-gray-700">{review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
