import React from 'react';

const Excursions = () => {
  return (
    <section id="/excursoes"className="bg-black py-12">
      <div className="bg-black container mx-auto px-4">
        <h2 className="text-3xl text-customBlue font-bold text-center mb-8">Excursões</h2>
        <p className="text-center text-lg mb-6 text-customBlue">
          Partidas disponíveis para Ouro Preto:
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-customBlue">Viçosa</h3>
            <p className="text-gray-600 text-sm">
              Partidas regulares com horários flexíveis. Reserve já sua vaga!
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-customBlue">Ponte Nova</h3>
            <p className="text-gray-600 text-sm">
              Uma ótima opção para chegar em Ouro Preto com segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excursions;
