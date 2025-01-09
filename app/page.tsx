import Blocos from "./blocos/page";
import Pacotes from "./pacotes/page";
import Festas from "./festas/page";
import Fotos from "./fotos/page";
import Vendedores from "./vendedores/page";
import Image from "@/node_modules/next/image";
import Carousel from "./components/Carrocel/index";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-white font-geist pt-10">
        {/* Ajuste a margem conforme necessário */}
        {/*<NavBar />*/}

        {/* Seção Início */}
        <section id="Início" className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Coluna do Carrossel */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Carousel />
            </div>

            {/* Coluna do Texto */}
            <div className="w-full md:w-1/2 p-5">
              <h1 className="text-4xl font-bold text-center md:text-left text-customBlue mb-4">
                Venha viver a magia do Carnaval de Ouro Preto!
              </h1>

              <p className="mb-4 text-white">
                Prepare-se para mergulhar em um dos carnavais mais incríveis e
                tradicionais do Brasil! Em meio às ladeiras históricas, casarios
                coloniais e o som contagiante das baterias, Ouro Preto se
                transforma em um palco vibrante de cultura, folia e alegria.
              </p>
              <p className="mb-4 text-white">
                Aqui, o passado e o presente se encontram em uma explosão de
                cores, fantasias e música. Dos blocos caricatos aos grandes
                desfiles, cada canto da cidade pulsa com energia, diversidade e
                a hospitalidade única de quem sabe fazer festa como ninguém.
              </p>
              <p className="mb-4 text-white">
                Não importa se você busca a emoção dos blocos de rua, os shows
                ao vivo ou a vibe descontraída das repúblicas: Ouro Preto tem o
                carnaval perfeito para você.
              </p>
              <p className="mb-4 text-white">
                Reúna os amigos, escolha sua fantasia e venha escrever momentos
                inesquecíveis no destino mais charmoso e animado do Brasil. Ouro
                Preto espera por você! 🎭🎶💃
              </p>
            </div>
          </div>
        </section>

        <Blocos />

        <Pacotes />
        <Festas />
        <Fotos />
        <Vendedores />
        <div className="w-full md:w-1/2 p-5">
          <section id="excursao">
            <div className="flex items-start gap-2.5">
              <Image
                className="rounded-full"
                src="/cosalogo.jpeg"
                alt="Jese image"
                width={8}
                height={8}
              />
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    11:46
                  </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                  That's awesome. I think our users will really appreciate the
                  improvements.
                </p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Delivered
                </span>
              </div>
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 4 15"
                >
                  <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </button>
              <div
                id="dropdownDots"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reply
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Forward
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Copy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
