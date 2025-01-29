import Head from 'next/head';
import ImageGallery from '../components/Festas';

const Festas = () => {
  return (
    <>
      <Head>
        <title>Festas de Carnaval</title>
        <meta name="description" content="Descubra as melhores festas de carnaval e divirta-se com muita música e animação." />
      </Head>
      <main>
        <section
          id="festas"
          className="mt-10 md:mt-6 lg:mt-4"

        >
          <h1 className="text-xl font-bold flex items-center justify-center text-center text-customBlue">
          Viva momentos inesquecíveis nas nossas festas!
          </h1>
          <p className="p-3 text-white text-sm font-bold flex items-center justify-center text-center">De festas temáticas a eventos exclusivos, cada momento é preparado para você se divertir ao máximo. Escolha sua favorita e reserve já!</p>
          <ImageGallery />
          <div className="max-w-4xl mx-auto my-5 text-center">
            <button className="bg-customBlue text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
              <a
                href="https://cheers.com.br/evento/carna-cosa-festas-noturnas-20757"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve seu ingresso agora
              </a>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Festas;
