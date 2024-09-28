// components/Testimonials.tsx
import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    feedback:
      "Sakhi has the best collection of clothes. The delivery was fast, and the quality exceeded my expectations!",
    imageUrl: "/woman-user-circle-black-icon.png",
  },
  {
    name: "John Smith",
    feedback:
      "Absolutely loved the shopping experience! The filters made it so easy to find exactly what I wanted.",
    imageUrl: "/woman-icon.png",
  },
  {
    name: "Emily Davis",
    feedback:
      "Great customer support and amazing collection! I will definitely recommend Sakhi to my friends.",
    imageUrl: "/businesswoman-icon.png",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-center mt-2 italic">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
