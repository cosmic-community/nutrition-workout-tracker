# Nutrition & Workout Tracker

![App Preview](https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=300&fit=crop&auto=format)

A comprehensive nutrition and workout tracking application built with Next.js 16 and Cosmic CMS. Track your meals, monitor macronutrients, log workouts, and achieve your fitness goals with an intuitive, data-driven interface.

## ✨ Features

- **Meal Tracking** - Log daily meals with complete nutritional breakdown (calories, protein, carbs, fats)
- **Workout Logging** - Record exercises, sets, reps, and weights for comprehensive fitness tracking
- **Nutrition Dashboard** - Visual overview of macro targets vs actual intake with real-time progress
- **Exercise Library** - Browse exercises by muscle group with detailed instructions
- **Progress Analytics** - Track nutritional and workout trends over time
- **Goal Management** - Set and monitor daily caloric and macronutrient goals
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Real-time Updates** - Instant data synchronization with Cosmic CMS

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6908f165b786425f45f37e79&clone_repository=6908f32fb786425f45f37e94)

## 📝 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Nutrition workout

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for Cosmic API integration
- **React Server Components** - Server-side rendering and data fetching
- **Bun** - Fast package manager and runtime

## 📋 Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket
- Basic knowledge of React and Next.js

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd nutrition-workout-tracker
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

### 4. Run the Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Cosmic SDK Examples

### Fetching Meals

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all meals for today
const { objects: meals } = await cosmic.objects
  .find({ 
    type: 'meals',
    'metadata.date': new Date().toISOString().split('T')[0]
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

### Creating a Workout Log

```typescript
await cosmic.objects.insertOne({
  title: 'Morning Workout',
  type: 'workouts',
  metadata: {
    date: new Date().toISOString().split('T')[0],
    exercises: ['exercise-id-1', 'exercise-id-2'],
    duration: 45,
    notes: 'Great session!'
  }
})
```

### Updating Nutrition Goals

```typescript
await cosmic.objects.updateOne('goal-id', {
  metadata: {
    calories: 2500,
    protein: 180,
    carbs: 250,
    fats: 80
  }
})
```

## 🎨 Cosmic CMS Integration

This application uses Cosmic CMS to manage:

- **Meals** - Daily meal entries with nutritional information
- **Workouts** - Exercise logs with sets, reps, and weights
- **Exercises** - Exercise library with instructions and muscle groups
- **Goals** - User nutrition and fitness goals
- **Progress** - Historical tracking data

All content is dynamically fetched from your Cosmic bucket, allowing you to update nutrition data, add new exercises, and manage user progress without touching code.

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the button above
2. Connect your GitHub repository
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the button above
2. Connect your repository
3. Add environment variables in Netlify dashboard
4. Deploy!

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

<!-- README_END -->