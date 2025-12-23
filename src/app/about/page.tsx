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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To empower and support robotics teams by providing access to resources, mentorship, and education, 
                fostering a passion for technology, teamwork, and innovation in students from all backgrounds.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We provide a welcoming and inclusive environment where young kids from all backgrounds can explore 
                the fascinating world of robotics for educational purposes. We empower every child to delve into 
                robotics, fostering teamwork, innovation, and hands-on learning in both mechanical and software realms.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
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
                  <span className="font-semibold text-gray-900 dark:text-white">25+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Location:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Redmond, WA</span>
                </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Haifeng Sun</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">President</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Jessie Liu</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Vice President</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Haiyan Liu</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Treasurer</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Jeffrey Liu</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Secretary</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Junli Wang</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Board Member</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sihan Chen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Board Member</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Xin Chen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Board Member</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Abigail Li</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Board Member</p>
                 </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Joyce Rong</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Board Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}