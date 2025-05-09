
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50/50 to-white dark:from-gray-900 dark:to-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-green-300/10 blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-purple-300/10 blur-3xl animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
        
        {/* Added animated decorations */}
        <div className="absolute top-1/3 right-1/3 h-20 w-20 rounded-full bg-yellow-300/10 blur-2xl animate-bounce-soft" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 h-16 w-16 rounded-full bg-pink-300/10 blur-2xl animate-bounce-soft" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-20 left-20 h-10 w-10 rounded-full bg-blue-300/20 blur-sm animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 h-10 w-10 rounded-full bg-purple-300/20 blur-sm animate-rotate-bounce"></div>
      </div>
      
      <div className="container-custom section-padding flex flex-col items-center text-center relative z-10">
        <div className="animate-blur-in mx-auto max-w-3xl space-y-6">
          <div className="inline-block rounded-full bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-1.5 text-sm font-medium text-blue-800 shadow-sm dark:bg-blue-900/30 dark:text-blue-300 animate-fade-in rotating-border">
            <span className="relative z-10 mix-blend-multiply dark:mix-blend-normal">Software License Resale Simplified</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Turn Unused Software <span className="text-gradient animate-gradient relative inline-block">
              Into Cash
              <span className="absolute inset-0 bg-blue-100/30 blur-sm rounded-lg animate-pulse-soft -z-10"></span>
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl animate-slide-in" style={{ animationDelay: '0.4s' }}>
            SoftSell helps businesses recover value from unused software licenses. 
            Our platform makes selling software licenses quick, secure, and profitable.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="rounded-full px-8 shadow-md hover:shadow-glow transition-all btn-pulse relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="relative z-10">Sell My Licenses</span>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover-lift relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100/50 to-blue-200/50 dark:from-blue-900/20 dark:to-blue-800/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="relative z-10">Learn More</span>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
          <a href="#how-it-works" className="flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll down">
            <span className="animate-bounce-soft">Discover How</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
