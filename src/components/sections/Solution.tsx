import React from 'react';
import { FileText, CreditCard, Award, Eye } from 'lucide-react';

const principles = [
  {
    icon: <FileText size={48} className="text-primary" />,
    title: "Прозрачная смета",
    description: "Вы заранее знаете стоимость строительства — без скрытых расходов и сюрпризов"
  },
  {
    icon: <CreditCard size={48} className="text-primary" />,
    title: "Поэтапная оплата",
    description: "Оплачиваете только выполненные работы — деньги под вашим контролем"
  },
  {
    icon: <Award size={48} className="text-primary" />,
    title: "Опыт 14 лет",
    description: "Знаем все нюансы строительства и умеем избегать типичных ошибок"
  },
  {
    icon: <Eye size={48} className="text-primary" />,
    title: "Показываем реальные дома",
    description: "Вы можете увидеть результат своими глазами до начала работ"
  }
];

const Solution = () => {
  return (
    <section id="solution" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
            Мы сделали строительство дома понятным и контролируемым
          </h2>
          <p className="text-lg text-gray-600">
            Наши принципы работы позволяют вам не переживать о результате.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all text-center"
            >
              <div className="flex justify-center mb-6">{principle.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-4">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
