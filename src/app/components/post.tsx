import { Trash } from '@phosphor-icons/react'

interface Content {
  type: 'text'
  content: string
}

export interface PostType {
  id: number
  content: Content[]
}

interface PostProps {
  post: PostType
  onTaskCompletion?: (taskId: number) => void
  onDeleteTask?: (taskId: number) => void
}

export function Post({ post, onTaskCompletion, onDeleteTask }: PostProps) {
  return (
    <article className="flex flex-row items-center p-4 gap-3 w-[736px] h-[72px] bg-[#262626] border border-[#333333] shadow-lg rounded-lg">
      <ul className="flex justify-between items-center w-[632px] h-[40px] text-[#f2f2f2] text-[14px] leading-[140%] font-normal">
        {post.content.map((line, index) => {
          if (line.type === 'text') {
            return (
              <li key={index} className="relative list-none">
                <label className="flex items-center cursor-pointer space-x-3">
                  <input
                    type="checkbox"
                    id={`checkbox-${post.id}`}
                    onChange={() => onTaskCompletion?.(post.id)}
                    className="peer hidden"
                  />
                  {/* Custom checkbox */}
                  <div className="w-6 h-6 border-2 border-[#0063BF] rounded-full flex items-center justify-center peer-checked:bg-[#0063BF]">
                    <span className="hidden peer-checked:block text-white">
                      ✓
                    </span>
                  </div>
                  <span>{line.content}</span>
                </label>
              </li>
            )
          }
          return null
        })}
        <aside>
          <button
            onClick={() => onDeleteTask?.(post.id)}
            className="bg-transparent border-0 text-gray-400 cursor-pointer flex filter drop-shadow-md"
          >
            <Trash size={21} />
          </button>
        </aside>
      </ul>
    </article>
  )
}
