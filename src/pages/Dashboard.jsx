import { useState } from 'react'
import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import StatsCard from '../components/dashboard/StatsCard'
import TaskList from '../components/dashboard/TaskList'
import CalendarWidget from '../components/dashboard/CalendarWidget'
import BillingTable from '../components/dashboard/BillingTable'
import TasksAndTodo from '../components/dashboard/TasksAndTodo'
import ActiveCases from '../components/dashboard/ActiveCases'
import { MdHome, MdPeople, MdDescription, MdGroup, MdCheckBox } from 'react-icons/md'

const stats = [
    {
        title: 'Total Cases',
        value: '14',
        icon: <MdHome size={20} className="text-green-600" />,
        bgColor: 'bg-green-50',
        iconBg: 'bg-green-100',
    },
    {
        title: 'Total Advocates',
        value: '10',
        icon: <MdPeople size={20} className="text-blue-600" />,
        bgColor: 'bg-blue-50',
        iconBg: 'bg-blue-100',
    },
    {
        title: 'Total Documents',
        value: '11',
        icon: <MdDescription size={20} className="text-yellow-600" />,
        bgColor: 'bg-yellow-50',
        iconBg: 'bg-yellow-100',
    },
    {
        title: 'Total Team Members',
        value: '20',
        icon: <MdGroup size={20} className="text-purple-600" />,
        bgColor: 'bg-purple-50',
        iconBg: 'bg-purple-100',
    },
    {
        title: 'Total To-Dos',
        value: '12',
        icon: <MdCheckBox size={20} className="text-red-500" />,
        bgColor: 'bg-red-50',
        iconBg: 'bg-red-100',
    },
]

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <Navbar onMenuClick={() => setSidebarOpen(true)} />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-6">
                    {/* Page Title */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-sm text-gray-400 mt-1">Lorem ipsum is dummy text for dummy</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {stats.map((stat, i) => (
                            <StatsCard key={i} {...stat} />
                        ))}
                    </div>

                    {/* Tasks + Calendar Row */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        <TaskList title="Tasks Due Today" />
                        <TaskList title="Today's To-Do's" />
                        <CalendarWidget />
                    </div>

                    {/* Billing + Tasks Table Row */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        <BillingTable />
                        <TasksAndTodo />
                    </div>

                    {/* Active Cases */}
                    <ActiveCases />
                </main>
            </div>
        </div>
    )
}

export default Dashboard