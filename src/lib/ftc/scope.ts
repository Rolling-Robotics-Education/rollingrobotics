import type { TutorMessage } from './types'

export const OUT_OF_SCOPE_MESSAGE =
  'I can only help with FIRST Tech Challenge topics. Ask me about FTC robots, programming, game rules, events, awards, team operations, or official FIRST resources.'

const FTC_TOPIC_PATTERN =
  /\b(first\s*tech\s*challenge|ftc|robot(?:ics)?|autonomous|teleop|opmode|mecanum|odometry|apriltag|control\s*hub|driver\s*hub|robot\s*controller|onbot|road\s*runner|rev\s*hub|game\s*manual|competition\s*manual|rule|inspection|alliance|qualif(?:ier|ication)|tournament|judg(?:e|ing)|award|engineering\s*(?:portfolio|notebook)|gracious\s*professionalism|coopertition|outreach|pit|match|scoring|penalty|team|mentor|coach|kickoff|register|programming|java|blocks|motor|servo|sensor|drivetrain|battery|wiring|cad|fundraising|sponsor|first\s*championship|biobuzz|decode|into\s*the\s*deep)\b/i

export function isPotentiallyFtcRelated(messages: TutorMessage[]): boolean {
  const recentUserMessages = messages
    .filter((message) => message.role === 'user')
    .slice(-3)
    .map((message) => message.content)
    .join('\n')

  return FTC_TOPIC_PATTERN.test(recentUserMessages)
}
