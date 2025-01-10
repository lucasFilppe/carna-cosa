import Head from "next/head";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";

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
        <h1 className="text-4xl sm:text-2xl font-bold mt-5 mb-5 flex items-center justify-center text-center text-customBlue">
            Excursoẽs
          </h1>
        <section id="excursoes" className="mt-20 flex justify-center">
          
          <div className="flex flex-col items-center gap-4">
            {/* Altere flex para flex-col para empilhar os itens verticalmente */}
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-4xl font-semibold text-gray-900 dark:text-white">
                  Mariana
                </span>
                <span className="text-4xl font-normal text-gray-500 dark:text-gray-400">
                  <IoLocationOutline />
                </span>
              </div>
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
              >
                <a
                  href="https://wa.me/5531999119767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-bold rounded p-2 transition-transform duration-300 hover:scale-105 hover:bg-green-500 hover:text-white"
                >
                  <FaWhatsappSquare className="w-12 h-12 text-green-400 transition-colors duration-300 hover:text-green-600" />
                </a>
              </button>
            </div>

            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-4xl font-semibold text-gray-900 dark:text-white">
                  Viçosa
                </span>
                <span className="text-4xl font-normal text-gray-500 dark:text-gray-400">
                  <IoLocationOutline />
                </span>
              </div>
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
              >
                <a
                  href="https://wa.me/5531999119767"
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

export default Excursoes;
