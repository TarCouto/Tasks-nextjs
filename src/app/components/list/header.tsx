interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function Header({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className="flex flex-1 items-center justify-between">
      <aside className="flex items-center gap-2 font-bold">
        <p className="text-blue text-sm">Tarefas criadas</p>
        <span className="px-2 py-1 rounded-full text-xs text-gray-200 bg-gray-400">
          {tasksCounter}
        </span>
      </aside>

      <aside className="flex items-center gap-2 font-bold">
        <p className="text-purple text-sm">Concluídas</p>
        <span className="px-2 py-1 rounded-full text-xs text-gray-200 bg-gray-400">
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
