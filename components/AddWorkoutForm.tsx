'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddWorkoutForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    workout_type: 'strength',
    duration: '',
    notes: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          workout_type: formData.workout_type,
          duration: formData.duration ? Number(formData.duration) : undefined,
          notes: formData.notes,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to create workout');
      
      router.push('/workouts');
      router.refresh();
    } catch (error) {
      console.error('Error creating workout:', error);
      alert('Failed to create workout. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Workout Name *
        </label>
        <input
          type="text"
          required
          className="input-field"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="e.g., Morning Chest Day"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Workout Type *
        </label>
        <select
          className="input-field"
          value={formData.workout_type}
          onChange={(e) => setFormData({ ...formData, workout_type: e.target.value })}
        >
          <option value="strength">Strength Training</option>
          <option value="cardio">Cardio</option>
          <option value="flexibility">Flexibility</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duration (minutes)
        </label>
        <input
          type="number"
          min="0"
          className="input-field"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          placeholder="Optional"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notes
        </label>
        <textarea
          className="input-field"
          rows={4}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Optional notes about this workout"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Logging Workout...' : 'Log Workout'}
      </button>
    </form>
  )
}