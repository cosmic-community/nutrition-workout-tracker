import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Nutrition Tracker</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/meals" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Meals
            </Link>
            <Link 
              href="/workouts" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Workouts
            </Link>
            <Link 
              href="/exercises" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Exercises
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}