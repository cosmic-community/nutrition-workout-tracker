import { getTodayMeals, getTodayWorkouts, getGoals } from '@/lib/cosmic'
import DashboardStats from '@/components/DashboardStats'
import MealsList from '@/components/MealsList'
import WorkoutsList from '@/components/WorkoutsList'
import QuickActions from '@/components/QuickActions'
import type { Meal } from '@/types'

export default async function HomePage() {
  const meals = await getTodayMeals();
  const workouts = await getTodayWorkouts();
  const goals = await getGoals();
  
  // Calculate daily totals from meals
  const dailyTotals = meals.reduce((acc: { calories: number; protein: number; carbs: number; fats: number }, meal: Meal) => {
    return {
      calories: acc.calories + (meal.metadata?.calories || 0),
      protein: acc.protein + (meal.metadata?.protein || 0),
      carbs: acc.carbs + (meal.metadata?.carbs || 0),
      fats: acc.fats + (meal.metadata?.fats || 0),
    };
  }, { calories: 0, protein: 0, carbs: 0, fats: 0 });
  
  const userGoal = goals[0];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Today's Dashboard
        </h1>
        <p className="text-gray-600">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
      
      {/* Quick Actions */}
      <QuickActions />
      
      {/* Dashboard Stats */}
      <DashboardStats 
        dailyTotals={dailyTotals}
        goal={userGoal}
      />
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Today's Meals */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Today's Meals</h2>
          <MealsList meals={meals} />
        </div>
        
        {/* Today's Workouts */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Today's Workouts</h2>
          <WorkoutsList workouts={workouts} />
        </div>
      </div>
    </div>
  )
}