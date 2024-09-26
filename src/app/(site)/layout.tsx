import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex flex-col min-h-screen w-full max-w-[1600] p-0">
      {children}
    </div>
  )
}
