import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["600", "700"],
});

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Строительство домов под ключ | Стройка без стресса — от 20 000 ₽/м²",
  description: "Строим дома, коттеджи и дачи за 2 месяца по фиксированной смете. Опыт 14 лет, реальные объекты для просмотра. Бесплатная консультация и выезд.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${roboto.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
