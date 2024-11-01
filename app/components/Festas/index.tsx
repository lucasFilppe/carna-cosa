import Image from 'next/image';

const images = [
  '/festas/image1.jpg',
  '/festas/image2.jpg',
  '/festas/image3.jpg',
  '/festas/image4.jpg',
  '/festas/image5.jpg',
  '/festas/image6.jpg',
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
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

