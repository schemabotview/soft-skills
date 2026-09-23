import type { Course } from '../types'
import { curseOfKnowledge } from './01-curse-of-knowledge'
import { technicalOverload } from './02-technical-overload'
import { prep } from './03-prep'
import { answerFirst } from './04-answer-first'
import { ppsa } from './05-ppsa'
import { signposting } from './06-signposting'
import { brevity } from './07-brevity'
import { hedging } from './08-hedging'
import { inWriting } from './09-in-writing'
import { theAudienceDial } from './10-the-audience-dial'

// Course 4 — the verbal channel: making the 7% worth hearing. Diagnosis first (the curse of
// knowledge, technical overload), then the two named shapes (PREP for an answer, PPSA for describing
// work), then the habits that erode them (length, hedging), then writing and the audience dial.
export const structure: Course = {
  id: 'structure',
  title: 'Saying It Simply',
  sections: [
    curseOfKnowledge,
    technicalOverload,
    prep,
    answerFirst,
    ppsa,
    signposting,
    brevity,
    hedging,
    inWriting,
    theAudienceDial,
  ],
}
