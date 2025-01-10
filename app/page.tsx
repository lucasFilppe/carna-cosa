import dynamic from "next/dynamic";

// Importações dinâmicas dos componentes
const Blocos = dynamic(() => import("./blocos/page"));
const Pacotes = dynamic(() => import("./pacotes/page"));
const Festas = dynamic(() => import("./festas/page"));
const Fotos = dynamic(() => import("./fotos/page"));
const Vendedores = dynamic(() => import("./vendedores/page"));
const Excursoes = dynamic(() => import("./excursoes/page"));
const Informacoes = dynamic(() => import("./informacoes/page"));

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-white font-geist pt-10">
        {/* Ajuste a margem conforme necessário */}
        {/*<NavBar />*/}

        {/* Seção Início */}
        <section id="inicial" className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Coluna do Carrossel */}
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Adicione seu carrossel aqui */}
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

        {/* Componentes carregados dinamicamente */}
        <Blocos />
        <Pacotes />
        <Festas />
        <Fotos />
        <Vendedores />
        <Excursoes />
        <Informacoes />
      </div>
    </>
  );
}

