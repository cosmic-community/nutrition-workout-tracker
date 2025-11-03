'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddMealForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    meal_type: 'breakfast',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    description: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/meals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          meal_type: formData.meal_type,
          calories: Number(formData.calories),
          protein: Number(formData.protein),
          carbs: Number(formData.carbs),
          fats: Number(formData.fats),
          description: formData.description,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to create meal');
      
      router.push('/meals');
      router.refresh();
    } catch (error) {
      console.error('Error creating meal:', error);
      alert('Failed to create meal. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Meal Name *
        </label>
        <input
          type="text"
          required
          className="input-field"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="e.g., Chicken Salad"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Meal Type *
        </label>
        <select
          className="input-field"
          value={formData.meal_type}
          onChange={(e) => setFormData({ ...formData, meal_type: e.target.value })}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calories *
          </label>
          <input
            type="number"
            required
            min="0"
            className="input-field"
            value={formData.calories}
            onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
            placeholder="0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Protein (g) *
          </label>
          <input
            type="number"
            required
            min="0"
            className="input-field"
            value={formData.protein}
            onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
            placeholder="0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Carbs (g) *
          </label>
          <input
            type="number"
            required
            min="0"
            className="input-field"
            value={formData.carbs}
            onChange={(e) => setFormData({ ...formData, carbs: e.target.value })}
            placeholder="0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fats (g) *
          </label>
          <input
            type="number"
            required
            min="0"
            className="input-field"
            value={formData.fats}
            onChange={(e) => setFormData({ ...formData, fats: e.target.value })}
            placeholder="0"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          className="input-field"
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Optional notes about this meal"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Adding Meal...' : 'Add Meal'}
      </button>
    </form>
  )
}