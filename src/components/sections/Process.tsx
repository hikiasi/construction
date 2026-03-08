import React from 'react';
import { MousePointer2, Calculator, PencilLine, Construction } from 'lucide-react';

const steps = [
  {
    icon: <MousePointer2 size={32} className="text-white" />,
    title: "Шаг 1: Оставьте заявку",
    description: "Вы оставляете заявку на сайте или звоните нам. Мы уточняем ваши пожелания и договариваемся о консультации в удобное для вас время."
  },
  {
    icon: <Calculator size={32} className="text-white" />,
    title: "Шаг 2: Получите расчёт и смету",
    description: "Мы выезжаем на участок или консультируем дистанционно, обсуждаем проект и готовим понятную смету. Вы сразу видите реальную стоимость строительства."
  },
  {
    icon: <PencilLine size={32} className="text-white" />,
    title: "Шаг 3: Подписываем договор",
    description: "Фиксируем стоимость, этапы работ и точные сроки строительства. После этого начинается подготовка и закупка материалов по нашим скидочным ценам."
  },
  {
    icon: <Construction size={32} className="text-white" />,
    title: "Шаг 4: Строим и сдаём дом",
    description: "Наша команда выполняет все строительные работы. В результате вы получаете готовый дом точно в срок и принимаете его по договору."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
            Как проходит строительство вашего дома
          </h2>
          <p className="text-lg text-gray-600">
            Мы сделали процесс прозрачным и понятным на каждом этапе.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-primary/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-secondary group-hover:bg-primary rounded-full flex items-center justify-center mb-6 shadow-xl transition-all duration-300 relative">
                  {step.icon}
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 min-h-[56px] flex items-center">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
