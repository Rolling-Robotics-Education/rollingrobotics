import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs - Rolling Robotics Education',
  description: 'Discover our comprehensive robotics programs for students of all ages and skill levels.',
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive robotics education for students of all ages and skill levels.
          </p>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>Program details coming soon...</p>
        </div>
      </div>
    </div>
  )
}