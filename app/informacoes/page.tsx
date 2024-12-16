"use client";

import Head from "next/head";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qual é a faixa etária permitida?",
    answer: "Por se tratar de um evento 100% Open Bar, só é permitida a entrada de maiores de 18 anos, sem exceções.",
  },
  {
    question: "Qual é a data do evento?",
    answer: "O evento acontecerá entre os dias 03 e 04 de janeiro de 2025.",
  },
  {
    question: "Onde será o evento?",
    answer: "Local a definir",
  },
  {
    question: "Há estacionamento disponível?",
    answer: "Sim, haverá estacionamento próximo ao local do evento.",
  },
  {
    question: "Os ingressos são reembolsáveis?",
    answer: "Os ingressos não são reembolsáveis, mas podem ser transferidos.",
  },
];

const Informacoes = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Head>
        <title>Informações sobre o Carnaval</title>
        <meta
          name="description"
          content="Saiba todas as informações importantes para curtir o carnaval com segurança e diversão."
        />
      </Head>
      <main>
        <section id="faq" className="py-12 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-customBlue">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-customBlue flex justify-between items-center text-lg font-semibold text-left focus:outline-none"
                  >
                    {item.question}
                    <span
                      className={`ml-2 transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {activeIndex === index && (
                    <p className="mt-2 text-gray-700">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
                {/* Footer */}
                <div className="bg-black">
          <footer className="w-full flex flex-col items-center text-center text-surface text-white">
            <div className="container px-6 pt-6">
              <div className="mb-6 flex justify-center space-x-2">
                {/* Ícone do Facebook */}
                <a
                  href="#!"
                  className="rounded-full bg-[#3b5998] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                    className="h-5 w-5"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </a>

                {/* Ícone do Twitter */}
                <a
                  href="#!"
                  className="rounded-full bg-[#55acee] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="h-5 w-5"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>

                {/* Ícone do Google */}
                <a
                  href="#!"
                  className="rounded-full bg-[#dd4b39] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 488 512"
                    className="h-5 w-5"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </a>

                {/* Ícone do Instagram */}
                <a
                  href="https://www.instagram.com/carnacosa/"
                  target="_blank"
                  className="rounded-full bg-[#ac2bac] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>

                {/* Ícone do Google Maps */}
                <a
                  href="https://www.google.com/maps/place/Rep%C3%BAblica+Cosa+Nostra/@-20.39723,-43.514639,2469m/data=!3m1!1e3!4m6!3m5!1s0xa40af24d93ab93:0x58921f507eba6bb2!8m2!3d-20.3972305!4d-43.5146389!16s%2Fg%2F11g_qs9ff?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="rounded-full bg-[#dd4b39] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 384 512"
                    className="h-5 w-5"
                  >
                    <path d="M168 0C75.1 0 0 75.1 0 168c0 87.3 96.3 211.5 149.6 276.6 6.2 7.7 17.7 7.7 23.9 0C287.7 379.5 384 255.3 384 168 384 75.1 308.9 0 216 0H168zm.7 224c-32.3 0-58.7-26.4-58.7-58.7s26.4-58.7 58.7-58.7 58.7 26.4 58.7 58.7-26.4 58.7-58.7 58.7z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-4 text-center text-white">
              © 2024 Copyright:{" "}
              <a href="https://tw-elements.com/" className="text-white">
                Lucas Filipe
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Informacoes;
