const cases = [
    {
        id: 1,
        title: 'Work with your attorney to conduct.',
        client: 'Client Name',
        status: 'Awaiting Docs',
        assigned: [
            'https://i.pravatar.cc/32?img=1',
            'https://i.pravatar.cc/32?img=2',
            'https://i.pravatar.cc/32?img=3',
        ],
        assignedNames: ['James Ryan', 'James Ryan', 'James Ryan'],
    },
    {
        id: 2,
        title: 'Work with your attorney to conduct.',
        client: 'Client Name',
        status: 'Awaiting Docs',
        assigned: [
            'https://i.pravatar.cc/32?img=4',
            'https://i.pravatar.cc/32?img=5',
            'https://i.pravatar.cc/32?img=6',
        ],
        assignedNames: ['James Ryan', 'James Ryan', 'James Ryan'],
    },
    {
        id: 3,
        title: 'Work with your attorney to conduct.',
        client: 'Client Name',
        status: 'Awaiting Docs',
        assigned: [
            'https://i.pravatar.cc/32?img=7',
            'https://i.pravatar.cc/32?img=8',
            'https://i.pravatar.cc/32?img=9',
        ],
        assignedNames: ['James Ryan', 'James Ryan', 'James Ryan'],
    },
]

function ActiveCases() {
    return (
        <div className="bg-white rounded-xl p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Active Cases</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer">
                    <span>Filter by: Case Type</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Cases */}
            <div className="space-y-4">
                {cases.map((c) => (
                    <div key={c.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-sm transition">
                        {/* Title & Status */}
                        <div className="flex items-start justify-between mb-2">
                            <p className="text-sm font-semibold text-gray-800">{c.title}</p>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-500 whitespace-nowrap ml-2">
                                {c.status}
                            </span>
                        </div>

                        {/* Client */}
                        <div className="flex items-center gap-2 mb-3">
                            <img
                                src="https://i.pravatar.cc/24?img=10"
                                alt="client"
                                className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="text-xs text-gray-500">{c.client}</span>
                        </div>

                        {/* Assigned */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 uppercase tracking-wide">Assigned to:</span>
                            <div className="flex items-center gap-1">
                                {c.assigned.map((avatar, i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        <img
                                            src={avatar}
                                            alt={c.assignedNames[i]}
                                            className="w-6 h-6 rounded-full object-cover border-2 border-white"
                                        />
                                        <span className="text-xs text-gray-500">{c.assignedNames[i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActiveCases