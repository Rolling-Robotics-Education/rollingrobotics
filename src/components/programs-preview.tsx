'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, CogIcon } from '@heroicons/react/24/outline'

const programs = [
  {
    id: 1,
    title: 'FIRST Tech Challenge',
    description: 'Competitive robotics program for middle and high school students focusing on engineering design and teamwork.',
    icon: CogIcon,
    image: '/images/team5.jpg',
    features: ['Hardware Design', 'Software Programming', 'Engineering Notebook', 'Team Collaboration'],
    ages: '12-18 years',
    duration: 'September - April'
  },
  /*{
    id: 2,
    title: 'FIRST LEGO League',
    description: 'Hands-on STEM program that challenges kids to think creatively and develop problem-solving skills.',
    icon: RocketLaunchIcon,
    image: '/images/team3.jpg',
    features: ['LEGO Programming', 'Research Project', 'Core Values', 'Innovation Project'],
    ages: '9-14 years',
    duration: 'August - February'
  },
  {
    id: 3,
    title: 'Educational Workshops',
    description: 'Regular workshops covering robotics fundamentals, programming, and engineering concepts.',
    icon: AcademicCapIcon,
    image: '/images/team1.jpg',
    features: ['Basic Programming', 'Robot Building', 'Problem Solving', 'STEM Concepts'],
    ages: '8-16 years',
    duration: 'Year-round'
  }*/
]

export function ProgramsPreview() {
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
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We offer comprehensive robotics programs designed to engage, educate, and inspire students at every level.
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200"
          >
            View All Programs
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 max-w-md">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card group hover:shadow-2xl"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full">
                    <program.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {program.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {program.description}
              </p>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>Ages: {program.ages}</span>
                  <span>{program.duration}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                <ul className="space-y-1">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/programs"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group-hover:translate-x-1 transform"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}