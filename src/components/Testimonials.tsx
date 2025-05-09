
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
          entry.target.style.opacity = '1';
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
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16 animate-blur-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our <span className="text-gradient animate-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses of all sizes to maximize the value of their software assets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="testimonial-card overflow-hidden border-none shadow-soft hover:shadow-card transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 dark:bg-blue-900/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                
                <div className="flex flex-col gap-6">
                  <div className="relative mb-2">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-1 -left-2" />
                    <p className="relative text-lg pl-6 italic">{testimonial.quote}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar className="h-14 w-14 ring-4 ring-primary/10 animate-pulse-soft">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-blue-300/20 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
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
