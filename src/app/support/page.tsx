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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            
            {/* Volunteer as a Mentor Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Volunteer as a mentor
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                It&apos;s rare for mentors to join the team with prior experience in robotics. If you have
                STEM skills, and a passion for teaching K-12 students, we will help you learn how to
                apply your skills to robotics. We need mentors with skills in the following areas
                (and more):
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Mechanical Design and Engineering',
                  'Manufacturing and Assembly',
                  'Electrical Engineering',
                  'Embedded Systems',
                  'Software Development',
                  'Computer Aided Design / Manufacturing',
                  'Project Management',
                  'Data Analytics'
                ].map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* STEM Horizons Section */}
            <div className="border-t border-gray-200 dark:border-gray-600 pt-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                  <a 
                    href="/images/stem_horizons.jpg" 
                    className="hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    STEM HORIZONS
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Complete the following activities as part of our Microsoft Giving Campaign to match for hours!
                </p>
              </div>

              <div className="space-y-8">
                {/* Activity 1 */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Activity 1: Educational Videos
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Watch{' '}
                    <a 
                      href="https://www.youtube.com/playlist?list=PLSqsbysIvWskpTT8wMHWDbm0pECjzzW_I"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                    >
                      these videos
                    </a>{' '}
                    to learn about FIRST Robotics and robotics in the world!
                  </p>
                </div>

                {/* Activity 2 */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Activity 2: Knowledge Quizzes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Test your knowledge through these Kahoot quizzes!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-3">1.</span>
                      <a 
                        href="https://create.kahoot.it/details/b9691c46-662b-45ee-9500-747b26455bdd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                      >
                        Introduction to Robotics
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-3">2.</span>
                      <a 
                        href="https://create.kahoot.it/details/aa0eda44-a9b6-42b0-accb-8ab8952d99bc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                      >
                        What is FIRST Tech Challenge?
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-3">3.</span>
                      <a 
                        href="https://create.kahoot.it/details/2a4d5eae-52c6-4a23-a523-13230e5167df"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                      >
                        More About Robots
                      </a>
                    </div>
                  </div>
                </div>

                {/* Activity 3 */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Activity 3: Share Your Input
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    We want YOUR thoughts and input:{' '}
                    <a 
                      href="https://forms.office.com/r/dZcUXJtgiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                    >
                      Fill out our survey
                    </a>
                    !
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6 text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Make sure to match your hours for these activities, and please donate to the cause{' '}
                    <strong className="text-primary-600 dark:text-primary-400">&quot;STEM HORIZONS via Rolling Robotics Education&quot;</strong> at{' '}
                    <a 
                      href="https://aka.ms/give"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                    >
                      aka.ms/give
                    </a>
                    !
                  </p>
                  <a 
                    href="https://aka.ms/give"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}