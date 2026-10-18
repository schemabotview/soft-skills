import type { Course } from '../types'
import { respondingToChange } from './01-responding-to-change'
import { learningAndFeedback } from './02-learning-and-feedback'
import { relationshipsAndMentoring } from './03-relationships-and-mentoring'
import { careerConversations } from './04-career-conversations'
import { integratedCase } from './05-integrated-case'
import { sustainablePractice } from './06-sustainable-practice'

// Chapter 12: integrate the course into a realistic account of professional development and delivery.
export const growth: Course = {
  id: 'growth',
  title: 'Adaptability, career conversations and continued growth',
  sections: [respondingToChange, learningAndFeedback, relationshipsAndMentoring, careerConversations, integratedCase, sustainablePractice],
}
