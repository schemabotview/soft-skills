import { selfAwareness } from './self-awareness'
import { listening } from './listening'
import type { Course, Section } from './types'

// Course registry, in syllabus order (SOFT-SKILLS-COURSE-PLAN.md, one chapter = one course).
export const COURSES: Record<string, Course> = {
  [selfAwareness.id]: selfAwareness,
  [listening.id]: listening,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract every recorder drives, so it cannot be a per-repo decision. Re-exported here
// because this module is what the app and the scripts import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
