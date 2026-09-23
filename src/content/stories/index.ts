import type { Course } from '../types'
import { whyStories } from './01-why-stories'
import { star } from './02-star'
import { actionIsMostOfIt } from './03-action-is-most-of-it'
import { iNotWe } from './04-i-not-we'
import { quantifying } from './05-quantifying'
import { theFailureStory } from './06-the-failure-story'
import { noStoryYet } from './07-no-story-yet'
import { theStoryBank } from './08-the-story-bank'
import { theBehaviouralMap } from './09-the-behavioural-map'
import { starIsNotForEverything } from './10-star-is-not-for-everything'

// Course 7 — the specific, against the claim. STAR first, then the three ways it is mis-run
// (proportions, "we", no number), then the two hard cases (failure, no story), then the bank and the
// map — and closing on the questions STAR is the wrong tool for.
export const stories: Course = {
  id: 'stories',
  title: 'The Stories You Tell About Your Work',
  sections: [
    whyStories,
    star,
    actionIsMostOfIt,
    iNotWe,
    quantifying,
    theFailureStory,
    noStoryYet,
    theStoryBank,
    theBehaviouralMap,
    starIsNotForEverything,
  ],
}
