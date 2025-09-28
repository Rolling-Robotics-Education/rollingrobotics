# Rolling Robotics Education Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS for Rolling Robotics Education - empowering students through robotics education, mentorship, and innovation.

![Rolling Robotics Website](https://github.com/user-attachments/assets/2c478ad4-0e47-4e24-b28b-88d586ace926)

## 🚀 Features

### Modern Design & UX
- **Clean, professional design** with modern card-based layouts
- **Responsive design** that works on all devices
- **Dark mode support** with smooth transitions
- **Smooth animations** powered by Framer Motion
- **Accessible design** following WCAG AA guidelines

### Performance & SEO
- **Lighthouse score ≥90** for optimal performance
- **Static site generation** for fast loading
- **SEO optimized** with next-seo integration
- **Open Graph** meta tags for social sharing
- **Automatic sitemap** generation
- **Optimized images** with Next.js Image component

### Key Sections
- **Hero carousel** with inspiring messages and CTAs
- **Mission statement** with core values
- **Impact statistics** with animated counters
- **Programs overview** with detailed cards
- **Team highlights** showcasing community
- **Sponsor recognition** with scrolling display
- **Multiple call-to-action** sections

### Technical Excellence
- **TypeScript** for type safety
- **Component-based architecture** for maintainability
- **Tailwind CSS** for consistent styling
- **Modular design system** with reusable components
- **Modern React patterns** with hooks and context

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: next-seo
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Theme**: next-themes

## 📁 Project Structure

```
src/
├── app/                  # App Router pages
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── programs/        # Programs page
│   ├── support/         # Support page
│   ├── team/            # Team page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   ├── robots.ts        # Robots.txt generation
│   └── sitemap.ts       # Sitemap generation
├── components/          # Reusable components
│   ├── call-to-action.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── mission-section.tsx
│   ├── navigation.tsx
│   ├── programs-preview.tsx
│   ├── providers.tsx
│   ├── sponsor-strip.tsx
│   ├── stats-section.tsx
│   └── team-preview.tsx
└── types/               # TypeScript definitions
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Littlemnmi/rollingrobotics.git
   cd rollingrobotics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## 🌐 Deployment

### Static Export (Recommended)

The site is configured for static export, making it deployable to any static hosting service:

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Azure Static Web Apps

For Azure deployment:

1. **Connect your GitHub repository** to Azure Static Web Apps
2. **Configure build settings**:
   - Build command: `npm run build`
   - Output directory: `out`
3. **Set up www redirect** in Azure configuration

### Other Platforms

The static export works with:
- **Vercel**: Deploy directly from GitHub
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Enable Pages with the `out/` directory
- **AWS S3**: Upload the `out/` directory contents

## 🎨 Design System

### Colors
- **Primary**: Blue tones for main brand elements
- **Secondary**: Complementary blue for accents
- **Accent**: Purple for highlights and CTAs

### Typography
- **System fonts** for optimal loading performance
- **Responsive sizing** with mobile-first approach
- **Proper hierarchy** with semantic heading levels

### Components
- **Consistent spacing** using Tailwind's scale
- **Hover effects** for interactive elements
- **Focus states** for accessibility
- **Loading states** for dynamic content

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts** that adapt to any screen size
- **Touch-friendly** interface elements

## ♿ Accessibility

- **WCAG AA compliant** design patterns
- **Keyboard navigation** support
- **Screen reader** compatible
- **High contrast** color schemes
- **Focus indicators** for all interactive elements
- **Semantic HTML** structure

## 🔧 Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with the page component
3. Update navigation in `src/components/navigation.tsx`
4. Add to sitemap in `src/app/sitemap.ts`

### Modifying Content

- **Hero slides**: Edit the `slides` array in `hero-section.tsx`
- **Programs**: Update the `programs` array in `programs-preview.tsx`
- **Statistics**: Modify the `stats` array in `stats-section.tsx`
- **Team info**: Edit team data in `team-preview.tsx`

### Styling Changes

- **Global styles**: Edit `src/app/globals.css`
- **Tailwind config**: Modify `tailwind.config.js`
- **Color scheme**: Update the color palette in Tailwind config

## 📈 Performance

- **Lighthouse scores**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image optimization**: Next.js Image component with lazy loading
- **Code splitting**: Automatic with Next.js App Router
- **Caching**: Static generation for optimal caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Rolling Robotics Education**
- Email: contact@rollingroboticseducation.onmicrosoft.com
- Address: 22540 NE 92nd St, Redmond, WA 98053
- Website: [rollingrobotics.org](https://rollingrobotics.org)

## 📄 License

This project is licensed under the ISC License - see the original package.json for details.

---

*Built with ❤️ for the Rolling Robotics Education community*
