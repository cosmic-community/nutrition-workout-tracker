import AddWorkoutForm from '@/components/AddWorkoutForm'
import Link from 'next/link'

export default function NewWorkoutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link href="/workouts" className="text-primary hover:text-primary-dark mb-4 inline-block">
          ← Back to Workouts
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Log Workout
        </h1>
        <p className="text-gray-600">
          Record your exercise session
        </p>
      </div>
      
      <div className="card">
        <AddWorkoutForm />
      </div>
    </div>
  )
}