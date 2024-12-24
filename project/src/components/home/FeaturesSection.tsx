import React from 'react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      title: "Verified Locations",
      description: "All our camping locations are verified and reviewed by our community"
    },
    {
      title: "Easy Booking",
      description: "Simple and secure booking process with instant confirmation"
    },
    {
      title: "24/7 Support",
      description: "Our support team is always here to help with your camping needs"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CampSpot?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}