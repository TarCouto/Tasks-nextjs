type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...rest }: Props) {
  return (
    <button
      className="flex items-center justify-center h-13 px-4 bg-blue-dark text-gray-100 border-0 rounded-lg gap-2 shadow-none leading-tight font-bold text-sm transition-colors hover:bg-blue"
      {...rest}
    >
      {children}
    </button>
  )
}
