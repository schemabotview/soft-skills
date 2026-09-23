import type { Scene } from '@graphlearning/flow'
import { theGap } from './the-gap'
import { hardAndSoft } from './hard-and-soft'
import { threeChannels } from './three-channels'
import { theSplit } from './the-split'
import { tonight } from './tonight'
import { firstSevenSeconds } from './first-seven-seconds'
import { notPersonality } from './not-personality'
import { fourStages } from './four-stages'
import { selfAudit } from './self-audit'
import { theMap } from './the-map'

// Course 1 (presence) scenes — one per section, mirroring src/content/presence. The renderer for
// each is fixed by COURSE-PLAN.md's budget, and no two adjacent sections share one:
//   flow · compare · flow · compare · script · board · compare · framework · script · board
export const presenceScenes: Scene[] = [
  theGap,
  hardAndSoft,
  threeChannels,
  theSplit,
  tonight,
  firstSevenSeconds,
  notPersonality,
  fourStages,
  selfAudit,
  theMap,
]
