import type { Course } from '../types'
import { framingSection } from './01-framing'
import { factsAndAssumptions } from './02-facts-and-assumptions'
import { alternativesSection } from './03-alternatives'
import { optionComparison } from './04-option-comparison'
import { biasesSection } from './05-biases'
import { reversibleDecisions } from './06-reversible-decisions'
import { revisitingSection } from './07-revisiting'

// Chapter 7: explain how a team develops and revises a decision under uncertainty.
export const problemSolving: Course = {
  id: 'problem-solving',
  title: 'Critical thinking and collaborative problem-solving',
  sections: [framingSection, factsAndAssumptions, alternativesSection, optionComparison, biasesSection, reversibleDecisions, revisitingSection],
}
