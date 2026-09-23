import type { Course } from '../types'
import { theInterviewAsARoom } from './01-the-interview-as-a-room'
import { readingTheRoom } from './02-reading-the-room'
import { virtualEtiquette } from './03-virtual-etiquette'
import { stakeholders } from './04-stakeholders'
import { disagreeingUp } from './05-disagreeing-up'
import { conflict } from './06-conflict'
import { badNews } from './07-bad-news'
import { leadingWithoutATitle } from './08-leading-without-a-title'
import { thePracticePlan } from './09-the-practice-plan'
import { theWalk } from './10-the-walk'

// Course 9 — the capstone. Every section here spends something an earlier course built: the
// interview taken apart, then the four rooms that are not interviews (stakeholders, disagreeing up,
// conflict, bad news), then influence, the practice plan, and `the-walk` — one project through four
// rooms, using all of it at once.
export const room: Course = {
  id: 'room',
  title: 'Owning the Room',
  sections: [
    theInterviewAsARoom,
    readingTheRoom,
    virtualEtiquette,
    stakeholders,
    disagreeingUp,
    conflict,
    badNews,
    leadingWithoutATitle,
    thePracticePlan,
    theWalk,
  ],
}
