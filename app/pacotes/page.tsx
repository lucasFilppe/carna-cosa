import Head from 'next/head';
import PacoteCard from '../components/PacoteCard';
import { Pacote } from '../types/Pacote';

const Pacotes = () => {
    const pacotes: Pacote[] = [
        {
          titulo: "Pacote VIP",
          tipo: "Blocos na pista",
          items: [
            { emoji: "⚰", text: "Abadá :: Bloco do Caixão (Pista)" },
            { emoji: "🦐", text: "Abadá :: Bloco Cabrobró (Pista)" },
            { emoji: "🦀", text: "Abadá :: Bloco da Praia (Pista)" },
            { emoji: "🌵", text: "Abadá :: Bloco Chapado (Pista)" },
          ],
        },
        {
          titulo: "Pacote PREMIUM",
          tipo: "Blocos na pista e camarote",
          items: [
            { emoji: "⚰", text: "Abadá :: Bloco do Caixão (Camarote)" },
            { emoji: "🦐", text: "Abadá :: Bloco Cabrobró (Camarote)" },
            { emoji: "🦀", text: "Abadá :: Bloco da Praia (Pista)" },
            { emoji: "🌵", text: "Abadá :: Bloco Chapado (Pista)" },
          ],
        },
        {
          titulo: "Pacote ELITE",
          tipo: "Blocos no camarote",
          items: [
            { emoji: "⚰", text: "Abadá :: Bloco do Caixão (Camarote)" },
            { emoji: "🦐", text: "Abadá :: Bloco Cabrobró (Camarote)" },
            { emoji: "🦀", text: "Abadá :: Bloco da Praia (Camarote)" },
            { emoji: "🌵", text: "Abadá :: Bloco Chapado (Camarote)" },
          ],
        },
      ];
  return (
    <>
      <Head>
        <title>Pacotes de Carnaval</title>
        <meta name="description" content="Conheça os pacotes especiais disponíveis para o carnaval e aproveite as melhores ofertas." />
      </Head>
      <main>
        {/* Seção Pacotes */}
            <section
          id="Pacotes"
          className="min-h-screen flex flex-col justify-center items-center bg-gray-100 m-5"
        >
          <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 flex items-center justify-center text-center text-customBlue">
              Todos os Pacotes Incluem:
            </h1>
            <div className="max-w-4xl mx-auto mb-10">
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>🏠 5 dias de Hospedagem com almoço</li>
                <li>🍻 24h de Open Bar durante todos os dias</li>
                <li>🎭 6 Festas exclusivas</li>
                <li>🌟 Acesso aos 4 maiores blocos de Ouro Preto</li>
                <li>👮🏻 Assistência 24h - Equipe de segurança e limpeza</li>
                <li>👓 Kit Folia - Brindes personalizados</li>
              </ul>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pacotes.map((pacote, index) => (
                <PacoteCard key={index} {...pacote} />
              ))}
            </div>

            {/* Botão de Comprar Pacote */}
            <div className="max-w-4xl mx-auto mt-10 text-center">
              <button className="bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
                <a
                  href="https://wa.me/5531999119767"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar pacote
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pacotes;
