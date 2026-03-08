import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary/70 z-10" />
        <Image
          src="/images/hero-house.png"
          alt="Построенный дом"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Строительство дома без стресса и сюрпризов
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Дом под ключ от 20 000 ₽/м². Покажем готовые дома и рассчитаем стоимость бесплатно.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 shrink-0" size={20} />
              <p className="text-lg">Вы заранее знаете реальную стоимость строительства</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 shrink-0" size={20} />
              <p className="text-lg">14 лет опыта и десятки построенных домов</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 shrink-0" size={20} />
              <p className="text-lg">Показываем реальные объекты, которые уже построили</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 shrink-0" size={20} />
              <p className="text-lg">Соблюдаем сроки строительства — дом за 2 месяца</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              Рассчитать стоимость дома
            </a>
            <a
              href="#portfolio"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all active:scale-95"
            >
              Посмотреть построенные дома
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
