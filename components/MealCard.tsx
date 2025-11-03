import type { Meal } from '@/types'

interface MealCardProps {
  meal: Meal;
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{meal.title}</h3>
          <p className="text-sm text-gray-600 capitalize mt-1">
            {meal.metadata?.meal_type || 'meal'}
          </p>
        </div>
        <span className="text-lg font-bold text-primary">
          {meal.metadata?.calories || 0}
        </span>
      </div>
      
      {meal.metadata?.description && (
        <p className="text-sm text-gray-600 mb-4">{meal.metadata.description}</p>
      )}
      
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-200">
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">Protein</p>
          <p className="text-sm font-semibold text-gray-900">
            {meal.metadata?.protein || 0}g
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">Carbs</p>
          <p className="text-sm font-semibold text-gray-900">
            {meal.metadata?.carbs || 0}g
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">Fats</p>
          <p className="text-sm font-semibold text-gray-900">
            {meal.metadata?.fats || 0}g
          </p>
        </div>
      </div>
    </div>
  )
}