import type { Course } from '../types'
import { hearingVsListening } from './01-hearing-vs-listening'
import { listeningToRespond } from './02-listening-to-respond'
import { lace } from './03-lace'
import { paraphrase } from './04-paraphrase'
import { theClarifyingQuestion } from './05-the-clarifying-question'
import { whatIsNotSaid } from './06-what-is-not-said'
import { requirementsFailures } from './07-requirements-failures'
import { interrupting } from './08-interrupting'
import { inMeetings } from './09-in-meetings'
import { listeningAsSeniority } from './10-listening-as-seniority'

// Course 5 — the channel that runs the other way. Diagnose the failure first (hearing vs listening,
// listening to respond), then the named shape, then the two tools that do real technical work
// (paraphrase, the clarifying question), then what is unsaid, the cost when it goes wrong, and the
// observable practice surface. Closes on why this reads as seniority.
export const listening: Course = {
  id: 'listening',
  title: 'Listening Is the Other Half',
  sections: [
    hearingVsListening,
    listeningToRespond,
    lace,
    paraphrase,
    theClarifyingQuestion,
    whatIsNotSaid,
    requirementsFailures,
    interrupting,
    inMeetings,
    listeningAsSeniority,
  ],
}
