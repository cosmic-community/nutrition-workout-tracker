import { NextResponse } from 'next/server'
import { createMeal } from '@/lib/cosmic'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const result = await createMeal({
      title: data.title,
      meal_type: data.meal_type,
      calories: data.calories,
      protein: data.protein,
      carbs: data.carbs,
      fats: data.fats,
      description: data.description,
    })
    
    return NextResponse.json({ success: true, object: result.object })
  } catch (error) {
    console.error('Error creating meal:', error)
    return NextResponse.json(
      { error: 'Failed to create meal' },
      { status: 500 }
    )
  }
}