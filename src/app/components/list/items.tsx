import { ITask } from '@/app/(site)/(home)/page'
import { Trash, Check } from '@phosphor-icons/react'

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.isChecked
    ? 'border-purple-dark bg-purple-dark hover:border-purple hover:bg-purple'
    : 'border-blue hover:bg-[rgba(30,111,159,0.2)]'
  const paragraphCheckedClassname = data.isChecked
    ? 'line-through text-gray-300'
    : ''

  return (
    <div className="flex flex-1 gap-3 items-center justify-between  rounded-lg bg-gray-500 border border-gray-400">
      <div className="flex">
        <label
          htmlFor="checkbox"
          onClick={handleTaskToggle}
          className="flex items-center gap-3 p-1"
        >
          <input
            readOnly
            type="checkbox"
            checked={data.isChecked}
            className="hidden"
          />
          <span
            className={`flex items-center justify-center rounded-full h-4.5 w-4.5 transition-all ${checkboxCheckedClassname}`}
          >
            {data.isChecked && <Check size={12} />}
          </span>

          <p
            className={`text-sm leading-tight select-none transition-all ${paragraphCheckedClassname}`}
          >
            {data.text}
          </p>
        </label>
      </div>

      <button
        onClick={handleRemove}
        className="border-none bg-transparent rounded-md p-1 transition-colors hover:bg-gray-400"
      >
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
