
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { DollarSign, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-950/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
    } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container-custom flex h-20 items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in">
          <div className="relative">
            <DollarSign className="h-7 w-7 text-primary animate-pulse-soft" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md -z-10 animate-glow"></div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 animate-gradient">SoftSell</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {["how-it-works", "why-choose-us", "testimonials"].map((item, index) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="transition-colors hover:text-primary py-2 underline-grow animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button asChild size="sm" className="rounded-full px-6 btn-glow relative overflow-hidden group">
            <a href="#contact">
              <span className="relative z-10">Get a Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden animate-fade-in" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 animate-spin-slow" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 shadow-md border-t transition-all duration-300 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 text-center p-4">
          {["how-it-works", "why-choose-us", "testimonials"].map((item, index) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="py-3 px-4 hover:bg-blue-50 dark:hover:bg-gray-900 rounded-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={toggleMenu}
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </a>
          ))}
          <Button 
            asChild 
            className="w-full rounded-lg animate-fade-in hover:scale-[1.02] transition-all" 
            style={{ animationDelay: '0.3s' }}
            onClick={toggleMenu}
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
