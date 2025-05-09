
import React from 'react';
import { Shield, Star, Users, Handshake } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Secure Transactions",
    description: "End-to-end encryption and secure payment processing to protect your data and finances."
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Best Market Rates",
    description: "Our extensive network of buyers ensures you get the highest value for your licenses."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "5000+ Satisfied Clients",
    description: "Join thousands of businesses that have successfully recovered their software investments."
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Compliance Guaranteed",
    description: "All transfers follow legal compliance requirements for software license reselling."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer the most reliable and profitable way to resell your software licenses
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-2 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
