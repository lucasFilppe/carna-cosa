"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Importa o componente Image

const images = [
  '/carrocel/image-1.jpg',
  '/carrocel/image-2.jpg',
  '/carrocel/image-3.jpg',
  '/carrocel/image-4.jpg',
  '/carrocel/image-5.jpg',
  '/carrocel/image-6.jpg'
  // Adicione mais imagens conforme necessário
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Muda a imagem a cada 3 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="flex items-center">
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        width={720} // Largura da imagem
        height={200} // Altura da imagem
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full transition duration-300 ease-in-out ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
