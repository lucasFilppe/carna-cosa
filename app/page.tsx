//import NavBar from "./components/NavBar";

import Carousel from "./components/Carrocel";
import Blocos from "./blocos/page";
import Pacotes from "./pacotes/page";
import Festas from "./festas/page";
import Fotos from "./fotos/page";
import Vendedores from "./vendedores/page";
import Informacoes from "./informacoes/page";
//import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] pt-20">
        {/* Ajuste a margem conforme necessário */}
        {/*<NavBar />*/}

        {/* Seção Início */}

        <section
          id="Início"
          className="min-h-screen bg-gray-100 m-5 flex items-center"
        >
          <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4 py-8">
            {/* Coluna do Carrossel */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Carousel />
            </div>

            {/* Coluna do Texto */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold text-center md:text-left text-customBlue mb-6">
                Carnaval em Ouro Preto: Tradição e Alegria no Coração de Minas
                Gerais
              </h1>

              <section className="text-lg leading-relaxed text-gray-700 mb-8">
                <p className="mb-4">
                  O Carnaval de Ouro Preto é um dos eventos mais aguardados e
                  vibrantes do Brasil, atraindo milhares de foliões para a
                  charmosa cidade histórica, que é Patrimônio Cultural da
                  Humanidade.
                </p>
                <p className="mb-4">
                  Ouro Preto é conhecida por seu Carnaval universitário,
                  impulsionado pelas repúblicas estudantis que organizam festas
                  e eventos para os visitantes. Entre os blocos mais famosos
                  estão o Bloco Cabrobró, o Bloco da Praia e o Bloco Chapado,
                  que garantem a festa ao longo de toda a semana de Carnaval.
                </p>
                <p className="mb-4">
                  O tradicional Bloco Zé Pereira dos Lacaios, fundado em 1867, é
                  um dos mais antigos do Brasil e simboliza o espírito cultural
                  de Ouro Preto. O bloco desfila com bonecos gigantes e
                  lanternas, uma atração imperdível que mantém viva a herança
                  cultural e folclórica da cidade.
                </p>
              </section>

              <section className="text-lg leading-relaxed text-gray-700 mb-8">
                <h2 className="text-2xl font-semibold text-customBlue mb-4">
                  Tradição e Cultura com o Bloco Zé Pereira dos Lacaios
                </h2>
                <p className="mb-4">
                  O Bloco Zé Pereira dos Lacaios é um dos principais símbolos do
                  Carnaval de Ouro Preto, sendo um dos blocos mais antigos do
                  Brasil e mantendo viva a cultura local com seus bonecos
                  gigantes e tradicionais lanternas.
                </p>
              </section>

              <section className="text-lg leading-relaxed text-gray-700 mb-8">
                <h2 className="text-2xl font-semibold text-customBlue mb-4">
                  Dicas para Aproveitar ao Máximo
                </h2>
                <p className="mb-4">
                  Planeje sua viagem com antecedência, pois a cidade recebe
                  milhares de visitantes durante o Carnaval. Reserve sua
                  hospedagem cedo, use roupas confortáveis para as ladeiras e
                  esteja preparado para uma experiência única de festa e
                  cultura.
                </p>
                <p>
                  Explore a magia do Carnaval de Ouro Preto e viva uma
                  experiência inesquecível, onde o antigo e o novo se encontram
                  nas ladeiras históricas desta cidade mineira.
                </p>
              </section>
            </div>
          </div>
        </section>

        <Blocos />
        <Pacotes />
        <Festas />
        <Fotos />
        <Vendedores />
        <Informacoes />
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
      </div>
    </>
  );
}
