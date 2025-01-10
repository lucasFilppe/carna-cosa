"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  
  "/carrocel/image-2.webp",
  "/carrocel/image-3.webp",
  "/carrocel/image-4.webp",
  "/carrocel/image-5.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(changeImage, 2000);
    return () => clearInterval(interval);
  }, [changeImage]);

  return (
    <div className="relative ">
      <Image
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        width={600}
        height={300}
        className="w-full h-auto"
        priority={currentIndex === 0}
        
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;




