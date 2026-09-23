import type { Scene } from '@graphlearning/flow'
import { whyStories } from './why-stories'
import { star } from './star'
import { actionIsMostOfIt } from './action-is-most-of-it'
import { iNotWe } from './i-not-we'
import { quantifying } from './quantifying'
import { theFailureStory } from './the-failure-story'
import { noStoryYet } from './no-story-yet'
import { theStoryBank } from './the-story-bank'
import { behaviouralMap } from './behavioural-map'
import { starIsNotForEverything } from './star-is-not-for-everything'

// Course 7 (stories) scenes — one per section, mirroring src/content/stories. The worked examples
// come from the quarry's own STAR worksheets, which is why they name real situations. Renderer
// order, no two adjacent the same:
//   compare · framework · script · compare · board · script · framework · board · compare · script
export const storiesScenes: Scene[] = [
  whyStories,
  star,
  actionIsMostOfIt,
  iNotWe,
  quantifying,
  theFailureStory,
  noStoryYet,
  theStoryBank,
  behaviouralMap,
  starIsNotForEverything,
]
