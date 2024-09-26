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

  return (
    <div className="flex flex-1 gap-3 items-center justify-between p-4 rounded-lg bg-gray-500 border border-gray-400 w-[736px]">
      <div className="flex">
        <label
          htmlFor="checkbox"
          onClick={handleTaskToggle}
          className="flex items-center gap-3 p-1 cursor-pointer"
        >
          {/* Hidden checkbox */}
          <input
            readOnly
            type="checkbox"
            checked={data.isChecked}
            className="hidden"
          />

          {/* Custom checkbox */}
          <div
            className={`flex items-center justify-center rounded-full h-5 w-5 transition-all border ${
              data.isChecked
                ? 'bg-purple-dark border-purple-dark hover:bg-purple hover:border-purple'
                : 'bg-transparent border-blue hover:bg-[rgba(30,111,159,0.2)]'
            }`}
          >
            {/* Show check icon only if the task is checked */}
            {data.isChecked && <Check size={12} color="#ffffff" />}
          </div>

          {/* Task text */}
          <p
            className={`text-sm leading-tight select-none transition-all ${
              data.isChecked ? 'line-through text-gray-300' : ''
            }`}
          >
            {data.text}
          </p>
        </label>
      </div>

      {/* Remove button */}
      <button
        onClick={handleRemove}
        className="border-none bg-transparent rounded-md p-1 transition-colors hover:bg-red-400"
      >
        <Trash size={16} color="#ffffff" />
      </button>
    </div>
  )
}
