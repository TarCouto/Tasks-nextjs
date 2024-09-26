'use client'

import Image from 'next/image'
import { useState, ChangeEvent, FormEvent } from 'react'

export interface NewTarefaProps {
  onAddTask: (task: string) => void
}

export function NewTask({ onAddTask }: NewTarefaProps) {
  const [newTask, setNewTask] = useState<string>('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    onAddTask(newTask)
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  const isNewTaskEmpty = newTask.length === 0

  return (
    <article>
      <form
        className="flex items-center gap-8 absolute w-[28.25rem] h-[3.375rem] left-1/2 transform -translate-x-[calc(50%+4.9375rem)] top-[11.125rem] mr-[200px] "
        onSubmit={handleCreateNewTask}
      >
        <div>
          <textarea
            name="comment"
            className="bg-[#262626] w-[35.875rem] h-14 p-4 rounded-lg border-none outline-none text-white flex-1 ml-[-2.7rem] mr-2"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            required
          />
          <button
            type="submit"
            disabled={isNewTaskEmpty}
            className="flex justify-center items-center w-24 h-14 absolute top-[0.0625rem] left-[36.0625rem] rounded-lg p-4 gap-2 bg-[#1E6F9F] text-white font-inter font-normal text-[14px] leading-[1.4] mr-8"
          >
            Criar{' '}
            <Image
              src="/plus.svg"
              width={380}
              height={380}
              quality={100}
              alt="+"
              className="w-4"
            />
          </button>
        </div>
      </form>
    </article>
  )
}
