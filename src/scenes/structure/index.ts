import type { Scene } from '@graphlearning/flow'
import { curseOfKnowledge } from './curse-of-knowledge'
import { technicalOverload } from './technical-overload'
import { prep } from './prep'
import { answerFirst } from './answer-first'
import { ppsa } from './ppsa'
import { signposting } from './signposting'
import { brevity } from './brevity'
import { hedging } from './hedging'
import { inWriting } from './in-writing'
import { audienceDial } from './audience-dial'

// Course 4 (structure) scenes — one per section, mirroring src/content/structure. This is the
// course with no `[flow]` at all: nothing in it is a mechanism, so the budget spends that slot on a
// third framework instead. Renderer order, no two adjacent the same:
//   compare · script · framework · script · framework · board · script · compare · framework · board
export const structureScenes: Scene[] = [
  curseOfKnowledge,
  technicalOverload,
  prep,
  answerFirst,
  ppsa,
  signposting,
  brevity,
  hedging,
  inWriting,
  audienceDial,
]
