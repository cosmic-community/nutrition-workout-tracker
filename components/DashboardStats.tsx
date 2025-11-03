import type { Goal } from '@/types'

interface DashboardStatsProps {
  dailyTotals: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  goal?: Goal;
}

export default function DashboardStats({ dailyTotals, goal }: DashboardStatsProps) {
  const goalCalories = goal?.metadata?.calories || 2000;
  const goalProtein = goal?.metadata?.protein || 150;
  const goalCarbs = goal?.metadata?.carbs || 200;
  const goalFats = goal?.metadata?.fats || 65;
  
  const stats = [
    {
      label: 'Calories',
      value: dailyTotals.calories,
      goal: goalCalories,
      unit: 'kcal',
      color: 'bg-primary',
    },
    {
      label: 'Protein',
      value: dailyTotals.protein,
      goal: goalProtein,
      unit: 'g',
      color: 'bg-secondary',
    },
    {
      label: 'Carbs',
      value: dailyTotals.carbs,
      goal: goalCarbs,
      unit: 'g',
      color: 'bg-accent',
    },
    {
      label: 'Fats',
      value: dailyTotals.fats,
      goal: goalFats,
      unit: 'g',
      color: 'bg-orange-500',
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const percentage = Math.min(100, Math.round((stat.value / stat.goal) * 100));
        
        return (
          <div key={stat.label} className="stat-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stat.value}
                  <span className="text-sm font-normal text-gray-500 ml-1">
                    / {stat.goal} {stat.unit}
                  </span>
                </p>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {percentage}%
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${stat.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  )
}