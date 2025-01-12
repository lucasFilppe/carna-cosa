import dynamic from "next/dynamic";

// Importações dinâmicas dos componentes
const Blocos = dynamic(() => import("./blocos/page"));
const Pacotes = dynamic(() => import("./pacotes/page"));
const Festas = dynamic(() => import("./festas/page"));
const Fotos = dynamic(() => import("./fotos/page"));
const Vendedores = dynamic(() => import("./vendedores/page"));
const Informacoes = dynamic(() => import("./informacoes/page"));

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-white font-geist pt-10">
        {/* Ajuste a margem conforme necessário */}
        {/*<NavBar />*/}

        {/* Seção Início */}
        <section id="inicial" className=" p-5">
          {/* Coluna do Texto */}
          <div className="">
            <h1 className="text-xl font-bold text-center  text-customBlue mb-4">
              Carnaval em Ouro Preto: Blocos, Pacotes e Festas Imperdíveis
            </h1>
            <p className=" text-white">
              O Carnaval de Ouro Preto é uma experiência única, repleta de
              energia e tradição! 5 dias de Hospedagem no carnaval universitário
              de Ouro Preto, com localização privilegiada onde, diferente de
              qualquer outro lugar, você irá sentir a verdadeira energia de um
              carnaval universitário ouro-pretano! Uma experiência cultural
              única e inesquecível onde, carnaval passado, mais de 600 pessoas
              experimentaram a alegria do nosso pacote republicano e essa
              experiência é surreal. Com um OPEN BAR SURREAL, durante todo o
              carnaval e os 4 maiores Blocos de Ouro Preto.
            </p>
          </div>
        </section>

        {/* Componentes carregados dinamicamente */}
        <Blocos />
        <Pacotes />
        <Festas />
        <Fotos />
        <Vendedores />
        {/*<Excursoes />*/}
        <Informacoes />
      </div>
    </>
  );
}
