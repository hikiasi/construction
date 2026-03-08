"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-secondary font-heading font-bold text-xl md:text-2xl">
            СТРОЙКА<span className="text-primary">БЕЗ</span>СТРЕССА
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-secondary hover:text-primary transition-colors font-medium">Услуги</a>
          <a href="#portfolio" className="text-secondary hover:text-primary transition-colors font-medium">Портфолио</a>
          <a href="#reviews" className="text-secondary hover:text-primary transition-colors font-medium">Отзывы</a>
          <div className="flex items-center text-secondary font-bold">
            <Phone size={18} className="mr-2 text-primary" />
            <a href="tel:+70000000000" className="hover:text-primary transition-colors">+7 (000) 000-00-00</a>
          </div>
          <a
            href="#cta"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Оставить заявку
          </a>
        </nav>

        <button
          className="md:hidden text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button
          className="absolute top-4 right-4 text-secondary"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <a href="#services" className="text-2xl font-heading font-bold" onClick={() => setIsMenuOpen(false)}>Услуги</a>
        <a href="#portfolio" className="text-2xl font-heading font-bold" onClick={() => setIsMenuOpen(false)}>Портфолио</a>
        <a href="#reviews" className="text-2xl font-heading font-bold" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
        <div className="flex items-center text-xl font-bold">
          <Phone size={24} className="mr-2 text-primary" />
          <a href="tel:+70000000000">+7 (000) 000-00-00</a>
        </div>
        <a
          href="#cta"
          className="bg-primary text-white px-8 py-3 rounded-md font-bold text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
};

export default Header;
