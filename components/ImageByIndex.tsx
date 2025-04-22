import Image from 'next/image';

export default function ImageByIndex({url} : {url: string}) {
  if (!url) return null
  return (
    <div className="relative flex justify-center w-full h-80 mb-8 rounded-lg overflow-hidden">
      <Image
        src={`http://localhost:1337${url}`}
        alt="Article Image"
        width={120}
        height={63}
        loading='lazy'
        unoptimized
        className="object-cover w-full md:w-[60%] rounded-lg"
      />
    </div>
  );
}