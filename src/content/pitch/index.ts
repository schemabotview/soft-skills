import type { Course } from '../types'
import { whoAreYou } from './01-who-are-you'
import { notYourResume } from './02-not-your-resume'
import { ppf } from './03-ppf'
import { theOpen } from './04-the-open'
import { thePresent } from './05-the-present'
import { theFuture } from './06-the-future'
import { ninetySeconds } from './07-ninety-seconds'
import { beforeAndAfter } from './08-before-and-after'
import { pitchVariants } from './09-pitch-variants'
import { deliveringIt } from './10-delivering-it'

// Course 8 — ninety seconds on you. Diagnose the usual answer, name the shape (PPF), then one
// section per beat, then the clock, the makeover, the four lengths — and closing on delivery, where
// the voice and body courses are cashed in on a specific set of words.
export const pitch: Course = {
  id: 'pitch',
  title: 'Introducing Yourself',
  sections: [
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
  ],
}
