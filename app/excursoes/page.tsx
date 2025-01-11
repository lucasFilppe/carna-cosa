import Head from "next/head";

import { FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";

const Excursoes = () => {
  return (
    <>
      <Head>
        <title>Excursoẽs</title>
        <meta
          name="description"
          content="Veja os blocos de carnaval disponíveis para aproveitar."
        />
      </Head>
      <main className="mt-10">
        {/* Seção excursoes */}
        <h1 className="text-xl sm:text-2xl font-bold mt-5 mb-5 flex items-center justify-center text-center text-customBlue">
            Excursoẽs
          </h1>
        <section id="excursoes" className="mt-20 flex justify-center">
          
        <div className="bg-black flex flex-col items-center p-4 border-4 border-transparent hover:border-customBlue transition-all duration-300 rounded-lg min-h-[250px] min-h-[250px] w-full sm:w-[48%] mb-5">
              <div className="relative w-full flex justify-center mt-1">
                <Image
                  src="/lisinha.jpg"
                  alt="foto de Lucas Rodrigues"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-customBlue">
                Lucas Rodrigues
              </h2>
              <button className="flex items-center text-white font-bold rounded p-2 transition-transform duration-300 hover:scale-105 hover:bg-green-500 hover:text-white">
                <a
                  href="https://wa.me/5537998418715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-bold rounded p-2 transition-transform duration-300 hover:scale-105 hover:bg-green-500 hover:text-white"
                >
                  <FaWhatsappSquare className="w-12 h-12 text-green-400 transition-colors duration-300 hover:text-green-600" />
                </a>
              </button>
            </div>
        </section>
      </main>
    </>
  );
};

export default Excursoes;
