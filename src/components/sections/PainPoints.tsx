import React from 'react';
import { CircleDollarSign, Ghost, Calendar, ShieldAlert, Wrench } from 'lucide-react';

const painPoints = [
  {
    icon: <CircleDollarSign size={40} className="text-primary" />,
    title: "Смета постоянно растёт",
    description: "Изначальная сумма увеличивается в процессе из-за «скрытых» расходов"
  },
  {
    icon: <Ghost size={40} className="text-primary" />,
    title: "Строители пропадают",
    description: "Взяли предоплату и исчезли, оставив вас с недостроем"
  },
  {
    icon: <Calendar size={40} className="text-primary" />,
    title: "Стройка длится годами",
    description: "Обещали полгода, прошло два года, а переехать всё ещё нельзя"
  },
  {
    icon: <ShieldAlert size={40} className="text-primary" />,
    title: "Никто не несёт ответственности",
    description: "Разные бригады кивают друг на друга при появлении проблем"
  },
  {
    icon: <Wrench size={40} className="text-primary" />,
    title: "Постоянные переделки",
    description: "То крыша течёт, то стены трескаются через пару месяцев"
  }
];

const PainPoints = () => {
  return (
    <section id="pain" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
            Почему строительство дома часто превращается в стресс
          </h2>
          <p className="text-lg text-gray-600">
            Мы построили десятки домов и точно знаем, как избежать всех этих проблем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <blockquote className="italic text-xl text-secondary font-medium border-l-4 border-primary pl-6 py-2">
            «Мы построили десятки домов и точно знаем, как избежать всех этих проблем»
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
