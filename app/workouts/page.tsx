import { getTodayWorkouts } from '@/lib/cosmic'
import WorkoutCard from '@/components/WorkoutCard'
import Link from 'next/link'
import type { Workout } from '@/types'

export default async function WorkoutsPage() {
  const workouts = await getTodayWorkouts();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Workouts
          </h1>
          <p className="text-gray-600">
            Track your exercise sessions
          </p>
        </div>
        <Link href="/workouts/new" className="btn-primary">
          + Log Workout
        </Link>
      </div>
      
      {workouts.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-500 mb-4">No workouts logged today</p>
          <Link href="/workouts/new" className="btn-primary inline-block">
            Log Your First Workout
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout: Workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </div>
  )
}