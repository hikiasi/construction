import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto py-24 px-4 max-w-4xl">
        <h1 className="text-3xl font-heading font-bold mb-8">Политика конфиденциальности</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">1. Общие положения</h2>
            <p>
              Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые администрацией сайта «Стройка без стресса».
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">2. Состав собираемых данных</h2>
            <p>
              Мы собираем только те данные, которые необходимы для связи с вами и подготовки коммерческого предложения:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Имя;</li>
              <li>Номер телефона;</li>
              <li>Адрес электронной почты (опционально).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">3. Цели обработки данных</h2>
            <p>
              Ваши данные используются исключительно для:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Предоставления консультаций по услугам строительства;</li>
              <li>Расчета стоимости работ и материалов;</li>
              <li>Организации выезда специалиста на объект.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">4. Защита данных</h2>
            <p>
              Мы обязуемся не передавать ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных действующим законодательством. Мы принимаем все необходимые технические и организационные меры для защиты вашей информации от несанкционированного доступа.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">5. Согласие на обработку</h2>
            <p>
              Оставляя заявку на сайте, вы подтверждаете свое согласие с условиями настоящей Политики конфиденциальности.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
