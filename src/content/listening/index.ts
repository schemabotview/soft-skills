import type { Course } from '../types'
import { listeningToUnderstand } from './01-listening-to-understand'
import { questionTypesSection } from './02-question-types'
import { paraphraseAndSummarise } from './03-paraphrase-and-summarise'
import { needsAndConstraints } from './04-needs-and-constraints'
import { acrossBackgroundsSection } from './05-across-backgrounds'
import { cuesAndSilence } from './06-cues-and-silence'
import { confirmingNextSteps } from './07-confirming-next-steps'

// Chapter 2: explain how a conversation develops shared understanding before action.
export const listening: Course = {
  id: 'listening',
  title: 'Active listening and clarifying questions',
  sections: [listeningToUnderstand, questionTypesSection, paraphraseAndSummarise, needsAndConstraints, acrossBackgroundsSection, cuesAndSilence, confirmingNextSteps],
}
