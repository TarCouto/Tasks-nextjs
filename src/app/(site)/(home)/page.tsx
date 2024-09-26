'use client'
import { NewTask } from '@/app/components/form-task'
import { Header } from '@/app/components/header'
import { Post } from '@/app/components/post'
import { useState } from 'react'

interface Task {
  id: number
  content: string
  completed: boolean
}

const initialTasks: Task[] = [
  { id: 1, content: 'Fazer compras', completed: false },
  { id: 2, content: 'Limpar a casa', completed: false },
  { id: 3, content: 'Estudar React', completed: false },
]

const initialCompletedTasks = 0

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [completedTasks, setCompletedTasks] = useState<number>(
    initialCompletedTasks,
  )

  function addTask(task: string) {
    const newTask: Task = {
      id: tasks.length + 1,
      content: task,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  function handleTaskCompletion(taskId: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    )
    setTasks(updatedTasks)

    const completedCount = updatedTasks.filter((task) => task.completed).length
    setCompletedTasks(completedCount)
  }

  function handleDeleteTask(tasksToDelete: Task) {
    // Filtra as tarefas para remover a tarefa que está sendo deletada
    const tasksWithoutDeleteOne = tasks.filter(
      (task) => task.id !== tasksToDelete.id,
    )
    setTasks(tasksWithoutDeleteOne)

    // Recalcula o número de tarefas concluídas com base nas tarefas restantes
    const completedCount = tasksWithoutDeleteOne.filter(
      (task) => task.completed,
    ).length
    setCompletedTasks(completedCount)
  }

  const countTask = tasks.length

  return (
    <div>
      <Header />
      <div>
        <div>
          <NewTask onAddTask={addTask} />
        </div>
        <main className="flex flex-col items-start p-0 gap-6 absolute w-[736px] h-[287px] left-1/2 transform -translate-x-1/2 top-[291px]">
          <header className="flex justify-between items-center w-full">
            <div className="font-inter font-bold leading-[17px] text-[#4EA8DE] whitespace-nowrap text-left flex-none order-0 flex-grow-0">
              <span>Tarefas Criadas: {countTask}</span>
            </div>
            <aside className="font-inter font-bold leading-[17px] text-[#8284FA] whitespace-nowrap text-right flex-auto order-0 flex-grow-0">
              <span>Concluídas: {completedTasks}</span>
            </aside>
          </header>
          {tasks.map((task) => (
            <Post
              key={task.id}
              post={{
                id: task.id,
                content: [{ type: 'text', content: task.content }],
              }}
              onTaskCompletion={handleTaskCompletion}
              onDeleteTask={() => handleDeleteTask(task)}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
