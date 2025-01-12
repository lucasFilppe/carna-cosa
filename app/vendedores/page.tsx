import Head from 'next/head';
import { FaWhatsappSquare } from 'react-icons/fa';
import Image from "next/image";

const Vendedores = () => {
  return (
    <>
      <Head>
        <title>Vendedores de Carnaval</title>
        <meta name="description" content="Encontre informações sobre os vendedores e fornecedores do carnaval." />
      </Head>
      <main className='mt-10'>

        {/* Seção Vendedores Oficiais */}
        <section
          id="vendedores"
          
        >
          <h1 className="text-xl sm:text-2xl font-bold  mb-5 flex items-center justify-center text-center text-customBlue">
            Vendedores oficiais
          </h1>
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-md sm:max-w-3xl mx-auto">
            {/* Card de vendedor */}
            <div className="bg-black flex flex-col items-center p-4  rounded-lg min-h-[250px] w-full sm:w-[48%] ">
              <div className="relative w-full flex justify-center">
                <Image
                  src="/joaopaulomeneses.jpg"
                  alt="foto de João Paulo"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-customBlue">
                João Paulo
              </h2>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-customBlue">
                (Pacotes)
              </h2>
              <button className="flex items-center text-white font-bold rounded p-2 transition-transform duration-300 hover:scale-105 hover:bg-green-500 hover:text-white">
                <a
                  href="https://wa.me/5531972041833"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsappSquare className="w-12 h-12 text-green-400 transition-colors duration-300 hover:text-green-600" />
                </a>
              </button>
            </div>

            <div className="bg-black flex flex-col items-center p-4  rounded-lg min-h-[250px] w-full sm:w-[48%] ">
              <div className="relative w-full flex justify-center">
                <Image
                  src="/arkimedes.jpg"
                  alt="foto de João Paulo"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-customBlue">
                Pedro Marciano
              </h2>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-customBlue">
                (Festas)
              </h2>
              <button className="flex items-center text-white font-bold rounded p-2 transition-transform duration-300 hover:scale-105 hover:bg-green-500 hover:text-white">
                <a
                  href="https://wa.me/5531999119767"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsappSquare className="w-12 h-12 text-green-400 transition-colors duration-300 hover:text-green-600" />
                </a>
              </button>
            </div>

            

             {/* Card do próximo vendedor */}
             <div id="excursoes" className="bg-black flex flex-col items-center p-4  rounded-lg min-h-[250px] min-h-[250px] w-full sm:w-[48%] ">
              <div className="relative w-full flex justify-center">
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
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-customBlue">
                (Excursoẽs)
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

          </div>
        </section>
      </main>
    </>
  );
};

export default Vendedores;
