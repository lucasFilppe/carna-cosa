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
              O Carnaval de Ouro Preto é uma experiência única, repleta de
              energia e tradição! E a <span className="font-bold text-customBlue">República Cosa Nostra </span> oferece 5 dias de
              <span className="font-bold text-customBlue"> hospedagem </span>em localização privilegiada e com todos os confortos e
              amenidades pra você sentir a verdadeira vibe do <span className="font-bold text-customBlue">carnaval universitário </span>
              mais famoso do Brasil! Em 2024, mais de 600 pessoas
              tiveram a experiência surreal que os nossos pacotes oferecem,
              podendo desfrutar de um <span className="font-bold text-customBlue">OPEN BAR F#DA</span> durante todo o carnaval,
              além dos <span className="font-bold text-customBlue"> 4 maiores blocos </span> de Ouro Preto.
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

