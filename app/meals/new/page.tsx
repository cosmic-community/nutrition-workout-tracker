import AddMealForm from '@/components/AddMealForm'
import Link from 'next/link'

export default function NewMealPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link href="/meals" className="text-primary hover:text-primary-dark mb-4 inline-block">
          ← Back to Meals
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Add Meal
        </h1>
        <p className="text-gray-600">
          Log your meal with nutritional information
        </p>
      </div>
      
      <div className="card">
        <AddMealForm />
      </div>
    </div>
  )
}