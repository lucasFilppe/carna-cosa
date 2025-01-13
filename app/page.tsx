"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

// Importações dinâmicas dos componentes
const Blocos = dynamic(() => import("./blocos/page"));
const Pacotes = dynamic(() => import("./pacotes/page"));
const Festas = dynamic(() => import("./festas/page"));
const Fotos = dynamic(() => import("./fotos/page"));
const Vendedores = dynamic(() => import("./vendedores/page"));
const Informacoes = dynamic(() => import("./informacoes/page"));

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
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
              "Carnaval de Ouro Preto: A Experiência Universitária que Você
              Nunca Esquecerá!"
            </h1>
            <p className="text-gray-100 text-sm leading-relaxed mb-6">
              O{" "}
              <span className="font-bold text-customBlue">
                Carnaval de Ouro Preto
              </span>{" "}
              é uma experiência <span className="italic">inesquecível</span>,
              repleta de energia, cultura e tradição! Oferecemos{" "}
              <span className="font-bold text-customBlue">5 dias de hospedagem</span> no coração
              do carnaval universitário, em uma localização privilegiada, que
              permite vivenciar como nunca antes a vibração única desse evento
              ouro-pretano. No ano passado, mais de{" "}
              <span className="font-bold text-customBlue">600 pessoas </span>
              participaram do nosso pacote republicano e se encantaram com essa
              vivência extraordinária. Prepare-se para um{" "}
              <span className="uppercase font-semibold text-customBlue">
              OPEN BAR incrível
              </span>
              {" "}durante todos os dias de folia e para curtir os
              <span className="font-bold text-customBlue">
                {" "}
                quatro maiores blocos de Ouro Preto
              </span>
              . Venha viver um carnaval universitário que ficará marcado para
              sempre na sua memória!
            </p>
          </div>

          {/* Coluna do Vídeo */}
          <div className="flex justify-center mt-3">
            <div className="relative w-full max-w-2xl">
              <video
                ref={videoRef}
                className="rounded-lg shadow-lg cursor-pointer"
                autoPlay
                muted
                loop
                controls
                onClick={handleVideoClick}
                style={{ height: "620px", width: "100%" }} // Define altura e largura específicas
              >
                <source src="/videos/after-movie3.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
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
