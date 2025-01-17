"use client";

import { FC } from "react";
import Carousel from "../Carrocel/index";

const images = [
  { src: "/festas/tardizinha.jpeg", alt: "tardezinha" },
  { src: "/festas/virada.jpeg", alt: "Imagem 1" },
  { src: "/festas/image-2.jpeg", alt: "Imagem 2" },
  { src: "/festas/after.jpg", alt: "Imagem 3" },
  { src: "/festas/image-4.png", alt: "Imagem 4" },
  { src: "/festas/image-5.jpeg", alt: "Imagem 5" },
];

const ImageGallery: FC = () => {
  return (
    <div className="container mx-auto p-7">
      <Carousel images={images} />
    </div>
  );
};

export default ImageGallery;
