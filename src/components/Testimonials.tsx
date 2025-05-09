
import React, { useEffect } from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was quick and their valuation was better than we expected.",
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechGrowth Inc.",
    initials: "SJ"
  },
  {
    quote: "As we moved to cloud solutions, we had dozens of legacy licenses sitting unused. SoftSell made it incredibly easy to convert these assets back into capital we could reinvest.",
    name: "Michael Chen",
    role: "CTO",
    company: "Innovations Group",
    initials: "MC"
  }
];

const Testimonials = () => {
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

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      testimonialCards.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-yellow-200/10 dark:bg-yellow-700/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-200/10 dark:bg-blue-700/5 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-blur-in">
          <span className="inline-block px-4 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4 animate-shimmer">Testimonials</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 relative inline-block">
            What Our <span className="text-gradient animate-gradient">Customers Say</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300/0 via-blue-400/50 to-blue-300/0 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses of all sizes to maximize the value of their software assets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="testimonial-card overflow-hidden border-none shadow-soft hover:shadow-card transition-all duration-500 group card-hover-effect"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-100/50 via-blue-200/30 to-transparent dark:from-blue-900/20 dark:via-blue-800/10 dark:to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="flex flex-col gap-6">
                  <div className="relative mb-2">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-1 -left-2 group-hover:text-primary/40 transition-colors duration-300" />
                    <p className="relative text-lg pl-6 italic">{testimonial.quote}</p>
                    <div className="absolute -bottom-2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300/50 to-blue-500/50 dark:from-blue-700/50 dark:to-blue-500/50 blur-md scale-0 group-hover:scale-125 transition-transform duration-700"></div>
                      <Avatar className="h-14 w-14 ring-4 ring-primary/10 animate-pulse-soft relative z-10 group-hover:ring-primary/30 transition-all duration-500">
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-blue-300/20 text-primary font-semibold group-hover:from-primary/30 group-hover:to-blue-400/30 transition-colors duration-300">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
