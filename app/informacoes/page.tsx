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
      </main>
    </>
  );
};

export default Informacoes;
