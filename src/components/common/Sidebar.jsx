import { useState } from 'react'
import {
    MdDashboard, MdPeople, MdPerson, MdGavel, MdFolder,
    MdCheckBox, MdBook, MdDescription, MdReceipt, MdList,
    MdAccessTime, MdAttachMoney, MdPayment, MdMessage, MdStar,
    MdChevronRight, MdAdd, MdPersonAdd, MdUpload
} from 'react-icons/md'
import { PieChart, Pie, Cell } from 'recharts'

const menuItems = [
    { icon: MdDashboard, label: 'Dashboard', active: true },
    { icon: MdPeople, label: 'Staff', hasArrow: true },
    { icon: MdPerson, label: 'Client' },
    { icon: MdGavel, label: 'Advocate' },
    { icon: MdFolder, label: 'Cases' },
    { icon: MdCheckBox, label: 'To-Do' },
    { icon: MdBook, label: 'Case Diary / Cale' },
    { icon: MdDescription, label: 'Documents' },
    { icon: MdReceipt, label: 'Bills / Invoices' },
    { icon: MdList, label: 'Cause List' },
    { icon: MdAccessTime, label: 'Timesheet' },
    { icon: MdAttachMoney, label: 'Expense' },
    { icon: MdPayment, label: 'Fee Received' },
    { icon: MdMessage, label: 'Messenger' },
    { icon: MdStar, label: 'Plan' },
]

const pieData = [
    { name: 'Open Cases', value: 53, color: '#6366f1' },
    { name: 'Billed Hours', value: 53, color: '#f43f5e' },
    { name: 'Unpaid', value: 53, color: '#22c55e' },
]

const recentActivity = [
    { label: 'Lorem ipsum', time: 'Jul 13, 2:29 AM' },
    { label: 'Lorem ipsum', time: 'Jul 13, 2:29 AM' },
    { label: 'Lorem ipsum', time: 'Jul 13, 2:29 AM' },
]

function Sidebar({ isOpen, onClose }) {
    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={`
        fixed top-0 left-0 h-full w-[220px] bg-white border-r border-gray-100
        z-30 flex flex-col overflow-y-auto transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
                {/* Logo */}
                <div className="px-5 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                        <span className="text-xl font-bold text-gray-900">ADVOCATE</span>
                        <span className="text-xl font-bold text-green-600">GO</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">Powered by example</p>
                </div>

                {/* Menu */}
                <nav className="flex-1 px-3 py-3">
                    {menuItems.map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg mb-0.5 text-sm transition-all
                ${item.active
                                    ? 'bg-green-600 text-white font-semibold'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={18} />
                                <span>{item.label}</span>
                            </div>
                            {item.hasArrow && <MdChevronRight size={16} />}
                        </button>
                    ))}
                </nav>

                {/* Quick Metrics */}
                <div className="px-4 py-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Metrics</p>
                    <div className="flex items-center gap-3">
                        <PieChart width={60} height={60}>
                            <Pie data={pieData} cx={25} cy={25} innerRadius={18} outerRadius={28} dataKey="value" strokeWidth={0}>
                                {pieData.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div className="space-y-1">
                            {pieData.map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-[11px] text-gray-500">
                                        {item.name === 'Open Cases' ? 'Open Cases' :
                                            item.name === 'Billed Hours' ? 'Total Billed Hours' : 'Unpaid Invoices'}: {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="px-4 py-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Recent Activity</p>
                    {recentActivity.map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-1.5">
                            <div>
                                <p className="text-xs font-medium text-gray-700">{item.label}</p>
                                <p className="text-[10px] text-gray-400">{item.time}</p>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="px-4 py-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Quick Actions</p>
                    {[
                        { icon: MdAdd, label: 'Create case' },
                        { icon: MdPersonAdd, label: 'Add Client' },
                        { icon: MdUpload, label: 'Upload Document' },
                    ].map((action, i) => (
                        <button key={i} className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-gray-200 mb-2 text-sm text-gray-600 hover:bg-gray-50 transition">
                            <span>{action.label}</span>
                            <action.icon size={16} className="text-green-600" />
                        </button>
                    ))}
                </div>
            </aside>
        </>
    )
}

export default Sidebar