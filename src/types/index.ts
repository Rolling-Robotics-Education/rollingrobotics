export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  skills?: string[]
  achievements?: string[]
}

export interface Program {
  id: string
  title: string
  description: string
  longDescription: string
  ages: string
  duration: string
  features: string[]
  image: string
  icon: string
  requirements?: string[]
  schedule?: string
  cost?: string
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  website?: string
  description?: string
  level: 'platinum' | 'gold' | 'silver' | 'bronze' | 'community'
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: 'competition' | 'award' | 'milestone' | 'community'
  image?: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'competition' | 'workshop' | 'meeting' | 'outreach'
  registrationRequired: boolean
  registrationUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  program?: string
  phone?: string
}

export interface NewsPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  image?: string
  tags: string[]
}