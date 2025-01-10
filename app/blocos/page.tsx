import Head from "next/head";
import Image from "next/image";

const Blocos = () => {
  return (
    <>
      <Head>
        <title>Blocos do Carnaval</title>
        <meta name="description" content="Veja as atrações dos blocos de carnaval." />
      </Head>
      <main>
        {/* Seção Blocos */}
        {[
          {
            title: "Bloco Caixão",
            imgSrc: "/bloco-caixao.jpg",
            attractions: [
              { src: "/filipe-amorim.png", alt: "Atração de Filipe Amorim", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO26JYqd" },
              { src: "/mc-daniel.png", alt: "Atração de Mc Daniel", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO47OcyR" },
              { src: "/kvsh.png", alt: "Atração de Kvsh", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1qBmXk" },
              { src: "/topo.png", alt: "DJ Topo", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0fyXlA" },
            ]
          },
          {
            title: "Bloco da Praia",
            imgSrc: "/bloco-praia.jpg", // Caminho da imagem do novo bloco
            attractions: [
              { src: "/jammil.png", alt: "Atração de jammil e uma noits", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO03C9AB" },
              { src: "/rick.png", alt: "Atração de Mc Rick", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KndXn" },
              { src: "/ig.png", alt: "Atração de Mc IG", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1nRZQG" },
              { src: "/gbr.png", alt: "DJ GBR", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0mapaw" },
              { src: "/chapeleiro.png", alt: "Atração de chapeleiro", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3oZvlT" },
            ]
          },
          {
            title: "Bloco da Cabróbro",
            imgSrc: "/bloco-cabrobro.jpg", // Caminho da imagem do novo bloco
            attractions: [
              { src: "/filipe-ret.png", alt: "Atração de Filipe Ret", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4iJL4k" },
              { src: "/hariel.png", alt: "Atração de Hariel", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0aGty0" },
              { src: "/akatu.png", alt: "Atração de Akatu", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0SMTSM" },
              { src: "/ws.png", alt: "DJ Ws da igrejinha", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0pmFqO" },
              { src: "/arana.png", alt: "Atração dj arana", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3oZvlT" },
            ]
          },
        ].map((bloco, index) => (
          <div key={index} className="my-6 rounded-lg w-full p-4">
            <p className="text-4xl font-bold mb-4 flex items-center justify-center text-center text-customBlue">
              {bloco.title}
              <span className="ml-2">
                <Image
                  src={bloco.imgSrc}
                  alt={`logo ${bloco.title}`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </span>
            </p>

            {/* Atrações do Bloco */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {bloco.attractions.map((atracao, idx) => (
                <a
                  key={idx}
                  href={atracao.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center" // Centralizando o conteúdo
                >
                  <Image
                    src={atracao.src}
                    alt={atracao.alt}
                    width={400}
                    height={300}
                    className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}

      </main>
    </>
  );
};

export default Blocos;


