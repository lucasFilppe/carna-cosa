import Image from "next/image";
import NavBar from "./components/NavBar";
import { FaWhatsappSquare } from "react-icons/fa";
import PacoteCard from "./components/PacoteCard";
import { Pacote } from "./types/Pacote";
import ImageGallery from "./components/Festas";
import ButtonFloating from "./components/ButtonFloating";
import Carousel from "./components/Carrocel";

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
      preco: "R$ 1.800",
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
      preco: "R$ 2.000",
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
      preco: "R$ 2.500",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <div className="w-full">
        {/* ajuste a margem conforme necessário */}
        <NavBar />

        <div className="">
          {/* Seção Início */}
          <section
            id="inicio"
            className="flex flex-col justify-center items-center bg-white py-8 pt-16 md:pt-20"
          >
            <div className="w-full max-w-md my-4">
              <Carousel />
              <ButtonFloating />
            </div>
          </section>

          {/* Seção Atrações */}
          <section
            id="atracoes"
            className="min-h-screen flex flex-col justify-center items-center bg-white"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-customBlue">
              Atrações
            </h1>

            <div className="my-6  transform transition duration-300 ease-in-out hover:scale-110 rounded-lg w-full max-w-xl p-4">
              <p className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-customBlue">
                Bloco caixao
                <span className="ml-2">
                  <Image
                    src="/bloco-caixao.jpg"
                    alt="logo bloco do caixao"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </span>
              </p>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full"
                src="https://open.spotify.com/embed/artist/3CIIaeZuFYrAD6PRVyuO4U?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full"
                src="https://open.spotify.com/embed/artist/6YzSM19LzpLH0nVKKU6Jsy?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full mt-4"
                src="https://open.spotify.com/embed/artist/2uGKgNuq7MnKksXiSO6HjB?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              
            </div>

            {/*bloco cabrobro*/}
            <div className="my-6 transform transition duration-300 ease-in-out hover:scale-110 rounded-lg w-full max-w-xl p-4">
              <p className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-customBlue">
                Bloco cabróbro
                <span className="ml-2">
                  <Image
                    src="/bloco-cabrobro.jpg"
                    alt="logo bloco do cabrobro"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </span>
              </p>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full"
                src="https://open.spotify.com/embed/artist/7gJN8W0589FisSYJS17K54?utm_source=generator&theme=0"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full mt-4"
                src="https://open.spotify.com/embed/artist/0pcoadNMmvrUyab1RxWBoV?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full mt-4"
                src="https://open.spotify.com/embed/artist/1AuDtbIuaPj9LHnOUMT3C8?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            {/*bloco praia*/}
            <div className="my-6 transform transition duration-300 ease-in-out hover:scale-110 rounded-lg w-full max-w-xl p-4">
              <p className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-customBlue">
                Bloco praia
                <span className="ml-2">
                  <Image
                    src="/bloco-praia.jpg"
                    alt="logo bloco praia"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </span>
              </p>
              
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full"
                src="https://open.spotify.com/embed/artist/0drNUQoEie9lmZKhCdIE6n?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full mt-4"
                src="https://open.spotify.com/embed/artist/2q9wk5fkeU2C9CgCKdh4AN?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full"
                src="https://open.spotify.com/embed/artist/1mvpEXClANunyiHFtAXCxt?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full mt-4"
                src="https://open.spotify.com/embed/artist/0IhzJFf4QBEz0ifqLwScKV?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="border-radius:12px"
                src="https://open.spotify.com/embed/artist/5M5NrRoOEBa49sW1hzKkuH?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            {/*bloco chapado*/}
            <div className="my-6 transform transition duration-300 ease-in-out hover:scale-110 rounded-lg w-full max-w-xl p-4">
              <p className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-customBlue">
                Bloco chapado
                <span className="ml-2">
                  <Image
                    src="/bloco-chapado.jpg"
                    alt="logo bloco chapado"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </span>
              </p>
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full mt-4"
                src="https://open.spotify.com/embed/artist/5nP8x4uEFjAAmDzwOEc9b8?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              
              <iframe
                className="rounded-lg h-[300px] sm:h-[152px] w-full"
                src="https://open.spotify.com/embed/artist/34dfPo3Zi55yM6oV46q4y7?utm_source=generator"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              
            </div>

            {/* Repita para cada bloco de conteúdo */}
          </section>

          {/* Seção Pacotes */}
          <section
            id="pacotes"
            className="min-h-screen flex flex-col justify-center items-center bg-white"
          >
            <div className="bg-gray-100 min-h-screen p-8">
              <h1 className="text-4xl font-bold text-center text-customBlue mb-8">
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
        </div>
      </div>

      <section
        id="festas"
        className="min-h-screen flex flex-col justify-center items-center bg-white"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-customBlue">
          Festas
        </h1>
        <ImageGallery />
        <div className="max-w-4xl mx-auto mt-10 text-center">
          <button className="bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
            Comprar festas
          </button>
        </div>
      </section>

      {/* Seção Fotos */}
      <section
        id="fotos"
        className="min-h-screen flex flex-col justify-center items-center bg-white"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-customBlue">
          Galeria de Fotos
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-6">
          <a
            href="/foto1-cosa.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
            className="relative w-32 h-32 sm:w-64 sm:h-64"
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
        id="vendedoresOficiais"
        className="min-h-screen flex flex-col justify-center items-center bg-white mt-20"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-customBlue mb-8">
          Vendedores oficiais
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center p-6 max-w-xs w-full mx-auto sm:max-w-2xl sm:gap-6 gap-y-6 sm:gap-y-0">
          {/* Card de vendedor */}
          <div className="bg-customBlue flex flex-col items-center p-4 border-4 border-transparent hover:border-customBlue transition-all duration-300 rounded-lg min-h-[350px] w-full sm:w-1/2">
            <div className="w-30 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative mb-4">
              <Image
                src="/joaopaulomeneses.jpg"
                alt="foto de João Paulo"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-white">
              João Paulo
            </h2>
            <button className="mt-4 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold rounded p-2 transition-all duration-300">
              <FaWhatsappSquare className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </button>
          </div>

          {/* Card do próximo vendedor */}
          <div className="bg-customBlue flex flex-col items-center p-4 border-4 border-transparent hover:border-customBlue transition-all duration-300 rounded-lg min-h-[350px] w-full sm:w-1/2">
            <div className="w-30 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative mb-4">
              <Image
                src="/arkimedes.jpg"
                alt="foto de Lucas Filipe"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-white">
              Pedro da Mata
            </h2>
            <button className="mt-4 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold rounded p-2 transition-all duration-300">
              <FaWhatsappSquare className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-blueText flex flex-col items-center bg-zinc-50 text-center text-surface ">
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

            <a
              href="https://www.google.com/maps/place/Rep%C3%BAblica+Cosa+Nostra/@-20.39723,-43.514639,2469m/data=!3m1!1e3!4m6!3m5!1s0xa40af24d93ab93:0x58921f507eba6bb2!8m2!3d-20.3972305!4d-43.5146389!16s%2Fg%2F11g_qs9ff?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D
              "
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

        <div className=" p-4 text-center">
          © 2024 Copyright:{" "}
          <a href="https://tw-elements.com/" className="text-blue-600">
            Lucas Filipe
          </a>
        </div>
      </footer>
    </div>
  );
}
