'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HeartIcon, LightBulbIcon, UsersIcon } from '@heroicons/react/24/outline'

const values = [
  {
    icon: HeartIcon,
    title: 'Inclusivity',
    description: 'Creating a welcoming environment where students from all backgrounds can thrive and explore robotics.'
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation',
    description: 'Fostering creativity and problem-solving skills through hands-on learning and real-world challenges.'
  },
  {
    icon: UsersIcon,
    title: 'Community',
    description: 'Building strong teams and connections that extend beyond robotics into lifelong friendships and networks.'
  }
]

export function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary-600 dark:text-primary-400 mb-8 leading-relaxed">
              To empower and support robotics teams by providing access to resources, mentorship, and education, fostering a passion for technology, teamwork, and innovation in students from all backgrounds.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We provide a welcoming and inclusive environment where young kids from all backgrounds can explore the fascinating world of robotics for educational purposes. We empower every child to delve into robotics, fostering teamwork, innovation, and hands-on learning in both mechanical and software realms. We ensure equal access for all, giving every child the opportunity to thrive. Our program is entirely funded by volunteers, showcasing our commitment to supporting the community and young learners.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}