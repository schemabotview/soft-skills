import type { Scene } from '@graphlearning/flow'
import { whoAreYou } from './who-are-you'
import { notYourResume } from './not-your-resume'
import { ppf } from './ppf'
import { theOpen } from './the-open'
import { thePresent } from './the-present'
import { theFuture } from './the-future'
import { ninetySeconds } from './ninety-seconds'
import { beforeAndAfter } from './before-and-after'
import { pitchVariants } from './pitch-variants'
import { deliveringIt } from './delivering-it'

// Course 8 (pitch) scenes — one per section, mirroring src/content/pitch. This is the most
// `[script]`-heavy course in the repo (four of ten), and correctly so: the subject IS a specific
// sequence of words, so the left pane holds the words. Renderer order, no two adjacent the same:
//   compare · script · framework · script · board · script · framework · compare · board · script
export const pitchScenes: Scene[] = [
  whoAreYou,
  notYourResume,
  ppf,
  theOpen,
  thePresent,
  theFuture,
  ninetySeconds,
  beforeAndAfter,
  pitchVariants,
  deliveringIt,
]
