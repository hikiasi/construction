"use client";

import React, { useState } from 'react';
import { Send, Clock, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '' });
    }, 1500);
  };

  return (
    <section id="cta" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right z-0" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-8 leading-tight">
              Получите бесплатный расчёт стоимости строительства
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Оставьте заявку прямо сейчас, и мы подготовим для вас подробную смету, ответим на все вопросы и договоримся о выезде на участок.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary">
                  <Clock size={24} />
                </div>
                <p className="text-lg font-medium text-secondary">Ответим в течение 10 минут</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary">
                  <Phone size={24} />
                </div>
                <p className="text-lg font-medium text-secondary">Или позвоните нам: <a href="tel:+70000000000" className="text-primary hover:underline">+7 (000) 000-00-00</a></p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary">
                  <MapPin size={24} />
                </div>
                <p className="text-lg font-medium text-secondary">Бесплатный выезд на участок</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-xl">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Спасибо! Заявка получена</h3>
                  <p className="text-gray-600">Мы свяжемся с вами в течение 10 минут для уточнения деталей.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-primary font-bold hover:underline"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">Ваше имя</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Введите ваше имя"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-lg"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">Телефон</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-lg"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">Email (опционально)</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Для отправки расчёта стоимости"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-lg"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-xl font-bold text-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center disabled:bg-gray-400 disabled:shadow-none disabled:translate-y-0"
                  >
                    {isSubmitting ? "Отправка..." : "Получить бесплатный расчёт"}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
                    Консультация бесплатная и ни к чему не обязывает. <br /> Мы не передаём ваши данные третьим лицам.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
