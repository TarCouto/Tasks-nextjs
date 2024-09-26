export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className="border border-gray-700 rounded-lg bg-gray-500 text-gray-100 h-12 leading-tight placeholder-gray-300 focus:border-purple-dark w-full pl-4"
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  )
}
