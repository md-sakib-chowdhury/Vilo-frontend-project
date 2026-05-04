import { useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'

const todosData = [
    { id: 1, title: 'Lorem Ipsum', client: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', priority: 'High', done: true },
    { id: 2, title: 'Lorem Ipsum', client: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', priority: 'High', done: false },
    { id: 3, title: 'Lorem Ipsum', client: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', priority: 'High', done: true },
    { id: 4, title: 'Lorem Ipsum', client: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', priority: 'High', done: false },
    { id: 5, title: 'Lorem Ipsum', client: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', priority: 'High', done: true },
]

function TasksAndTodo() {
    const [todos, setTodos] = useState(todosData)
    const [filter, setFilter] = useState('All')

    const toggleTodo = (id) => {
        setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
    }

    return (
        <div className="bg-white rounded-xl p-4 flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Tasks & To-Do</h3>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-green-700 transition">
                        <MdCheckCircle size={14} />
                        Mark as Done
                    </button>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 text-gray-600 outline-none cursor-pointer"
                    >
                        <option>All</option>
                        <option>Done</option>
                        <option>Pending</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="text-left text-xs text-gray-400 font-medium pb-2">TITLE</th>
                            <th className="text-left text-xs text-gray-400 font-medium pb-2">CLIENT</th>
                            <th className="text-left text-xs text-gray-400 font-medium pb-2">DUE DATE</th>
                            <th className="text-left text-xs text-gray-400 font-medium pb-2">PRIORITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, i) => (
                            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                <td className="py-3">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={todo.done}
                                            onChange={() => toggleTodo(todo.id)}
                                            className="w-4 h-4 accent-green-600 cursor-pointer"
                                        />
                                        <span className={`text-sm ${todo.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                            {todo.title}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-3 text-gray-500 text-xs">{todo.client}</td>
                                <td className="py-3 text-gray-500 text-xs">{todo.dueDate}</td>
                                <td className="py-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-500">
                                        {todo.priority}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TasksAndTodo