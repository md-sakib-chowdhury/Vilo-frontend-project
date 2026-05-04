import { useState } from 'react'
import { MdSearch, MdNotifications, MdMenu } from 'react-icons/md'
import { BsGlobe, BsClock } from 'react-icons/bs'

function Navbar({ onMenuClick }) {
    const [search, setSearch] = useState('')

    return (
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-10">

            {/* Left - Hamburger + Search */}
            <div className="flex items-center gap-3 flex-1">
                {/* Hamburger - only mobile */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                >
                    <MdMenu size={22} className="text-gray-600" />
                </button>

                {/* Search */}
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-full max-w-sm">
                    <MdSearch size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Right - Icons + Profile */}
            <div className="flex items-center gap-2 lg:gap-4 ml-3">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition hidden sm:flex">
                    <BsGlobe size={18} className="text-gray-500" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition hidden sm:flex">
                    <BsClock size={18} className="text-gray-500" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition relative">
                    <MdNotifications size={20} className="text-gray-500" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        src="https://i.pravatar.cc/32"
                        alt="James R."
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">James R.</span>
                    <svg className="w-4 h-4 text-gray-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Navbar