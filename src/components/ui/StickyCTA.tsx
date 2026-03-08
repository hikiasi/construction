"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPos = window.scrollY;

      const scrollPercentage = (scrollPos / (scrollHeight - clientHeight)) * 100;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setIsVisible(true);
      } else {
        setIsVisible(scrollPercentage > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-500 md:bg-white/90 md:backdrop-blur-sm",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-secondary font-bold text-sm md:text-base">
            Готовы начать строительство без стресса?
          </p>
          <p className="text-gray-600 text-xs">
            Получите бесплатный расчет стоимости за 10 минут
          </p>
        </div>
        <a
          href="#cta"
          className="flex-1 md:flex-none bg-primary hover:bg-primary-dark text-white text-center py-3 px-6 rounded-md font-bold transition-all shadow-md active:scale-95"
        >
          Получить бесплатный расчет
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
