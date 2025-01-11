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
        <section id="inicial" className="flex justify-center items-center p-5">
          <div className="">

            {/* Coluna do Texto */}
            <div className="w-full md:w-1/2 p-5">
              <h1 className="text-xl font-bold text-center  text-customBlue mb-4">
              Carnaval em Ouro Preto: Blocos, Pacotes e Festas Imperdíveis
              </h1>
              <p className=" text-white">
                O Carnaval de Ouro Preto é uma experiência única, repleta de
                energia e tradição! Descubra os blocos icônicos, com atrações
                incríveis que vão do samba ao funk, animando as ladeiras
                históricas. Confira também os pacotes exclusivos, que garantem
                acesso às melhores festas e comodidades, e explore uma
                programação intensa de festas memoráveis, onde a diversão não
                tem hora para acabar. Navegue pela página e planeje seu Carnaval
                perfeito! 🥳🎭
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
