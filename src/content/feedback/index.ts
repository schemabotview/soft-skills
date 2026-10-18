import type { Course } from '../types'
import { feedbackPurposeSection } from './01-feedback-purpose'
import { situationBehaviourImpact } from './02-situation-behaviour-impact'
import { askingAboutIntent } from './03-asking-about-intent'
import { receivingFeedback } from './04-receiving-feedback'
import { agreeingNextSteps } from './05-agreeing-next-steps'
import { powerAndAccuracy } from './06-power-and-accuracy'

// Chapter 8: explain a feedback conversation that uses specific evidence and supports follow-through.
export const feedback: Course = {
  id: 'feedback',
  title: 'Giving and receiving feedback',
  sections: [feedbackPurposeSection, situationBehaviourImpact, askingAboutIntent, receivingFeedback, agreeingNextSteps, powerAndAccuracy],
}
