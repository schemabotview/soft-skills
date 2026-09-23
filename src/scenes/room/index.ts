import type { Scene } from '@graphlearning/flow'
import { theInterviewAsARoom } from './the-interview-as-a-room'
import { readingTheRoom } from './reading-the-room'
import { virtualEtiquette } from './virtual-etiquette'
import { stakeholders } from './stakeholders'
import { disagreeingUp } from './disagreeing-up'
import { conflict } from './conflict'
import { badNews } from './bad-news'
import { leadingWithoutATitle } from './leading-without-a-title'
import { thePracticePlan } from './the-practice-plan'
import { theWalk } from './the-walk'

// Course 9 (room) scenes — one per section, mirroring src/content/room. The capstone: every scene
// here spends something the earlier courses built, and `the-walk` spends all of it at once.
// Renderer order, no two adjacent the same:
//   board · compare · board · compare · script · framework · script · compare · board · flow
export const roomScenes: Scene[] = [
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
]
