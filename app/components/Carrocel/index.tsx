"use client";

import { FC, useState, useEffect, useCallback } from "react";
import Image from "next/image";

type ImageType = {
  src: string;
  alt: string;
};

interface CarouselProps {
  images: ImageType[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(changeImage, 2000);
    return () => clearInterval(interval);
  }, [changeImage]);

  return (
    <div className="relative">
      {/* Estrutura para dispositivos médios e maiores */}
      <div className="hidden md:flex overflow-hidden relative">
        <div
          className="flex gap-4 animate-scroll"
          style={{
            width: `${images.length * 200}%`,
            animation: `scroll-infinite ${images.length * 2}s linear infinite`,
          }}
        >
          {images.concat(images).map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[25%]" // Ajuste para cada imagem ocupar um quarto da largura
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Estrutura para dispositivos pequenos */}
      <div className="md:hidden">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={400}
          height={300}
          className="object-cover"
          aria-live="polite" // Feedback dinâmico para leitores de tela
        />
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
          role="status"
          aria-label="Indicadores de navegação do carrossel"
        >
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-blue-500 scale-125 ring-2 ring-blue-500"
                  : "bg-gray-300"
              }`}
              aria-label={`Indicador para a imagem ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
