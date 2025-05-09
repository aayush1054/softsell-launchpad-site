
import React from 'react';
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SoftSell</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#how-it-works" className="transition-colors hover:text-primary">
            How It Works
          </a>
          <a href="#why-choose-us" className="transition-colors hover:text-primary">
            Why Choose Us
          </a>
          <a href="#testimonials" className="transition-colors hover:text-primary">
            Testimonials
          </a>
        </nav>
        
        <div>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
