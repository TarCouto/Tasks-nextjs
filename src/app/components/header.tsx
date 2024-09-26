import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-black flex justify-center items-center py-5 w-full h-48 absolute top-0 left-1">
      <Image
        src="/logo.svg"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
        width={480}
        height={480}
        quality={100}
        alt=""
      />
    </header>
  )
}
