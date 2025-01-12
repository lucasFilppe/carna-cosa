import Head from "next/head";
import Image from "next/image";

const Blocos = () => {
  const blocos = [
    {
      title: "Bloco do Caixão",
      imgSrc: "/bloco-caixao.jpg",
      lineUp: "/line-chapado.png",
    },
    {
      title: "Bloco da Praia",
      imgSrc: "/bloco-praia.jpg",
      lineUp: "/line-praia.jpg",
    },
    {
      title: "Bloco Cabróbró",
      imgSrc: "/bloco-cabrobro.jpg", // Caminho da imagem do novo bloco
      lineUp:"/line-cabrobro.jpg"
    },
    {
      title: "Bloco Chapado",
      imgSrc: "/bloco-chapado.jpg",
      lineUp: "/line-chapado.jpg",
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
            <p className="text-xl font-bold flex items-center justify-center text-center text-customBlue mt-5">
              {bloco.title}
              <span className="ml-2">
                <Image
                  src={bloco.imgSrc}
                  alt={`Logo do ${bloco.title}`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </span>
            </p>

            {/* Exibindo o line-up do bloco */}
            <div className="flex justify-center items-center mt-4">
              <Image
                src={bloco.lineUp}
                alt={`Line-up do bloco ${bloco.title}`}
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}

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
