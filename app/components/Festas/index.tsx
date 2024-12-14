import Image from "next/image";

const images = [
  "/festas/image-1.jpg",
  "/festas/image-2.jpg",
  "/festas/image-3.jpg",
  "/festas/image-4.jpg",
  "/festas/image-5.jpg",
  "/festas/image-6.jpg",
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto p-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md w-full h-60"
          >
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              width={400} // Define a largura da imagem
              height={300} // Define a altura da imagem
              className="rounded-lg  w-full h-full object-cover" // Mantém as bordas arredondadas para cada imagem
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
