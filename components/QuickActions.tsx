import Link from 'next/link'

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Link 
        href="/meals/new"
        className="card hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-br from-primary to-primary-dark text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🍽️</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Add Meal</h3>
            <p className="text-sm text-white text-opacity-90">Log your nutrition</p>
          </div>
        </div>
      </Link>
      
      <Link 
        href="/workouts/new"
        className="card hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-br from-secondary to-secondary-dark text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-2xl">💪</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Log Workout</h3>
            <p className="text-sm text-white text-opacity-90">Track your exercise</p>
          </div>
        </div>
      </Link>
      
      <Link 
        href="/exercises"
        className="card hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-br from-accent to-accent-dark text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-2xl">📚</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Exercise Library</h3>
            <p className="text-sm text-white text-opacity-90">Browse exercises</p>
          </div>
        </div>
      </Link>
    </div>
  )
}