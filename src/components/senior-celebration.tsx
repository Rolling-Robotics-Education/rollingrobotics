'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const seniors = [
  {
    name: 'Sihan Chen',
    role: 'Team Captain',
    college: 'University of Pennsylvania',
    major: 'Bioengineering',
    image: '/images/2026_seniors/IMG_2542.jpg',
  },
  {
    name: 'Max Fu',
    role: 'Hardware Team',
    college: 'University of Wisconsin–Madison',
    major: 'Information & Data Science',
    image: '/images/2026_seniors/IMG_2541.jpg',
  },
  {
    name: 'Jeffrey Liu',
    role: 'Hardware Lead',
    college: 'University of Michigan',
    major: 'Pharmaceutical Sciences',
    image: '/images/2026_seniors/IMG_2543.jpg',
  },
  {
    name: 'Julia Wen',
    role: 'Outreach Lead',
    college: 'University of California, Los Angeles',
    major: 'Human Biology & Society (Pre-Med)',
    image: '/images/2026_seniors/IMG_2540.jpg',
  },
]

export function SeniorCelebration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-purple-600 p-8 sm:p-12 shadow-2xl"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              🎓 Class of 2026
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
              Congratulations to Our Graduating Seniors!
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
              We are incredibly proud of our four seniors heading off to college this fall. Thank you for your
              leadership, dedication, and the lasting mark you&apos;ve left on Sushi Squad. Wishing you all the
              best on your next adventure — once a part of the team, always part of the team!
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seniors.map((senior, index) => (
                <motion.div
                  key={senior.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="overflow-hidden rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 text-left"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={senior.image}
                      alt={`${senior.name} - ${senior.college}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-lg font-bold text-white">{senior.name}</p>
                    <p className="text-sm text-white/70">{senior.role}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{senior.college}</p>
                    <p className="text-sm text-white/80">{senior.major}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
