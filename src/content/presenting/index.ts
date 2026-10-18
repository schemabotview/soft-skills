import type { Course } from '../types'
import { audienceAndMessage } from './01-audience-and-message'
import { projectStoryGroup } from './02-project-story'
import { evidenceAndVisuals } from './03-evidence-and-visuals'
import { rehearsalAndDelivery } from './04-rehearsal-and-delivery'
import { handlingQuestions } from './05-handling-questions'
import { closingSection } from './06-closing'

// Chapter 10: explain how to present a recommendation or contribution clearly and honestly.
export const presenting: Course = {
  id: 'presenting',
  title: 'Presentation, storytelling and questions',
  sections: [audienceAndMessage, projectStoryGroup, evidenceAndVisuals, rehearsalAndDelivery, handlingQuestions, closingSection],
}
