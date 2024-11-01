import Image from 'next/image';

export default function CosaLogo() {
  return (
    <div className='position: left'>
      <Image
        src="/cosalogo.jpeg"
        alt="Acme Logo"
        width={150}
        height={150}
        className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
        priority
      />
    </div>
  );
}