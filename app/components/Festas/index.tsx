import Image from 'next/image';

const images = [
  '/festas/image-1.jpg',
  '/festas/image-2.jpg',
  '/festas/image-3.jpg',
  '/festas/image-4.jpg',
  '/festas/image-5.jpg',
  '/festas/image-6.jpg',
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              width={300}
              height={300}
              className="object-cover"

            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

