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
      </div>
    </>
  );
}
