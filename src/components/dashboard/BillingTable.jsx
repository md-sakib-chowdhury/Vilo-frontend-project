const billingData = [
    { id: '#12345', name: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', status: 'Paid' },
    { id: '#12345', name: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', status: 'Unpaid' },
    { id: '#12345', name: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', status: 'Paid' },
    { id: '#12345', name: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', status: 'Paid' },
    { id: '#12345', name: 'Lorem Ipsum', dueDate: 'Jul 13, 2025', status: 'Unpaid' },
]

function BillingTable() {
    return (
        <div className="bg-white rounded-xl p-4 flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Billing Overview</h3>
                <button className="flex items-center gap-1.5 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-green-700 transition">
                    Send Invoice
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="text-left text-xs text-gray-400 font-medium pb-2">ID</th>
                            <th className="text-left text-xs text-gray-400 font-medium pb-2">NAME</th>
                            <th className="text-left text-xs text-gray-400 font-medium pb-2">DUE DATE</th>
                            <th className="text-left text-xs text-gray-400 font-medium pb-2">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {billingData.map((row, i) => (
                            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                <td className="py-3 text-gray-500 text-xs">{row.id}</td>
                                <td className="py-3 text-gray-700 font-medium">{row.name}</td>
                                <td className="py-3 text-gray-500 text-xs">{row.dueDate}</td>
                                <td className="py-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${row.status === 'Paid'
                                            ? 'bg-green-50 text-green-600'
                                            : 'bg-red-50 text-red-500'
                                        }`}>
                                        {row.status}
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

export default BillingTable