
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { DollarSign, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-950/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container-custom flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold">SoftSell</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#how-it-works" className="transition-colors hover:text-primary py-2">
            How It Works
          </a>
          <a href="#why-choose-us" className="transition-colors hover:text-primary py-2">
            Why Choose Us
          </a>
          <a href="#testimonials" className="transition-colors hover:text-primary py-2">
            Testimonials
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full px-6">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 shadow-md p-4 border-t">
          <div className="flex flex-col space-y-4 text-center">
            <a 
              href="#how-it-works" 
              className="py-3 px-4 hover:bg-blue-50 dark:hover:bg-gray-900 rounded-lg"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="py-3 px-4 hover:bg-blue-50 dark:hover:bg-gray-900 rounded-lg"
              onClick={toggleMenu}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="py-3 px-4 hover:bg-blue-50 dark:hover:bg-gray-900 rounded-lg"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <Button 
              asChild 
              className="w-full rounded-lg" 
              onClick={toggleMenu}
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
