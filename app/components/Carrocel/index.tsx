"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  "/carrocel/image-1.jpg",
  "/carrocel/image-2.jpg",
  "/carrocel/image-3.jpg",
  "/carrocel/image-4.jpg",
  "/carrocel/image-5.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  // Memoriza a função para evitar recriação
  const changeImage = useCallback(() => {
    if (isImageLoaded) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsImageLoaded(false);
    }
  }, [isImageLoaded]); // Remove images.length das dependências

  useEffect(() => {
    const interval = setInterval(changeImage, 2000);
    return () => clearInterval(interval);
  }, [changeImage]);

  const handleImageLoad = () => setIsImageLoaded(true);

  return (
    <div className="relative w-full max-w-[720px] mx-auto">
      <Image
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        width={720}
        height={405}
        className="w-full h-auto"
        priority={currentIndex === 0}
        onLoadingComplete={handleImageLoad}
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsImageLoaded(false);
            }}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;



