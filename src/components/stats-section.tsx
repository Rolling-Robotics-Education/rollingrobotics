'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  {
    id: 1,
    name: 'Students Mentored',
    value: 150,
    suffix: '+',
    description: 'Young minds inspired through our programs'
  },
  {
    id: 2,
    name: 'Years of Impact',
    value: 7,
    suffix: '+',
    description: 'Since our founding in 2017'
  },
  {
    id: 3,
    name: 'Competition Wins',
    value: 25,
    suffix: '+',
    description: 'Awards and recognitions earned'
  },
  {
    id: 4,
    name: 'Community Events',
    value: 50,
    suffix: '+',
    description: 'Outreach and educational activities'
  }
]

function useCountAnimation(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isActive) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      const current = Math.floor(start + (end - start) * percentage)
      setCount(current)
      
      if (percentage < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, start, isActive])

  return { count, setIsActive }
}

function StatItem({ stat, delay }: { stat: typeof stats[0], delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const { count, setIsActive } = useCountAnimation(stat.value)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setIsActive(true), delay)
    }
  }, [isInView, delay, setIsActive])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {stat.name}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {stat.description}
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Since our establishment, we&apos;ve been making a meaningful difference in the lives of young students and our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem 
              key={stat.id} 
              stat={stat} 
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  )
}