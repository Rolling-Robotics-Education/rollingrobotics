import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team - Rolling Robotics Education',
  description: 'Meet our dedicated mentors, passionate students, and supportive community members.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated mentors, passionate students, and supportive community members who make our mission possible.
          </p>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>Team profiles coming soon...</p>
        </div>
      </div>
    </div>
  )
}