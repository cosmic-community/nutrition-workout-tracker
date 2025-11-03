import type { Workout } from '@/types'
import Link from 'next/link'

interface WorkoutsListProps {
  workouts: Workout[];
}

export default function WorkoutsList({ workouts }: WorkoutsListProps) {
  if (workouts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No workouts logged today</p>
        <Link href="/workouts/new" className="text-primary hover:text-primary-dark font-medium">
          Log your first workout →
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div 
          key={workout.id}
          className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-gray-900">{workout.title}</h3>
              <p className="text-sm text-gray-600 capitalize">
                {workout.metadata?.workout_type || 'workout'}
              </p>
            </div>
            {workout.metadata?.duration && (
              <span className="text-sm font-medium text-secondary">
                {workout.metadata.duration} min
              </span>
            )}
          </div>
          
          {workout.metadata?.notes && (
            <p className="text-sm text-gray-600 mt-2">
              {workout.metadata.notes}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}