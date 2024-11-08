import Image from "next/image";
import NavBar from "./components/NavBar";
import { FaWhatsappSquare } from "react-icons/fa";
import PacoteCard from "./components/PacoteCard";
import { Pacote } from "./types/Pacote";
import ImageGallery from "./components/Festas";
import ButtonFloating from "./components/ButtonFloating";
import Carousel from "./components/Carrocel";
import Head from 'next/head';

export default function Home() {
  const pacotes: Pacote[] = [
    {
      titulo: "Pacote VIP",
      tipo: "Blocos na pista",
      items: [
        { emoji: "⚰", text: "Abadá :: Bloco do Caixão (Pista)" },
        { emoji: "🦐", text: "Abadá :: Bloco Cabrobró (Pista)" },
        { emoji: "🦀", text: "Abadá :: Bloco da Praia (Pista)" },
        { emoji: "🌵", text: "Abadá :: Bloco Chapado (Pista)" },
      ],
    },
    {
      titulo: "Pacote PREMIUM",
      tipo: "Blocos na pista e camarote",
      items: [
        { emoji: "⚰", text: "Abadá :: Bloco do Caixão (Camarote)" },
        { emoji: "🦐", text: "Abadá :: Bloco Cabrobró (Camarote)" },
        { emoji: "🦀", text: "Abadá :: Bloco da Praia (Pista)" },
        { emoji: "🌵", text: "Abadá :: Bloco Chapado (Pista)" },
      ],
    },
    {
      titulo: "Pacote ELITE",
      tipo: "Blocos no camarote",
      items: [
        { emoji: "⚰", text: "Abadá :: Bloco do Caixão (Camarote)" },
        { emoji: "🦐", text: "Abadá :: Bloco Cabrobró (Camarote)" },
        { emoji: "🦀", text: "Abadá :: Bloco da Praia (Camarote)" },
        { emoji: "🌵", text: "Abadá :: Bloco Chapado (Camarote)" },
      ],
    },
  ];
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] overflow-hidden pt-20">
      {/* Ajuste a margem conforme necessário */}
      <NavBar />

      {/* Seção Início */}
      <Head>
        <title>Carnaval em Ouro Preto | Carnacosa</title>
        <meta
          name="description"
          content="Conheça o Carnaval de Ouro Preto, com festas universitárias, blocos tradicionais e uma rica experiência cultural em Minas Gerais."
        />
      </Head>

      <section id="inicio" className="min-h-screen bg-gray-100 m-5 flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4 py-8">
          {/* Coluna do Carrossel */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Carousel />
          </div>

          {/* Coluna do Texto */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-center md:text-left text-customBlue mb-6">
              Carnaval em Ouro Preto: Tradição e Alegria no Coração de Minas Gerais
            </h1>

            <section className="text-lg leading-relaxed text-gray-700 mb-8">
              <p className="mb-4">
                O Carnaval de Ouro Preto é um dos eventos mais aguardados e vibrantes do Brasil, atraindo milhares de foliões para a charmosa cidade histórica, que é Patrimônio Cultural da Humanidade.
              </p>
              <p className="mb-4">
                Ouro Preto é conhecida por seu Carnaval universitário, impulsionado pelas repúblicas estudantis que organizam festas e eventos para os visitantes. Entre os blocos mais famosos estão o Bloco Cabrobró, o Bloco da Praia e o Bloco Chapado, que garantem a festa ao longo de toda a semana de Carnaval.
              </p>
              <p className="mb-4">
                O tradicional Bloco Zé Pereira dos Lacaios, fundado em 1867, é um dos mais antigos do Brasil e simboliza o espírito cultural de Ouro Preto. O bloco desfila com bonecos gigantes e lanternas, uma atração imperdível que mantém viva a herança cultural e folclórica da cidade.
              </p>
            </section>

            <section className="text-lg leading-relaxed text-gray-700 mb-8">
              <h2 className="text-2xl font-semibold text-customBlue mb-4">
                Tradição e Cultura com o Bloco Zé Pereira dos Lacaios
              </h2>
              <p className="mb-4">
                O Bloco Zé Pereira dos Lacaios é um dos principais símbolos do Carnaval de Ouro Preto, sendo um dos blocos mais antigos do Brasil e mantendo viva a cultura local com seus bonecos gigantes e tradicionais lanternas. 
              </p>
            </section>

            <section className="text-lg leading-relaxed text-gray-700 mb-8">
              <h2 className="text-2xl font-semibold text-customBlue mb-4">
                Dicas para Aproveitar ao Máximo
              </h2>
              <p className="mb-4">
                Planeje sua viagem com antecedência, pois a cidade recebe milhares de visitantes durante o Carnaval. Reserve sua hospedagem cedo, use roupas confortáveis para as ladeiras e esteja preparado para uma experiência única de festa e cultura.
              </p>
              <p>
                Explore a magia do Carnaval de Ouro Preto e viva uma experiência inesquecível, onde o antigo e o novo se encontram nas ladeiras históricas desta cidade mineira.
              </p>
            </section>
          </div>
        </div>
        <ButtonFloating />
      </section>

      {/* Seção blocos */}
      <section
        id="blocos"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 m-5"
      >
        {[
          {
            title: "Bloco caixão",
            imgSrc: "/bloco-caixao.jpg",
            spotifyLinks: [
              "https://open.spotify.com/embed/artist/3CIIaeZuFYrAD6PRVyuO4U?utm_source=generator",
              "https://open.spotify.com/embed/artist/6YzSM19LzpLH0nVKKU6Jsy?utm_source=generator",
              "https://open.spotify.com/embed/artist/2uGKgNuq7MnKksXiSO6HjB?utm_source=generator",
            ],
          },
          {
            title: "Bloco cabróbro",
            imgSrc: "/bloco-cabrobro.jpg",
            spotifyLinks: [
              "https://open.spotify.com/embed/artist/7gJN8W0589FisSYJS17K54?utm_source=generator&theme=0",
              "https://open.spotify.com/embed/artist/0pcoadNMmvrUyab1RxWBoV?utm_source=generator",
              "https://open.spotify.com/embed/artist/1AuDtbIuaPj9LHnOUMT3C8?utm_source=generator",
            ],
          },
          {
            title: "Bloco praia",
            imgSrc: "/bloco-praia.jpg",
            spotifyLinks: [
              "https://open.spotify.com/embed/artist/0drNUQoEie9lmZKhCdIE6n?utm_source=generator",
              "https://open.spotify.com/embed/artist/2q9wk5fkeU2C9CgCKdh4AN?utm_source=generator",
              "https://open.spotify.com/embed/artist/1mvpEXClANunyiHFtAXCxt?utm_source=generator",
              "https://open.spotify.com/embed/artist/0IhzJFf4QBEz0ifqLwScKV?utm_source=generator",
              "https://open.spotify.com/embed/artist/5M5NrRoOEBa49sW1hzKkuH?utm_source=generator",
            ],
          },
          {
            title: "Bloco chapado",
            imgSrc: "/bloco-chapado.jpg",
            spotifyLinks: [
              "https://open.spotify.com/embed/artist/5nP8x4uEFjAAmDzwOEc9b8?utm_source=generator",
              "https://open.spotify.com/embed/artist/34dfPo3Zi55yM6oV46q4y7?utm_source=generator",
            ],
          },
          // Add other blocks similarly here
        ].map((bloco, index) => (
          <div key={index} className="my-6  rounded-lg w-full max-w-xl p-4">
            <p className="text-xl sm:text-2xl font-bold mb-4 flex items-center justify-center text-center text-customBlue">
              {bloco.title}
              <span className="ml-2">
                <Image
                  src={bloco.imgSrc}
                  alt={`logo ${bloco.title}`}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </span>
            </p>
            {bloco.spotifyLinks.map((link, i) => (
              <iframe
                key={i}
                className="rounded-lg h-[352px] sm:h-[152px] w-full mt-4"
                src={link}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ width: "100%" }} // Adiciona estilo inline para garantir 100% de largura
              ></iframe>
            ))}
          </div>
        ))}
      </section>

      {/* Seção Pacotes */}
      <section
        id="pacotes"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 m-5"
      >
        <div className="bg-gray-100 min-h-screen p-8">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 flex items-center justify-center text-center text-customBlue">
            Todos os Pacotes Incluem:
          </h1>
          <div className="max-w-4xl mx-auto mb-10">
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>🏠 5 dias de Hospedagem com almoço</li>
              <li>🍻 24h de Open Bar durante todos os dias</li>
              <li>🎭 6 Festas exclusivas</li>
              <li>🌟 Acesso aos 4 maiores blocos de Ouro Preto</li>
              <li>👮🏻 Assistência 24h - Equipe de segurança e limpeza</li>
              <li>👓 Kit Folia - Brindes personalizados</li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pacotes.map((pacote, index) => (
              <PacoteCard key={index} {...pacote} />
            ))}
          </div>

          {/* Botão de Comprar Pacote */}
          <div className="max-w-4xl mx-auto mt-10 text-center">
            <button className="bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
              Comprar pacote
            </button>
          </div>
        </div>
      </section>

      <section
        id="festas"
        className="flex flex-col justify-center items-center bg-gray-100 m-5"
      >
        <h1 className="text-xl sm:text-2xl font-bold mt-5 mb-5 flex items-center justify-center text-center text-customBlue">
          Festas
        </h1>
        <ImageGallery />
        <div className="max-w-4xl mx-auto my-5 text-center">
          <button className="bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
            Comprar festas
          </button>
        </div>
      </section>

      {/* Seção Fotos */}
      <section
        id="fotos"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 m-5"
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-5 mt-5 flex items-center justify-center text-center text-customBlue">
          Galeria de Fotos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mt-6">
          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>

          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-64 sm:w-64 sm:h-64"
          >
            <Image
              src="/foto1-cosa.jpg"
              alt="Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300"
            />
          </a>
          {/* Repita para cada imagem */}
        </div>
      </section>

      {/* Seção Vendedores Oficiais */}
      <section
        id="vendedores"
        className="flex flex-col justify-center items-center bg-gray-100 m-5"
      >
        <h1 className="text-xl sm:text-2xl font-bold mt-5 mb-5 flex items-center justify-center text-center text-customBlue">
          Vendedores oficiais
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 w-full max-w-md sm:max-w-3xl mx-auto">
          {/* Card de vendedor */}
          <div className="bg-white flex flex-col items-center p-4 border-4 border-transparent hover:border-customBlue transition-all duration-300 rounded-lg min-h-[250px] w-full sm:w-[48%] mb-5">
            <div className="relative w-full flex justify-center">
              <Image
                src="/joaopaulomeneses.jpg"
                alt="foto de João Paulo"
                width={96}
                height={96}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-customBlue">
              João Paulo
            </h2>
            <button className="flex items-center text-white font-bold rounded p-2 transition-transform duration-300 hover:scale-105 hover:bg-green-500 hover:text-white">
              <FaWhatsappSquare className="w-12 h-12 text-green-400 transition-colors duration-300 hover:text-green-600" />
            </button>
          </div>

          {/* Card do próximo vendedor */}
          <div className="bg-white flex flex-col items-center p-4 border-4 border-transparent hover:border-customBlue transition-all duration-300 rounded-lg min-h-[250px] min-h-[250px] w-full sm:w-[48%] mb-5">
            <div className="relative w-full flex justify-center">
              <Image
                src="/arkimedes.jpg"
                alt="foto de Pedro da Mata"
                width={96}
                height={96}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-customBlue">
              Pedro da Mata
            </h2>
            <button className="flex items-center text-white font-bold rounded p-2 transition-transform duration-300 hover:scale-105 hover:bg-green-500 hover:text-white">
              <FaWhatsappSquare className="w-12 h-12 text-green-400 transition-colors duration-300 hover:text-green-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <footer className="w-full flex flex-col items-center text-center text-surface text-white">
          <div className="container px-6 pt-6">
            <div className="mb-6 flex justify-center space-x-2">
              {/* Ícone do Facebook */}
              <a
                href="#!"
                className="rounded-full bg-[#3b5998] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                  className="h-5 w-5"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>

              {/* Ícone do Twitter */}
              <a
                href="#!"
                className="rounded-full bg-[#55acee] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="h-5 w-5"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>

              {/* Ícone do Google */}
              <a
                href="#!"
                className="rounded-full bg-[#dd4b39] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                  className="h-5 w-5"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </a>

              {/* Ícone do Instagram */}
              <a
                href="https://www.instagram.com/carnacosa/"
                target="_blank"
                className="rounded-full bg-[#ac2bac] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="h-5 w-5"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

              {/* Ícone do Google Maps */}
              <a
                href="https://www.google.com/maps/place/Rep%C3%BAblica+Cosa+Nostra/@-20.39723,-43.514639,2469m/data=!3m1!1e3!4m6!3m5!1s0xa40af24d93ab93:0x58921f507eba6bb2!8m2!3d-20.3972305!4d-43.5146389!16s%2Fg%2F11g_qs9ff?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="rounded-full bg-[#dd4b39] p-3 text-white shadow-black/30 transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                  className="h-5 w-5"
                >
                  <path d="M168 0C75.1 0 0 75.1 0 168c0 87.3 96.3 211.5 149.6 276.6 6.2 7.7 17.7 7.7 23.9 0C287.7 379.5 384 255.3 384 168 384 75.1 308.9 0 216 0H168zm.7 224c-32.3 0-58.7-26.4-58.7-58.7s26.4-58.7 58.7-58.7 58.7 26.4 58.7 58.7-26.4 58.7-58.7 58.7z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="p-4 text-center text-white">
            © 2024 Copyright:{" "}
            <a href="https://tw-elements.com/" className="text-white">
              Lucas Filipe
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
