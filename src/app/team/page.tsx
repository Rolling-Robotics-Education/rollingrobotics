import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Team - Rolling Robotics Education',
  description: 'Meet our dedicated mentors, passionate students, and supportive community members.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated mentors, passionate students, and supportive community members who make our mission possible.
          </p>
        </div>
        {/* Team Members Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Sushi Squad - FTC Team 14179</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Abigail */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src="/images/sushi/abigail.jpg" 
                  alt="Abigail" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Abigail</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Outreach Team • Junior at Redmond High School</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hi! My name is Abigail, and I&apos;m a junior at Redmond High School. Currently, I&apos;m part of the outreach subteam. I joined this team to have the opportunity to practice real-life soft skills and to make an impact in the community. Apart from robotics, I&apos;m a violinist and pianist.
                </p>
              </div>
            </div>

           
            {/* Aiden K */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src="/images/sushi/aidenk.jpg" 
                  alt="Aiden" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Aiden</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Hardware Team • 8th Grade at The Bear Creek School</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hi, my name is Aiden King, this year I&apos;m a 8th grader at The Bear Creek School. Currently, I&apos;m on the hardware team, and particularly interested in CAD design. Outside of FTC, I&apos;m interested in a variety of things, including track and field and cross country.
                </p>
              </div>
            </div>

            {/* Emma */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src="/images/sushi/emma.jpg" 
                  alt="Emma" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Emma</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Software + Outreach Team & Graphic Designer • 8th Grade at Timberline Middle School</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hi! I&apos;m Emma, and I&apos;m a 8th grader at Timberline Middle School. I&apos;m currently part of the outreach team, work on a bit of software, and a graphic designer. I joined Sushi Squad to learn more about robotics, being a programmer, and being part of a team. Outside of robotics and engineering, I enjoy kpop and drawing, and play the flute.
                </p>
              </div>
            </div>

           
            {/* Iris */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src="/images/sushi/iris.jpg" 
                  alt="Iris" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Iris</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Strategy Team • Junior at Redmond High School</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hello! My name is Iris, and I am a junior at Redmond High School. I am on the strategy team. I joined FTC because I enjoy learning about engineering and working with a team to achieve a certain goal. In my free time I enjoy listening to music and writing.
                </p>
              </div>
            </div>

            {/* Jeffrey */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src="/images/sushi/jeffrey.jpg" 
                  alt="Jeffrey" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Jeffrey</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Hardware Lead • Senior at Redmond High School</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hey there! I&apos;m Jeffrey, a senior at Redmond High School. I am currently the hardware lead of the team. I joined this team to deepen my understanding in robotics, as well as to practice working in a team. Outside of robotics, I like playing video games and listening to music.
                </p>
              </div>
            </div>

            {/* Julia */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src="/images/sushi/julia.jpg" 
                  alt="Julia" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Julia</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Outreach Lead • Senior at Redmond High School</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hi, I&apos;m Julia and I&apos;m a senior attending Redmond High School. On this team, I&apos;m the outreach lead. In my free time, I draw, write, read, practice piano, and play badminton. I joined FIRST Tech Challenge because I&apos;ve enjoyed doing other robotics competitions in the past and hope to learn more by working with a team.
                </p>
              </div>
            </div>

            {/* Kerrie */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src="/images/sushi/kerrie.jpg" 
                  alt="Kerrie" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Kerrie</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Hardware Team • 8th Grade at Timberline Middle School</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hello there, my name is Kerrie and I am a 8th grader at Timberline Middle School. I am part of the hardware team. I like watching YouTube and playing video games. I joined this FIRST Tech Challenge team to explore more on the mechanic field.
                </p>
              </div>
            </div>

            {/* Sihan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src="/images/sushi/sihan.png" 
                  alt="Sihan" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sihan</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Team Captain • Senior at Redmond High School</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hi! I&apos;m Sihan and I&apos;m currently a senior at Redmond High School. I am the team captain and part of the software and outreach boards. I joined Sushi Squad to learn new skills in a fun and challenging environment. Outside of robotics, I like music and reading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}