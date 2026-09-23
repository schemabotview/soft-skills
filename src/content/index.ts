import { presence } from './presence'
import { voice } from './voice'
import { body } from './body'
import { structure } from './structure'
import { listening } from './listening'
import { pressure } from './pressure'
import { stories } from './stories'
import { pitch } from './pitch'
import { room } from './room'
import type { Course, Section } from './types'

// The course catalog, in syllabus order. → past a course's last section rolls into the next course's
// first. All nine courses are declared up front so the whole arc is visible in the app from day one;
// each fills with sections as its slice is authored.
//
// The nine-course spine (90 sections planned — see COURSE-PLAN.md):
//   1 presence · 2 voice · 3 body · 4 structure · 5 listening
//   6 pressure · 7 stories · 8 pitch · 9 room
//
// Courses 1–3 are the three channels one message leaves on; 4 makes the verbal channel worth
// hearing; 5–9 are those same three channels under load. Narration is authored FRESH — the source
// workshop is an inventory, not a script — and the house rule is that NOTHING cross-references a
// neighbour by course number. That is what lets the repo ship as a PREFIX: courses 1–5 can go live
// while 6–9 are still being authored, and a later reorder costs nothing until the wavs exist. After
// a course's audio is generated, its section ORDER is frozen — wav filenames are pinned to section ids.
export const COURSES: Record<string, Course> = {
  [presence.id]: presence,
  [voice.id]: voice,
  [body.id]: body,
  [structure.id]: structure,
  [listening.id]: listening,
  [pressure.id]: pressure,
  [stories.id]: stories,
  [pitch.id]: pitch,
  [room.id]: room,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract the recorder drives, so it cannot be a per-repo decision. Re-exported here because
// this module is what the app and the scripts already import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
