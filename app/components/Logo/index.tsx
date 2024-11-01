import Image from 'next/image';

export default function CosaLogo() {
  return (
    <div className="flex justify-start">
      <Image
        src="/cosalogo.jpeg"
        alt="Acme Logo"
        width={50}
        height={50}
        className="rounded-full object-cover w-40 h-40 md:w-32 md:h-32 lg:w-24 lg:h-24"
        priority
      />
    </div>
  );
}
