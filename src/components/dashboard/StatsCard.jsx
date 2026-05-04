function StatsCard({ title, value, icon, bgColor, iconBg }) {
    return (
        <div className={`flex items-center justify-between p-4 rounded-xl ${bgColor} flex-1 min-w-[140px]`}>
            <div>
                <p className="text-xs text-gray-500 font-medium mb-1">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
            <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}>
                {icon}
            </div>
        </div>
    )
}

export default StatsCard