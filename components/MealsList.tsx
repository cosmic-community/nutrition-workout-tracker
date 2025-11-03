import type { Meal } from '@/types'
import Link from 'next/link'

interface MealsListProps {
  meals: Meal[];
}

export default function MealsList({ meals }: MealsListProps) {
  if (meals.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No meals logged today</p>
        <Link href="/meals/new" className="text-primary hover:text-primary-dark font-medium">
          Add your first meal →
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {meals.map((meal) => (
        <div 
          key={meal.id}
          className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-gray-900">{meal.title}</h3>
              <p className="text-sm text-gray-600 capitalize">
                {meal.metadata?.meal_type || 'meal'}
              </p>
            </div>
            <span className="text-sm font-medium text-primary">
              {meal.metadata?.calories || 0} kcal
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="text-center">
              <p className="text-xs text-gray-600">Protein</p>
              <p className="text-sm font-medium text-gray-900">
                {meal.metadata?.protein || 0}g
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600">Carbs</p>
              <p className="text-sm font-medium text-gray-900">
                {meal.metadata?.carbs || 0}g
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600">Fats</p>
              <p className="text-sm font-medium text-gray-900">
                {meal.metadata?.fats || 0}g
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}