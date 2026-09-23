import type { Course } from '../types'
import { theGap } from './01-the-gap'
import { hardAndSoft } from './02-hard-and-soft'
import { threeChannels } from './03-three-channels'
import { the73855Rule } from './04-the-7-38-55-rule'
import { theOther93 } from './05-the-other-93'
import { firstImpressions } from './06-first-impressions'
import { presenceIsNotPersonality } from './07-presence-is-not-personality'
import { fourStages } from './08-four-stages'
import { selfAudit } from './09-self-audit'
import { youAreHere } from './10-you-are-here'

// Course 1 — the framing. The arc: the gap · the three doors · the three channels · 7-38-55 with its
// scope · the misallocation · the seven seconds · presence vs personality · the competence ladder ·
// the self-audit · you-are-here. Nothing here references a later course by number — see COURSE-PLAN.md.
export const presence: Course = {
  id: 'presence',
  title: "Why You're Not Being Heard",
  sections: [
    theGap,
    hardAndSoft,
    threeChannels,
    the73855Rule,
    theOther93,
    firstImpressions,
    presenceIsNotPersonality,
    fourStages,
    selfAudit,
    youAreHere,
  ],
}
