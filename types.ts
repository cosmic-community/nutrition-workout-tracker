// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Meal entry with nutritional information
export interface Meal extends CosmicObject {
  type: 'meals';
  metadata: {
    date: string;
    meal_type: MealType;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    description?: string;
    foods?: string[];
  };
}

// Workout log entry
export interface Workout extends CosmicObject {
  type: 'workouts';
  metadata: {
    date: string;
    exercises: Exercise[];
    duration?: number;
    notes?: string;
    workout_type?: WorkoutType;
  };
}

// Exercise definition
export interface Exercise extends CosmicObject {
  type: 'exercises';
  metadata: {
    muscle_group: MuscleGroup;
    equipment?: string;
    instructions?: string;
    difficulty?: DifficultyLevel;
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// User nutrition goals
export interface Goal extends CosmicObject {
  type: 'goals';
  metadata: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    start_date?: string;
    target_weight?: number;
  };
}

// Progress tracking entry
export interface Progress extends CosmicObject {
  type: 'progress';
  metadata: {
    date: string;
    weight?: number;
    body_fat?: number;
    measurements?: {
      chest?: number;
      waist?: number;
      hips?: number;
      arms?: number;
    };
    notes?: string;
  };
}

// Type literals for select-dropdown values
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';
export type WorkoutType = 'strength' | 'cardio' | 'flexibility' | 'sports';
export type MuscleGroup = 'chest' | 'back' | 'shoulders' | 'arms' | 'legs' | 'core' | 'full-body';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Form data types
export interface MealFormData {
  title: string;
  meal_type: MealType;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  description?: string;
}

export interface WorkoutFormData {
  title: string;
  workout_type: WorkoutType;
  duration?: number;
  notes?: string;
}

// Type guards
export function isMeal(obj: CosmicObject): obj is Meal {
  return obj.type === 'meals';
}

export function isWorkout(obj: CosmicObject): obj is Workout {
  return obj.type === 'workouts';
}

export function isExercise(obj: CosmicObject): obj is Exercise {
  return obj.type === 'exercises';
}