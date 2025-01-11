import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carrocel/index";

const Blocos = () => {
  const blocos = [
    {
      title: "Bloco do Caixão",
      imgSrc: "/bloco-caixao.jpg",
      attractions: [
        {
          src: "/filipe-amorim.png",
          alt: "Atração de Filipe Amorim",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO26JYqd",
        },
        {
          src: "/mc-daniel.png",
          alt: "Atração de Mc Daniel",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO47OcyR",
        },
        {
          src: "/kvsh.png",
          alt: "Atração de Kvsh",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1qBmXk",
        },
        {
          src: "/topo.png",
          alt: "DJ Topo",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0fyXlA",
        },
      ],
    },
    // ... Outros blocos
    {
      title: "Bloco da Praia",
      imgSrc: "/bloco-praia.jpg", // Caminho da imagem do novo bloco
      attractions: [
        {
          src: "/jammil.png",
          alt: "Atração de jammil e uma noits",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO03C9AB",
        },
        {
          src: "/rick.png",
          alt: "Atração de Mc Rick",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KndXn",
        },
        {
          src: "/ig.png",
          alt: "Atração de Mc IG",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1nRZQG",
        },
        {
          src: "/gbr.png",
          alt: "DJ GBR",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0mapaw",
        },
        {
          src: "/chapeleiro.png",
          alt: "Atração de chapeleiro",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3oZvlT",
        },
      ],
    },
    {
      title: "Bloco Cabróbro",
      imgSrc: "/bloco-cabrobro.jpg", // Caminho da imagem do novo bloco
      attractions: [
        {
          src: "/filipe-ret.png",
          alt: "Atração de Filipe Ret",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4iJL4k",
        },
        {
          src: "/hariel.png",
          alt: "Atração de Hariel",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0aGty0",
        },
        {
          src: "/akatu.png",
          alt: "Atração de Akatu",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0SMTSM",
        },
        {
          src: "/ws.png",
          alt: "DJ Ws da igrejinha",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0pmFqO",
        },
        {
          src: "/arana.png",
          alt: "Atração dj arana",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3oZvlT",
        },
      ],
    },
    {
      title: "Bloco Chapado",
      imgSrc: "/bloco-chapado.jpg", // Caminho da imagem do novo bloco
      attractions: [
        {
          src: "/matue.png",
          alt: "Atração de Matue",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3aogAV",
        },
        {
          src: "/mumuzinho.png",
          alt: "Atração de Mumuzinho",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1LYFfD",
        },
        {
          src: "/tutu.png",
          alt: "Atração de MC tutu",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3DC7Bg",
        },
        {
          src: "/victor.png",
          alt: "Atração Voctor low",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evNZZalxf",
        },
        {
          src: "/ariel.png",
          alt: "Atração Ariel B",
          link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2giyOK",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Blocos do Carnaval</title>
        <meta
          name="description"
          content="Veja as atrações dos blocos de carnaval."
        />
      </Head>
      <main>
        {blocos.map((bloco, index) => (
          <div key={index} className="rounded-lg w-full p-10">
            <p className="text-xl font-bold  flex items-center justify-center text-center text-customBlue mt-5">
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

            {/* Substituir imagens estáticas pelo carrossel */}
            <div className="flex justify-center items-center ">
            <div className="w-full h-auto sm:w-96 sm:h-[300px]">
              <Carousel images={bloco.attractions} />
              </div>
            </div>
          </div>
        ))}

        <div className="max-w-4xl mx-auto text-center">
          <button className="bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
            <a
              href="https://wa.me/5531996186158"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar Blocos
            </a>
          </button>
        </div>
      </main>
    </>
  );
};

export default Blocos;
