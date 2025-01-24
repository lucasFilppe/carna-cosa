import Image from 'next/image';

export default function CosaLogo() {
  return (
    <div className="flex justify-start">
      <Image
        src="/cosalogo.jpeg"
        alt="Logo do Carnaval na Republíca cosa nostra"
        width={100}
        height={100}
        className="rounded-full object-cover w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"

        priority
      />
    </div>
  );
}
