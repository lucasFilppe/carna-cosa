import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Fotos = () => {
  return (
    <>
      <Head>
        <title>Fotos do Carnaval</title>
        <meta
          name="description"
          content="Veja as melhores fotos dos momentos inesquecíveis do carnaval."
        />
      </Head>
      <main>
        {/* Seção Fotos */}
        <section id="fotos" className="mt-10">
          <h1 className="text-xl font-bold  flex items-center justify-center text-center text-customBlue">
            Galeria de Fotos
          </h1>
          <div className="grid  sm:grid-cols-5 gap-2 mt-6">
            <Image
              src="/galeria/foto2.JPG"
              alt="Festa de uma mulher segurando caneca no carnaval da Republíca Cosa Nostra"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto10.jpg"
              alt="Foto de duas mulheres abraçadas"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto1.jpg"
              alt="Dj GUi Marques tocando na Cosa nostra"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto5.jpg"
              alt="Grupo de amigos na Cosa nostra"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto6.jpg"
              alt="Mulher de biquine na festa da espuma da cosa nostra"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto13.png"
              alt="Mulher usando fantasia com uma boia de pato"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto8.jpg"
              alt="Três amigas sorrindo"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto12.jpg"
              alt="Mulher sorrindo"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto14.png"
              alt="Grupo de amigas fantasiadas"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            <Image
              src="/galeria/foto15.png"
              alt="Dois amigos sorrindo"
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-md border-4 border-transparent hover:border-customBlue transition-all duration-300 w-full h-full object-cover"
            />

            
          </div>

          {/* Botão de Comprar Pacote */}
          <div className="max-w-4xl mx-auto mt-10 text-center">
            <button className="bg-customBlue text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
              <Link href="/galeria">Veja mais fotos</Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Fotos;
