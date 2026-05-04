import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-6xl font-bold text-green-600">404</h1>
            <p className="text-xl text-gray-500 mt-4">Page not found</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                Go to Dashboard
            </Link>
        </div>
    )
}

export default NotFound