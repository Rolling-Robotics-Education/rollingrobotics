import { HeroSection } from '@/components/hero-section'
import { MissionSection } from '@/components/mission-section'
import { StatsSection } from '@/components/stats-section'
import { ProgramsPreview } from '@/components/programs-preview'
import { TeamPreview } from '@/components/team-preview'
import { SponsorStrip } from '@/components/sponsor-strip'
import { CallToAction } from '@/components/call-to-action'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ProgramsPreview />
      <TeamPreview />
      <SponsorStrip />
      <CallToAction />
    </>
  )
}