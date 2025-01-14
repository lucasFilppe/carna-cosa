"use client";

import { FC } from "react";
import Carousel from "../Carrocel/index";

const images = [
  { src: "/festas/image-1.png", alt: "Imagem 1" },
  { src: "/festas/image-2.png", alt: "Imagem 2" },
  { src: "/festas/image-3.png", alt: "Imagem 3" },
  { src: "/festas/after.jpg", alt: "Imagem 4" },
  { src: "/festas/image-4.png", alt: "Imagem 5" },
  { src: "/festas/image-5.png", alt: "Imagem 6" },

];

const ImageGallery: FC = () => {
  return (
    <div className="container mx-auto p-7">
      <Carousel images={images} />
    </div>
  );
};

export default ImageGallery;

