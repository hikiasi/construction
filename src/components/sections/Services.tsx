import React from 'react';
import { Home, HomeIcon, Droplet, Zap, Paintbrush, Hammer } from 'lucide-react';

const services = [
  {
    icon: <HomeIcon size={32} className="text-primary" />,
    title: "🏠 Строительство домов",
    items: [
      "Коттеджи, дачи, пристройки",
      "Черновой ключ от 20 000 ₽/м²",
      "Серый ключ от 40 000 ₽/м²"
    ]
  },
  {
    icon: <Hammer size={32} className="text-primary" />,
    title: "🏚️ Кровельные работы",
    items: [
      "Монтаж новой кровли",
      "Ремонт и устранение протечек",
      "Все виды кровельных материалов"
    ]
  },
  {
    icon: <Droplet size={32} className="text-primary" />,
    title: "⚙️ Инженерные системы",
    items: [
      "Монтаж дренажных систем",
      "Устройство биосептиков",
      "Сантехнические работы"
    ]
  },
  {
    icon: <Zap size={32} className="text-primary" />,
    title: "🔌 Отделка и электрика",
    items: [
      "Электромонтажные работы",
      "Штукатурка машинным способом",
      "Сантехника под ключ"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
            Строим дома и делаем всё, что нужно для жизни в них
          </h2>
          <p className="text-lg text-gray-600">
            Вам не нужно искать разных подрядчиков на каждый этап работ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-6">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-secondary mb-2">Одна команда выполняет всё</h3>
            <p className="text-secondary/80 text-lg">Один договор, один ответственный подрядчик, полный контроль качества.</p>
          </div>
          <a
            href="#cta"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all active:scale-95"
          >
            Получить предложение
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
