import Image from 'next/image';

export default function ButtonFloating() {
  return (
    <a
      href="https://www.instagram.com/carnacosa/"
      target="_blank"
      className="fixed bottom-4 right-4  rounded-full p-4 shadow-lg hover:bg-customBlue transition-colors"
      aria-label="Go to link"
    >
       <Image 
        src="/instagram.svg" 
        alt="Ícone do Instagram" 
        className="h-12 w-12"  
        width={48} // Ajuste a largura conforme necessário
        height={48} // Ajuste a altura conforme necessário
      />
    </a>
  );
}
