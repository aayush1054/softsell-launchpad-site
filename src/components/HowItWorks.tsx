
import React, { useEffect, useRef } from 'react';
import { FileText, DollarSign, Check } from "lucide-react";

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Upload License",
    description: "Submit your software license details through our secure platform for a quick evaluation."
  },
  {
    icon: <Check className="h-10 w-10 text-primary" />,
    title: "Get Valuation",
    description: "Receive a competitive market valuation within 24 hours based on current demand."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Get Paid",
    description: "Accept our offer and get paid promptly via your preferred payment method."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Properly cast to HTMLElement before setting style property
          if (entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1';
          }
        }
      });
    }, { threshold: 0.1 });

    const stepElements = document.querySelectorAll('.step-item');
    stepElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="how-it-works" className="section-padding bg-white dark:bg-gray-950" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-blur-in">
          <span className="inline-block px-4 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4 animate-shimmer">Our Process</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 relative inline-block">
            How <span className="text-gradient animate-gradient">It Works</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300/0 via-blue-400/50 to-blue-300/0 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses simple and profitable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mt-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item relative flex flex-col items-center text-center p-8 rounded-2xl border bg-card hover:shadow-card transition-all duration-500 hover-lift card-hover-effect"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/30 shadow-md group-hover:shadow-xl animate-pulse-soft">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/50 to-blue-300/50 dark:from-blue-700/30 dark:to-blue-600/30 blur-sm animate-spin-slow"></div>
                <div className="relative z-10 animate-bounce-soft">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-10">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-32 right-0 translate-x-1/2 text-3xl text-primary/30 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="animate-slide-in">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}

              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-full transform origin-left transition-all duration-500 group-hover:w-full animate-shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
