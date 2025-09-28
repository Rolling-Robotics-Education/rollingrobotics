import Link from 'next/link'
import Image from 'next/image'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Team', href: '/team' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Email',
      href: 'mailto:contact@rollingroboticseducation.onmicrosoft.com',
      icon: EnvelopeIcon,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo_2.png"
                  alt="Rolling Robotics Education Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Rolling Robotics
                </span>
                <p className="text-sm text-gray-300">Education</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-md">
              Empowering students through robotics education, mentorship, and innovation. 
              Fostering teamwork, technology skills, and passion for STEM in young minds.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  22540 NE 92nd St<br />
                  Redmond, WA 98053
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@rollingroboticseducation.onmicrosoft.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  contact@rollingroboticseducation.onmicrosoft.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Rolling Robotics Education. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}