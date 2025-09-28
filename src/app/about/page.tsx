import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Rolling Robotics Education',
  description: 'Learn about our mission, values, and history of empowering students through robotics education.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Rolling Robotics Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering students through robotics education, mentorship, and innovation since 2017.
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To empower and support robotics teams by providing access to resources, mentorship, and education, 
                fostering a passion for technology, teamwork, and innovation in students from all backgrounds.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We provide a welcoming and inclusive environment where young kids from all backgrounds can explore 
                the fascinating world of robotics for educational purposes. We empower every child to delve into 
                robotics, fostering teamwork, innovation, and hands-on learning in both mechanical and software realms.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Founded:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">2017</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Students Served:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">150+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Awards Won:</span>
                  <span className="font-semibent text-gray-900 dark:text-white">25+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Location:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Redmond, WA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}