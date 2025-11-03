import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper for handling Cosmic SDK errors
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch today's meals
export async function getTodayMeals() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const response = await cosmic.objects
      .find({ 
        type: 'meals',
        'metadata.date': today
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch meals');
  }
}

// Fetch today's workouts
export async function getTodayWorkouts() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const response = await cosmic.objects
      .find({ 
        type: 'workouts',
        'metadata.date': today
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch workouts');
  }
}

// Fetch all exercises
export async function getExercises() {
  try {
    const response = await cosmic.objects
      .find({ type: 'exercises' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch exercises');
  }
}

// Fetch user goals
export async function getGoals() {
  try {
    const response = await cosmic.objects
      .find({ type: 'goals' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch goals');
  }
}

// Create a meal entry
export async function createMeal(data: {
  title: string;
  meal_type: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  description?: string;
}) {
  const today = new Date().toISOString().split('T')[0];
  
  return await cosmic.objects.insertOne({
    title: data.title,
    type: 'meals',
    metadata: {
      date: today,
      meal_type: data.meal_type,
      calories: data.calories,
      protein: data.protein,
      carbs: data.carbs,
      fats: data.fats,
      description: data.description || '',
    }
  });
}

// Create a workout entry
export async function createWorkout(data: {
  title: string;
  workout_type: string;
  duration?: number;
  notes?: string;
}) {
  const today = new Date().toISOString().split('T')[0];
  
  return await cosmic.objects.insertOne({
    title: data.title,
    type: 'workouts',
    metadata: {
      date: today,
      workout_type: data.workout_type,
      duration: data.duration || 0,
      notes: data.notes || '',
    }
  });
}