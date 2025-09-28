import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Us - Rolling Robotics Education',
  description: 'Learn how you can support our mission to provide robotics education to students in our community.',
}

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Help us provide robotics education and mentorship to more students in our community.
          </p>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>Support options coming soon...</p>
        </div>
      </div>
    </div>
  )
}