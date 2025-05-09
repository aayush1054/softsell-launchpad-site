
import React from 'react';
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
  return (
    <section id="how-it-works" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses simple and profitable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 right-0 translate-x-1/2 text-3xl text-muted-foreground">
                  →
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
