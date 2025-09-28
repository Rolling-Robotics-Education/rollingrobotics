'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { HeartIcon } from '@heroicons/react/24/outline'

// Placeholder sponsors - in a real implementation, these would be actual sponsor logos
const sponsors = [
  { name: 'Community Partner 1', logo: '/images/placeholder-logo-1.svg' },
  { name: 'Tech Sponsor', logo: '/images/placeholder-logo-2.svg' },
  { name: 'Educational Partner', logo: '/images/placeholder-logo-3.svg' },
  { name: 'Local Business', logo: '/images/placeholder-logo-4.svg' },
  { name: 'STEM Foundation', logo: '/images/placeholder-logo-5.svg' },
  { name: 'Innovation Hub', logo: '/images/placeholder-logo-6.svg' },
]

export function SponsorStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HeartIcon className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Supported By Our Community
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our mission is made possible through the generous support of local businesses, organizations, and community partners.
          </p>
        </motion.div>

        {/* Sponsor Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll space-x-12 lg:space-x-16">
            {/* First set of sponsors */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 lg:h-20 lg:w-40"
              >
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-full w-full flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scroll */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 lg:h-20 lg:w-40"
              >
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-full w-full flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in supporting robotics education in our community?
          </p>
          <Link
            href="/support"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <HeartIcon className="h-5 w-5 mr-2" />
            Become a Sponsor
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}