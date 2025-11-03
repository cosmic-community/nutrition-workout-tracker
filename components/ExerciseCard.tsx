import type { Exercise } from '@/types'

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      {exercise.metadata?.image && (
        <img 
          src={`${exercise.metadata.image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
          alt={exercise.title}
          width="300"
          height="200"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      
      <h3 className="font-bold text-lg text-gray-900 mb-2">{exercise.title}</h3>
      
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-xs bg-primary bg-opacity-10 text-primary px-2 py-1 rounded capitalize">
          {exercise.metadata?.muscle_group || 'general'}
        </span>
        {exercise.metadata?.difficulty && (
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded capitalize">
            {exercise.metadata.difficulty}
          </span>
        )}
      </div>
      
      {exercise.metadata?.instructions && (
        <p className="text-sm text-gray-600">
          {exercise.metadata.instructions}
        </p>
      )}
    </div>
  )
}