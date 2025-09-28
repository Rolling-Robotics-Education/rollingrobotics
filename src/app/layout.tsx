import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Rolling Robotics Education',
  description: 'Empowering students through robotics education, mentorship, and innovation. Join our mission to foster teamwork, technology skills, and passion for STEM in young minds.',
  keywords: ['robotics', 'education', 'FIRST', 'STEM', 'technology', 'mentorship', 'students', 'innovation'],
  authors: [{ name: 'Rolling Robotics Education' }],
  creator: 'Rolling Robotics Education',
  publisher: 'Rolling Robotics Education',
  metadataBase: new URL('https://rollingrobotics.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rollingrobotics.org',
    title: 'Rolling Robotics Education',
    description: 'Empowering students through robotics education, mentorship, and innovation. Join our mission to foster teamwork, technology skills, and passion for STEM in young minds.',
    siteName: 'Rolling Robotics Education',
    images: [
      {
        url: '/images/logo_2.png',
        width: 1200,
        height: 630,
        alt: 'Rolling Robotics Education'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rolling Robotics Education',
    description: 'Empowering students through robotics education, mentorship, and innovation.',
    images: ['/images/logo_2.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}