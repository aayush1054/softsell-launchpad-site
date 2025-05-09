
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
          entry.target.style.opacity = '1';
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How <span className="text-gradient animate-gradient">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses simple and profitable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mt-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item relative flex flex-col items-center text-center p-8 rounded-2xl border bg-card hover:shadow-card transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 shadow-md animate-pulse-soft">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-10">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-32 right-0 translate-x-1/2 text-3xl text-primary/30 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
