
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
            // Properly cast to HTMLElement before setting style property
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
            }
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
    <section id="why-choose-us" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-green-400/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-300/5 blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-blur-in">
          <span className="inline-block px-4 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4 animate-shimmer">Why Us</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 relative inline-block">
            Why Choose <span className="text-gradient animate-gradient relative">SoftSell
              <span className="absolute inset-0 bg-blue-100/20 dark:bg-blue-900/20 blur-sm rounded-lg -z-10"></span>
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300/0 via-blue-400/50 to-blue-300/0 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer the most reliable and profitable way to resell your software licenses
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-start p-8 rounded-2xl border bg-card card-hover-effect group relative overflow-hidden"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 shadow-inner group-hover:shadow-inner-glow transition-all duration-300 relative">
                <div className="animate-spin-slow transform-gpu relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200/20 to-blue-300/20 dark:from-blue-700/20 dark:to-blue-600/20 blur-sm animate-pulse-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              <div className="h-1 w-20 bg-gradient-to-r from-primary/50 to-blue-300/50 mt-4 rounded-full transform origin-left transition-all duration-500 group-hover:w-full"></div>
              
              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-tl-3xl transform translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
