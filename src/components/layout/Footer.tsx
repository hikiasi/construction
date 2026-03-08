import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-heading font-bold text-xl mb-4">
            СТРОЙКА<span className="text-primary">БЕЗ</span>СТРЕССА
          </div>
          <p className="text-gray-400 text-sm">
            Строительство домов, коттеджей и дач в Калининградской области.
            Профессиональный подход и гарантия качества.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Услуги</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#services" className="hover:text-primary transition-colors">Строительство домов</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Кровельные работы</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Инженерные системы</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Отделочные работы</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Контакты</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start">
              <Phone size={16} className="mr-2 text-primary shrink-0 mt-1" />
              <a href="tel:+70000000000" className="hover:text-primary">+7 (000) 000-00-00</a>
            </li>
            <li className="flex items-start">
              <Mail size={16} className="mr-2 text-primary shrink-0 mt-1" />
              <a href="mailto:info@stroyka-bez-stressa.ru" className="hover:text-primary">info@stroyka-bez-stressa.ru</a>
            </li>
            <li className="flex items-start">
              <MapPin size={16} className="mr-2 text-primary shrink-0 mt-1" />
              <span>г. Калининград, ул. Строительная, 1</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Режим работы</h4>
          <div className="flex items-start text-gray-400 text-sm mb-4">
            <Clock size={16} className="mr-2 text-primary shrink-0 mt-1" />
            <span>Пн-Пт: 09:00 — 19:00<br />Сб: 10:00 — 16:00</span>
          </div>
          <div className="pt-4 border-t border-gray-700">
            <a href="/privacy" className="text-xs text-gray-500 hover:text-gray-300">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} «Стройка без стресса». Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
