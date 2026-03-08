import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: "Алексей, Калининградская область",
    project: "Дом 120 м², черновой ключ",
    title: "Дом построили быстрее, чем мы ожидали",
    text: "Обращались за строительством дома. Понравилось, что сразу сделали понятную смету и всё объяснили по этапам. Работы шли без задержек, команда всегда была на связи. В итоге дом построили даже быстрее, чем мы рассчитывали. Результатом очень довольны.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Марина, Калининградская область",
    project: "Ремонт кровли",
    title: "Наконец-то сделали нормальную крышу",
    text: "Долго искали, кто сможет нормально переделать кровлю. До этого были постоянные протечки каждый сезон. Ребята всё осмотрели, предложили решение и сделали монтаж. После ремонта крыша пережила уже несколько сильных дождей — никаких проблем.",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Дмитрий, Калининградская область",
    project: "Строительство + кровля + инженерия",
    title: "Понравилось, что всё делает одна команда",
    text: "Строили дом и сразу заказывали кровлю и инженерные работы. Очень удобно, что всё делала одна команда. Не пришлось искать разных мастеров и контролировать каждого отдельно. Один договор, один ответственный человек — это сильно упрощает жизнь.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=200"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
            Что говорят клиенты, которые уже построили с нами
          </h2>
          <p className="text-lg text-gray-600">
            Реальные истории людей, воплотивших свою мечту.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary mr-1" />
                ))}
              </div>
              <Quote className="text-primary/20 mb-4" size={40} />
              <h4 className="text-xl font-bold text-secondary mb-4 leading-tight">{review.title}</h4>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">«{review.text}»</p>
              <div className="flex items-center pt-6 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
