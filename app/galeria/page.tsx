"use client";

// pages/galeria.tsx
import { useState } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Importa o estilo do Lightbox

export default function Galeria() {
  const images = [
    "/foto-1.png",
    "/foto-1.png",
    "/foto-1.png",
    "/foto-1.png",
    "/foto-1.png",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mt-6">
        {images.map((src, index) => (
          <div key={index} onClick={() => { setCurrentIndex(index); setIsOpen(true); }}>
            <Image src={src} alt={`Foto ${index + 1}`} width={400} height={300} style={{ cursor: "pointer" }} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={images[currentIndex]}
          nextSrc={images[(currentIndex + 1) % images.length]}
          prevSrc={images[(currentIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setCurrentIndex((currentIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setCurrentIndex((currentIndex + 1) % images.length)}
        />
      )}
    </div>
  );
}
