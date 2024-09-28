// components/FeaturesSection.tsx
import React from "react";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    title: "Fast Delivery",
    description: "Get your orders delivered quickly and on time, every time.",
    imageUrl: "/delivery-truck-icon.png", // Update the path to your image
  },
  {
    title: "Secure Payment",
    description: "Shop with confidence using our secure payment methods.",
    imageUrl: "/secure-icon.png", // Update the path to your image
  },
  {
    title: "Quality Products",
    description: "We offer the best quality products that meet your needs.",
    imageUrl: "/quality-badge-checkmark-icon.png", // Update the path to your image
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-orange-100 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="mb-4">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-26 h-14 mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
