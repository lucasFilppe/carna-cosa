import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaWhatsappSquare } from 'react-icons/fa';

// Interface para as propriedades do VendorCard
interface VendorCardProps {
  name: string;
  type: string;
  image: string;
  whatsappLink: string;
}

const VendorCard: React.FC<VendorCardProps> = ({ name, type, image, whatsappLink }) => (
  <div className="bg-black flex flex-col items-center p-4 rounded-lg min-h-[250px]">
    <div className="relative w-full flex justify-center">
      <Image
        src={image}
        alt={`Foto de ${name}`}
        width={96}
        height={96}
        className="rounded-full object-cover"
        priority
      />
    </div>
    <h2 className="text-sm lg:text-2xl font-semibold text-center text-customBlue">
      {name}
    </h2>
    <h2 className="text-sm lg:text-2xl font-semibold text-center text-customBlue">
      {type}
    </h2>
    <button className="flex items-center bg-white text-white font-bold rounded transition-transform duration-300 hover:scale-105 hover:bg-green-500 hover:text-white">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare className="w-12 h-12 text-green-400 transition-colors duration-300 hover:text-green-600" />
      </a>
    </button>
  </div>
);

const Vendedores = () => {
  const vendors: VendorCardProps[] = [
    {
      name: 'João Paulo',
      type: '(Pacotes)',
      image: '/joaopaulomeneses.jpg',
      whatsappLink: 'https://wa.me/5531972041833',
    },
    {
      name: 'Pedro Marciano',
      type: '(Festas)',
      image: '/pedro-marciano.jpg',
      whatsappLink: 'https://wa.me/5531999119767',
    },
    {
      name: 'Lucas Rodrigues',
      type: '(Excursões)',
      image: '/lisinha.jpg',
      whatsappLink: 'https://wa.me/5537998418715',
    },
  ];

  return (
    <>
      <Head>
        <title>Vendedores de Carnaval</title>
        <meta name="description" content="Encontre informações sobre os vendedores e fornecedores do carnaval." />
      </Head>
      <main className="mt-10">
        <section>
          <h1 className="text-xl sm:text-2xl font-bold mb-5 flex items-center justify-center text-center text-customBlue">
            Vendedores oficiais
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {vendors.map((vendor, index) => (
              <VendorCard
                key={index}
                name={vendor.name}
                type={vendor.type}
                image={vendor.image}
                whatsappLink={vendor.whatsappLink}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Vendedores;

