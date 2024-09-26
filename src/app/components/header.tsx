import Image from 'next/image'

export function Header() {
  return (
    <header className="flex flex-1 items-center justify-center py-20 px-2.5 bg-gray-700">
      <Image
        src="/logo.svg"
        className="w-[126px] h-[48px]"
        width={380}
        height={380}
        quality={100}
        alt="Logo"
      />
    </header>
  )
}
