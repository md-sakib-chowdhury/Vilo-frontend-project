const days = [
    { day: '05', label: 'Mon', dots: ['bg-green-400', 'bg-blue-400', 'bg-gray-300'] },
    { day: '06', label: 'Tue', dots: ['bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-gray-300'] },
    { day: '07', label: 'Wed', active: true, dots: ['bg-green-400', 'bg-blue-400', 'bg-gray-300'] },
    { day: '08', label: 'Thu', dots: ['bg-green-400', 'bg-yellow-400', 'bg-gray-300'] },
    { day: '09', label: 'Fri', dots: ['bg-green-400', 'bg-blue-400', 'bg-gray-300'] },
]

const events = [
    { time: '09:00 am', title: 'Client Meeting', desc: 'Prepare evidence for cross examination', color: 'bg-green-500' },
    { time: '09:00 am', title: 'Client Meeting', desc: 'Prepare evidence for cross examination', color: 'bg-purple-500' },
    { time: '09:00 am', title: 'Client Meeting', desc: 'Prepare evidence for cross examination', color: 'bg-yellow-500' },
]

function CalendarWidget() {
    return (
        <div className="bg-white rounded-xl p-4 w-full lg:w-[280px] shrink-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Today, 07 July</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer">
                    <span>Weekly</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Days */}
            <div className="flex justify-between mb-4">
                {days.map((d, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                        <span className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold
              ${d.active ? 'bg-gray-900 text-white' : 'text-gray-700'}`}>
                            {d.day}
                        </span>
                        <span className="text-xs text-gray-400">{d.label}</span>
                        <div className="flex gap-0.5">
                            {d.dots.map((dot, j) => (
                                <div key={j} className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Time slots */}
            <div className="space-y-2">
                <p className="text-xs text-gray-400">08:00 am</p>
                <p className="text-xs text-gray-400">09:00 am</p>
                {events.map((event, i) => (
                    <div key={i} className={`${event.color} rounded-xl p-3 text-white`}>
                        <p className="text-xs opacity-80">{event.time}</p>
                        <p className="text-sm font-semibold">{event.title}</p>
                        <p className="text-xs opacity-80">{event.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarWidget