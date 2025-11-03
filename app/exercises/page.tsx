import { getExercises } from '@/lib/cosmic'
import ExerciseCard from '@/components/ExerciseCard'
import type { Exercise } from '@/types'

export default async function ExercisesPage() {
  const exercises = await getExercises();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Exercise Library
        </h1>
        <p className="text-gray-600">
          Browse exercises by muscle group
        </p>
      </div>
      
      {exercises.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-500">No exercises available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise: Exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  )
}