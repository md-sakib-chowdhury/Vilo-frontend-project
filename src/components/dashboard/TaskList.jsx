import { useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'

const initialTasks = [
    { id: 1, title: 'Work with your attorney to conduct.', date: 'Jul 13, 2:29 AM', done: true },
    { id: 2, title: 'Work with your attorney to conduct.', date: 'Jul 13, 2:29 AM', done: false },
    { id: 3, title: 'Work with your attorney to conduct.', date: 'Jul 13, 2:29 AM', done: false },
    { id: 4, title: 'Work with your attorney to conduct.', date: 'Jul 13, 2:29 AM', done: false },
    { id: 5, title: 'Work with your attorney to conduct.', date: 'Jul 13, 2:29 AM', done: false },
]

function TaskList({ title }) {
    const [tasks, setTasks] = useState(initialTasks)

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
    }

    const doneCount = tasks.filter(t => t.done).length

    return (
        <div className="bg-white rounded-xl p-4 flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <button className="flex items-center gap-1.5 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-green-700 transition">
                    <MdCheckCircle size={14} />
                    Mark as Done
                </button>
            </div>

            {/* Tasks */}
            <div className="space-y-3">
                {tasks.map(task => (
                    <div key={task.id} className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => toggleTask(task.id)}
                            className="mt-1 w-4 h-4 accent-green-600 cursor-pointer"
                        />
                        <div>
                            <p className={`text-sm font-medium ${task.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                {task.title}
                            </p>
                            <p className="text-xs text-gray-400">{task.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress */}
            <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs text-green-600 font-medium">{doneCount} of {tasks.length} tasks completed</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${(doneCount / tasks.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TaskList