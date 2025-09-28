'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, UserPlusIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const actions = [
  {
    title: 'Join Our Programs',
    description: 'Enroll your child in our robotics programs and watch them grow.',
    icon: UserPlusIcon,
    href: '/programs',
    buttonText: 'View Programs',
    color: 'bg-primary-600 hover:bg-primary-700'
  },
  {
    title: 'Support Our Mission',
    description: 'Help us provide robotics education to more students in our community.',
    icon: HeartIcon,
    href: '/support',
    buttonText: 'Support Us',
    color: 'bg-red-600 hover:bg-red-700'
  },
  {
    title: 'Get In Touch',
    description: 'Have questions? Want to learn more? We&apos;d love to hear from you.',
    icon: ChatBubbleLeftRightIcon,
    href: '/contact',
    buttonText: 'Contact Us',
    color: 'bg-green-600 hover:bg-green-700'
  }
]

export function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Join our community of young innovators, dedicated mentors, and supportive families. 
            Together, we&apos;re building the next generation of problem-solvers and leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-6">
                <action.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {action.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {action.description}
              </p>
              
              <Link
                href={action.href}
                className={`inline-flex items-center text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${action.color}`}
              >
                {action.buttonText}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-blue-100 mb-6">
              Follow our journey and get updates on competitions, events, and student achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Learn Our Story
              </Link>
              <Link
                href="/team"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}