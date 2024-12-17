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
                Venha viver a magia do Carnaval de Ouro Preto!
              </h1>

              <section className="text-lg leading-relaxed text-gray-700 mb-8">
                <p className="mb-4">
                  Prepare-se para mergulhar em um dos carnavais mais incríveis e
                  tradicionais do Brasil! Em meio às ladeiras históricas,
                  casarios coloniais e o som contagiante das baterias, Ouro
                  Preto se transforma em um palco vibrante de cultura, folia e
                  alegria
                </p>
                <p className="mb-4">
                  Aqui, o passado e o presente se encontram em uma explosão de
                  cores, fantasias e música. Dos blocos caricatos aos grandes
                  desfiles, cada canto da cidade pulsa com energia, diversidade
                  e a hospitalidade única de quem sabe fazer festa como ninguém.
                </p>
                <p className="mb-4">
                  Não importa se você busca a emoção dos blocos de rua, os shows
                  ao vivo ou a vibe descontraída das repúblicas: Ouro Preto tem
                  o carnaval perfeito para você.
                </p>
                <p className="mb-4">
                  Reúna os amigos, escolha sua fantasia e venha escrever
                  momentos inesquecíveis no destino mais charmoso e animado do
                  Brasil. Ouro Preto espera por você! 🎭🎶💃
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
      </div>
    </>
  );
}
