import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Rolling Robotics Education',
  description: 'Get in touch with Rolling Robotics Education. We\'d love to hear from you!',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions? Want to learn more? We&apos;d love to hear from you!
          </p>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>Contact form coming soon...</p>
          <div className="mt-8 text-left max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
            <p className="mb-2">
              <strong>Email:</strong> contact@rollingroboticseducation.onmicrosoft.com
            </p>
            <p>
              <strong>Address:</strong><br />
              22540 NE 92nd St<br />
              Redmond, WA 98053
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}