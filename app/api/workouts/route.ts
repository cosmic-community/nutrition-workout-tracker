import { NextResponse } from 'next/server'
import { createWorkout } from '@/lib/cosmic'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const result = await createWorkout({
      title: data.title,
      workout_type: data.workout_type,
      duration: data.duration,
      notes: data.notes,
    })
    
    return NextResponse.json({ success: true, object: result.object })
  } catch (error) {
    console.error('Error creating workout:', error)
    return NextResponse.json(
      { error: 'Failed to create workout' },
      { status: 500 }
    )
  }
}