//import NavBar from "./components/NavBar";

import Carousel from "./components/Carrocel";
import Blocos from "./blocos/page";
import Pacotes from "./pacotes/page";
import Festas from "./festas/page";
import Fotos from "./fotos/page";
import Vendedores from "./vendedores/page";

//import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] pt-[10px] min-h-screen bg-gray-white  flex items-center">       
        {/* Ajuste a margem conforme necessário */}
        {/*<NavBar />*/}

        {/* Seção Início */}

        <section
          id="Início"

        >
          <div className="container mx-auto flex flex-col md:flex-row">
            {/* Coluna do Carrossel */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Carousel />
            </div>

            {/* Coluna do Texto */}
            <div className="w-full md:w-1/2 p-5">
              <h1 className="text-4xl font-bold text-center md:text-left text-customBlue pt-[16px] mb-4">
                Venha viver a magia do Carnaval de Ouro Preto!
              </h1>

                <p className="mb-4 text-white">
                  Prepare-se para mergulhar em um dos carnavais mais incríveis e
                  tradicionais do Brasil! Em meio às ladeiras históricas,
                  casarios coloniais e o som contagiante das baterias, Ouro
                  Preto se transforma em um palco vibrante de cultura, folia e
                  alegria
                </p>
                <p className="mb-4 text-white">
                  Aqui, o passado e o presente se encontram em uma explosão de
                  cores, fantasias e música. Dos blocos caricatos aos grandes
                  desfiles, cada canto da cidade pulsa com energia, diversidade
                  e a hospitalidade única de quem sabe fazer festa como ninguém.
                </p>
                <p className="mb-4 text-white">
                  Não importa se você busca a emoção dos blocos de rua, os shows
                  ao vivo ou a vibe descontraída das repúblicas: Ouro Preto tem
                  o carnaval perfeito para você.
                </p>
                <p className="mb-4 text-white">
                  Reúna os amigos, escolha sua fantasia e venha escrever
                  momentos inesquecíveis no destino mais charmoso e animado do
                  Brasil. Ouro Preto espera por você! 🎭🎶💃
                </p>
            </div>
          </div>
        </section>

        <Blocos />
        <Pacotes />
        <Festas />
        <Fotos />
        <Vendedores />
      </div>
    </>
  );
}
