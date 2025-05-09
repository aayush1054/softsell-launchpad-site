
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
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md -z-10 animate-glow"></div>
            <div className="relative z-10 transform transition-transform duration-300 hover:scale-110">
              <DollarSign className="h-7 w-7 text-primary animate-pulse-soft" />
            </div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 animate-gradient hover:text-shadow-glow transition-all duration-300">SoftSell</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {["how-it-works", "why-choose-us", "testimonials"].map((item, index) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="transition-all hover:text-primary py-2 underline-grow animate-slide-in relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span>{item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
              <span className="absolute inset-0 bg-blue-100/0 dark:bg-blue-900/0 rounded-lg group-hover:bg-blue-100/50 dark:group-hover:bg-blue-900/30 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></span>
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button asChild size="sm" className="rounded-full px-6 btn-glow relative overflow-hidden group">
            <a href="#contact">
              <span className="relative z-10">Get a Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden animate-fade-in relative" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="absolute inset-0 bg-blue-100/50 dark:bg-blue-900/30 rounded-full scale-0 hover:scale-150 transition-transform duration-300 opacity-0 hover:opacity-100"></div>
          <div className="relative z-10">
            {isMenuOpen ? 
              <X className="h-6 w-6 animate-rotate-bounce" /> : 
              <Menu className="h-6 w-6 animate-scale-in-out" />
            }
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 shadow-md border-t transition-all duration-500 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 text-center p-4">
          {["how-it-works", "why-choose-us", "testimonials"].map((item, index) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="py-3 px-4 hover:bg-blue-50 dark:hover:bg-gray-900 rounded-lg transition-all duration-300 animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={toggleMenu}
            >
              <span className="relative z-10">
                {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-500/70 to-blue-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
          <Button 
            asChild 
            className="w-full rounded-lg animate-slide-in-bottom hover:scale-[1.02] transition-all relative overflow-hidden group" 
            style={{ animationDelay: '0.3s' }}
            onClick={toggleMenu}
          >
            <a href="#contact">
              <span className="relative z-10">Get a Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
