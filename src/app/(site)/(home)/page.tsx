'use client'

import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'

import { Header as ListHeader } from '@/app/components/list/header'
import { Button } from '@/app/components/buttom'
import { Input } from '@/app/components/input'
import { Item } from '@/app/components/list/items'
import { Empty } from '@/app/components/list/empty'
import { Header } from '@/app/components/header'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }
    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <main className="">
      <Header />

      <section className="max-w-full w-full mx-auto">
        <div className="flex flex-1 justify-center gap-2 mr-auto ml-auto max-w-[736px] max-h-[50px] z-10 -mt-8 mb-16">
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className="flex flex-col gap-6 max-w-[736px] mr-auto ml-auto">
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div className="flex flex-col gap-3">
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}
