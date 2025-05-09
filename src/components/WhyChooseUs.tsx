
import React, { useEffect } from 'react';
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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
            entry.target.style.opacity = '1';
          }, idx * 150);
        }
      });
    }, { threshold: 0.1 });

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      featureElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16 animate-blur-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose <span className="text-gradient animate-gradient">SoftSell</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer the most reliable and profitable way to resell your software licenses
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-start p-8 rounded-2xl border bg-card card-hover"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 shadow-inner">
                <div className="animate-spin-slow transform-gpu">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              <div className="h-1 w-20 bg-gradient-to-r from-primary/50 to-blue-300/50 mt-4 rounded-full transform origin-left transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
