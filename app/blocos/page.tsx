import Head from "next/head";
import Image from "next/image";

const Blocos = () => {
  const blocos = [
    {
      title: "Bloco do Caixão",
      imgSrc: "/bloco-caixao.jpg",
      lineUp: "/line-caixao.png",
      drinks: {
        pista: "Budweiser, Smirnoff, Energético Fusion, Água, Bebida Surpresa. Acesso a frente do palco",
        camarote:
          "Cerveja, Vodka Ciroc & KetelOne, Gin Tanqueray, Whisky Red & Blond Label,Red Bull, Isotônico, Refrigerante, Suco, Água + Bebida Surpresa, Bar de Shotz (Exclusivo), Open Food, Entrada & Banheiros Exclusivos, Área Coberta, Vista Privilegiada do Palco, Decoração Temática,Acesso a Pista ",
      },
    },
    {
      title: "Bloco Cabróbró",
      imgSrc: "/bloco-cabrobro.jpg",
      lineUp: "/line-cabrobro.jpg",
      drinks: {
        pista:
          "Open Bar Premium: Cerveja, vodka, energético, água e muito mais. Acesso a frente do palco",
      camarote:
          "Open Bar Premium: Cerveja, vodka, whisky, gin, tequila, bebida ice, energético, suco, água e muito mais, Espaço coberto, Entrada e banheiros exclusivos, Surpresas e mimos especiais",
      },
    },
    {
      title: "Bloco da Praia",
      imgSrc: "/bloco-praia.jpg",
      lineUp: "/line-praia.jpg",
      drinks: {
        pista:
          "Cerveja Budweiser, vodka, energético e água.Acesso a frente do palco",
        camarote:
          "cerveja Budweiser, Vodka Ketel One, Whisky Blonde Label, Gin Tanqueray, Energético Fusion, Suco, Água, Skol Beats e muito mais. Entrada & Banheiros exclusivos. Acesso a Área VIP",
      },
    },
    {
      title: "Bloco Chapado",
      imgSrc: "/bloco-chapado.jpg",
      lineUp: "/line-chapado.jpg",
      drinks: {
        pista: " 100% OPEN BAR",
        camarote: "CAMAROTE 100% OPEN BAR PREMIUM",
      },
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
        <div className="space-y-10">
          {blocos.map((bloco, index) => (
            <div key={index} className="rounded-lg w-full p-10 mb-3">
              <p className="text-xl font-bold flex items-center justify-center text-center text-customBlue mt-5">
                {bloco.title}
                <span className="ml-2">
                  <Image
                    src={bloco.imgSrc}
                    alt={`Logo do ${bloco.title}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </span>
              </p>

              {/* Exibição da line-up do bloco */}
              <div className="mt-6 flex justify-center">
                <Image
                  src={bloco.lineUp}
                  alt={`Line-up do bloco ${bloco.title}`}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>

              {/* Informações sobre bebidas */}
              <div className="mt-2 text-center">
                <h3 className="text-lg font-semibold text-customBlue">
                  Bebidas
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-white">
                    <span className="font-bold text-customBlue">Pista:</span>{" "}
                    {bloco.drinks.pista}
                  </p>
                  <p className="text-sm text-white mt-2">
                    <span className="font-bold text-customBlue">Camarote:</span>{" "}
                    {bloco.drinks.camarote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-6">
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
