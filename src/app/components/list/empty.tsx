import Image from 'next/image'

export function Empty() {
  return (
    <div className="pt-16 px-4 border-t border-gray-400 rounded-lg flex flex-col items-center gap-4 text-gray-300">
      <Image
        src="/clipboard.png"
        width={380}
        height={380}
        quality={100}
        alt="ícone de prancheta"
        className="w-[56px] h-[56px]"
      />
      <p className="flex flex-col leading-4 text-base">
        <strong className="text-base">
          Você ainda não tem tarefas cadastradas
        </strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
