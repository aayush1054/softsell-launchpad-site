
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50/50 to-white dark:from-gray-900 dark:to-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>
      
      <div className="container-custom section-padding flex flex-col items-center text-center relative z-10">
        <div className="animate-fade-in mx-auto max-w-3xl space-y-6">
          <div className="inline-block rounded-full bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-1.5 text-sm font-medium text-blue-800 shadow-sm dark:bg-blue-900/30 dark:text-blue-300">
            Software License Resale Simplified
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Turn Unused Software <span className="text-gradient">Into Cash</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            SoftSell helps businesses recover value from unused software licenses. 
            Our platform makes selling software licenses quick, secure, and profitable.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-full px-8 shadow-md hover:shadow-glow transition-all">
              Sell My Licenses
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#how-it-works" className="flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll down">
            <span>Discover How</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
