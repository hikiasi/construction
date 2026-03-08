import React from 'react';
import { ShieldCheck, TrendingDown, Clock, Scale, Eye, Percent, Users, Award } from 'lucide-react';

const advantages = [
  {
    icon: <ShieldCheck size={40} className="text-primary" />,
    title: "14 лет опыта в строительстве",
    description: "Работаете с компанией, знающей все нюансы и умеющей избегать ошибок"
  },
  {
    icon: <TrendingDown size={40} className="text-primary" />,
    title: "Понятная стоимость строительства",
    description: "Дом от 20 000 ₽/м² — вы понимаете примерный бюджет заранее"
  },
  {
    icon: <Clock size={40} className="text-primary" />,
    title: "Дом за 2 месяца без долгостроя",
    description: "Соблюдаем сроки строительства, чтобы вы быстрее переехали в новый дом"
  },
  {
    icon: <Scale size={40} className="text-primary" />,
    title: "Честная смета и официальный договор",
    description: "Нет скрытых платежей и неприятных сюрпризов в процессе работ"
  },
  {
    icon: <Eye size={40} className="text-primary" />,
    title: "Смотрите реальные дома перед решением",
    description: "Видите качество наших работ своими глазами до заключения договора"
  },
  {
    icon: <Percent size={40} className="text-primary" />,
    title: "Помогаем снизить стоимость материалов",
    description: "Скидки от поставщиков позволяют вам существенно сэкономить на стройке"
  },
  {
    icon: <Users size={40} className="text-primary" />,
    title: "Один подрядчик отвечает за весь дом",
    description: "Не нужно искать разных специалистов — одна команда выполняет всё"
  },
  {
    icon: <Award size={40} className="text-primary" />,
    title: "Официальная гарантия на все работы",
    description: "Мы уверены в надёжности результата и несём за него ответственность"
  }
];

const Advantages = () => {
  return (
    <section id="why-us" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
            Почему нам доверяют строительство дома
          </h2>
          <p className="text-lg text-gray-600">
            Мы собрали лучшие практики, чтобы ваш переезд прошел как можно скорее.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="mb-6">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-4 leading-tight">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
