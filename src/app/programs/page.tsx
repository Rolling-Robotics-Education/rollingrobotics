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
        {/* Competitive Robotics Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Competitive Robotics
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Participating in competitive robotics teams offers students the most immersive and comprehensive STEM education experience among all our programs. Rolling Robotics proudly operates several competitive robotics teams, with our coaches and mentors bringing years of expertise in robotics competitions. Beyond our own teams (detailed below), our experienced staff and volunteers actively support less experienced teams within our community, fostering the growth of a robust local network of affiliated teams.
                </p>

                <p>
                  The FIRST Tech Challenge (FTC) competition season runs from September through April, offering far more than just robot building. FTC teams, composed of up to 15 members from grades 7-12, are challenged to design, build, program, and operate robots to compete in head-to-head challenges within an alliance format. This program allows high school students to experience the thrill of robotics while engaging deeply with the rigors of science and technology. Guided by dedicated coaches and mentors, students develop critical STEM skills, practice engineering principles, and learn the value of hard work, innovation, and teamwork.
                </p>

                <p>
                  Each season culminates in regional championship events, leading up to the exhilarating FIRST Championship.
                </p>

                <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-6 rounded-r-lg">
                  <p className="font-semibold text-primary-800 dark:text-primary-200 mb-2">
                    Our Team
                  </p>
                  <p className="text-primary-700 dark:text-primary-300">
                    Our students proudly compete in FTC as Team #14179, also known as &quot;Team Sushi Squad.&quot;
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Learn More
                  </h3>
                  <p className="mb-4">
                    For more information on FTC, please visit:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://www.firstinspires.org/robotics/ftc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      FIRST Robotics FTC
                    </a>
                    <a 
                      href="https://firstwa.org/first-robotics-competition/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      FIRST Washington
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}