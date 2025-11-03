import { getTodayMeals } from '@/lib/cosmic'
import MealCard from '@/components/MealCard'
import Link from 'next/link'

export default async function MealsPage() {
  const meals = await getTodayMeals();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Meals
          </h1>
          <p className="text-gray-600">
            Track your daily nutrition
          </p>
        </div>
        <Link href="/meals/new" className="btn-primary">
          + Add Meal
        </Link>
      </div>
      
      {meals.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-500 mb-4">No meals logged today</p>
          <Link href="/meals/new" className="btn-primary inline-block">
            Log Your First Meal
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map(meal => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </div>
  )
}