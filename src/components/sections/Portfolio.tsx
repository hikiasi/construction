import React from 'react';
import { Camera, Calendar, MapPin, Maximize } from 'lucide-react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000",
    title: "Дом 120 м², черновой ключ",
    area: "120 м²",
    type: "Черновой ключ",
    period: "2 месяца",
    location: "Калининградская область",
  },
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",
    title: "Коттедж 180 м², серый ключ",
    area: "180 м²",
    type: "Серый ключ",
    period: "3.5 месяца",
    location: "Зеленоградск",
  },
  {
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1000",
    title: "Дачный дом 85 м²",
    area: "85 м²",
    type: "Полный цикл",
    period: "1.5 месяца",
    location: "Светлогорск",
  },
  {
    image: "https://images.unsplash.com/photo-1513584684374-8bdb7483fe8f?auto=format&fit=crop&q=80&w=1000",
    title: "Дом с гаражом 150 м²",
    area: "150 м²",
    type: "Черновой ключ",
    period: "2.5 месяца",
    location: "Гурьевск",
  },
  {
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1000",
    title: "Компактный дом 100 м²",
    area: "100 м²",
    type: "Серый ключ",
    period: "2 месяца",
    location: "Пионерский",
  },
  {
    image: "https://images.unsplash.com/photo-1449156003053-c30c3b9c5931?auto=format&fit=crop&q=80&w=1000",
    title: "Загородный коттедж 220 м²",
    area: "220 м²",
    type: "Полный цикл",
    period: "4 месяца",
    location: "Калининградская область",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
            Посмотрите дома, которые мы уже построили
          </h2>
          <p className="text-lg text-gray-600">
            Каждый объект — результат честной работы и профессионального подхода.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  {project.period}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary mb-6 leading-tight">{project.title}</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Maximize size={16} className="mr-2 text-primary" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span>{project.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 col-span-2">
                    <MapPin size={16} className="mr-2 text-primary" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#cta"
            className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-md font-bold text-lg transition-all active:scale-95 inline-flex items-center"
          >
            <Camera className="mr-3" size={24} />
            Пригласим посмотреть готовые дома лично
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
