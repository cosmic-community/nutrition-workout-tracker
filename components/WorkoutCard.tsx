import type { Workout } from '@/types'

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{workout.title}</h3>
          <p className="text-sm text-gray-600 capitalize mt-1">
            {workout.metadata?.workout_type || 'workout'}
          </p>
        </div>
        {workout.metadata?.duration && (
          <span className="text-lg font-bold text-secondary">
            {workout.metadata.duration}m
          </span>
        )}
      </div>
      
      {workout.metadata?.notes && (
        <p className="text-sm text-gray-600">
          {workout.metadata.notes}
        </p>
      )}
    </div>
  )
}