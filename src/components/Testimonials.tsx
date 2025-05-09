
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses of all sizes to maximize the value of their software assets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <span className="absolute -top-2 -left-2 text-6xl text-primary opacity-20">"</span>
                    <p className="relative text-lg">{testimonial.quote}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
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
