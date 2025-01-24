"use client";

import { FC } from "react";
import Carousel from "../Carrocel/index";

const images = [
  { src: "/festas/tardizinha.jpeg", alt: "Festa de tardezinha na Republíca Cosa Nostra" },
  { src: "/festas/virada.jpeg", alt: "Festa de virada do ano Republíca Cosa Nostra"},
  { src: "/festas/image-2.jpeg", alt: "Festa baile funk  Republíca Cosa Nostra" },
  { src: "/festas/after.jpg", alt: "Festa com atração especia de WS DA Igrejinha  Republíca Cosa Nostra" },
  { src: "/festas/image-4.png", alt: "Festa after do bloco do caixão  Republíca Cosa Nostra" },
  { src: "/festas/image-5.jpeg", alt: "Festa da espuma  Republíca Cosa Nostra" },
];

const ImageGallery: FC = () => {
  return (
    <div className="container mx-auto p-7">
      <Carousel images={images} />
    </div>
  );
};

export default ImageGallery;
