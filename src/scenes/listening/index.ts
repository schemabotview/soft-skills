import type { Scene } from '@graphlearning/flow'
import { hearingVsListening } from './hearing-vs-listening'
import { listeningToRespond } from './listening-to-respond'
import { lace } from './lace'
import { paraphrase } from './paraphrase'
import { clarifyingQuestion } from './clarifying-question'
import { whatIsNotSaid } from './what-is-not-said'
import { requirementsFailures } from './requirements-failures'
import { interrupting } from './interrupting'
import { inMeetings } from './in-meetings'
import { listeningAsSeniority } from './listening-as-seniority'

// Course 5 (listening) scenes. COURSE-PLAN.md flagged this as the hardest course to draw — six of
// its ten sections are internal states. The answer is dialogue: four of these scenes are `[script]`
// transcripts where the other person's line sits above the response, which turns an internal
// disposition into something with an observable before and after. Renderer order:
//   compare · flow · framework · script · compare · board · script · compare · board · script
export const listeningScenes: Scene[] = [
  hearingVsListening,
  listeningToRespond,
  lace,
  paraphrase,
  clarifyingQuestion,
  whatIsNotSaid,
  requirementsFailures,
  interrupting,
  inMeetings,
  listeningAsSeniority,
]
