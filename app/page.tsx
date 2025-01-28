"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import ConfettiEffect from "./components/ConfetttiEffect/index";
import Excursions from "./excursoes/page";

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
        <ConfettiEffect />
        {/* Ajuste a margem conforme necessário */}
        {/*<NavBar />*/}

        {/* Seção Início */}
        <section id="inicial" className=" p-5 flex flex-col items-center">
          {/* Coluna do Texto */}
          <div className="w-full max-w-lg text-center">
            <p className="text-gray-100 text- leading-relaxed mb-6">
              O Carnaval de Ouro preto
              <span className="font-bold text-customBlue">
                {" "}
                na República Cosa Nostra
              </span>
              , você aproveita{" "}
              <span className="font-bold text-customBlue">
                5 dias de hospedagem{" "}
              </span>
              em uma localização privilegiada, com todo o conforto e estrutura
              que você merece para curtir o{" "}
              <span className="font-bold text-customBlue">
                carnaval universitário
              </span>{" "}
              mais famoso do Brasil. 🥳
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p className="list-disc list-inside text-gray text-sm leading-relaxed mb-4">
              Mais de{" "}
              <span className="font-bold text-customBlue">600 foliões</span> já
              tiveram uma experiência incrível em 2024. E você? Está pronto
              para:
            </p>
            <ul className="list-disc list-inside text-gray text-sm mb-4">
              <li>
                <span className="font-bold text-customBlue">OPEN BAR F#DA</span>{" "}
                durante todos os dias de folia 🍹🍺;
              </li>
              <li>
                Acesso garantido aos{" "}
                <span className="font-bold text-customBlue">
                  4 maiores blocos
                </span>{" "}
                de Ouro Preto 🎭;
              </li>
              <li>
                Conectar-se com a vibe autêntica e contagiante do{" "}
                <span className="font-bold text-customBlue">
                  carnaval universitário
                </span>{" "}
                🎓.
              </li>
            </ul>
            <p className="text-gray font-semibold text-lg">
              Garanta sua vaga e venha viver essa festa épica com a gente! 💃🕺
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
                style={{ height: "400px", width: "100%" }} // Define altura e largura específicas
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
        <Excursions />
        <Informacoes />
      </div>
    </>
  );
}
