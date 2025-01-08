import Head from 'next/head';
import Image from 'next/image';

const Blocos = () => {
  return (
    <>
      <Head>
        <title>Blocos de Carnaval</title>
        <meta name="description" content="Veja os blocos de carnaval disponíveis para aproveitar." />
      </Head>
      <main>
         {/* Seção blocos */}
         <section
          id="Blocos"
          className="min-h-screen flex flex-col justify-center items-center bg-gray-100 m-5"
        >
          {[
            {
              title: "Bloco Caixão",
              imgSrc: "/bloco-caixao.jpg",
              spotifyLinks: [
                "https://open.spotify.com/embed/artist/3CIIaeZuFYrAD6PRVyuO4U?utm_source=generator",
                "https://open.spotify.com/embed/artist/6YzSM19LzpLH0nVKKU6Jsy?utm_source=generator",
                "https://open.spotify.com/embed/artist/2uGKgNuq7MnKksXiSO6HjB?utm_source=generator",
                "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0fyXlA?utm_source=generator",
              ],
            },
            {
              title: "Bloco Cabróbro",
              imgSrc: "/bloco-cabrobro.jpg",
              spotifyLinks: [
                "https://open.spotify.com/embed/artist/7gJN8W0589FisSYJS17K54?utm_source=generator&theme=0",
                "https://open.spotify.com/embed/artist/0pcoadNMmvrUyab1RxWBoV?utm_source=generator",
                "https://open.spotify.com/embed/artist/1AuDtbIuaPj9LHnOUMT3C8?utm_source=generator",
                "https://open.spotify.com/embed/artist/0NB5wv4kn6A919CLHUKRmk?utm_source=generator",
                "https://open.spotify.com/embed/artist/22RXQj1gd5zEbcRjdxiJbu?utm_source=generator",
                
              ],
            },
            {
              title: "Bloco Praia",
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
              title: "Bloco Chapado",
              imgSrc: "/bloco-chapado.jpg",
              spotifyLinks: [
                "https://open.spotify.com/embed/artist/5nP8x4uEFjAAmDzwOEc9b8?utm_source=generator",
                "https://open.spotify.com/embed/artist/34dfPo3Zi55yM6oV46q4y7?utm_source=generator",
                "https://open.spotify.com/embed/artist/6aoGgTKGqtsjj48ymcNs4Z?utm_source=generator",
                "https://open.spotify.com/embed/artist/063wYkWkHrq5L5YWdrqjEt?utm_source=generator",
                "https://open.spotify.com/embed/artist/3SBOxPJ9Ilvge7XrOJb01C?utm_source=generator" ,

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

      </main>
    </>
  );
};

export default Blocos;
