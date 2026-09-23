import type { Course } from '../types'
import { alwaysBeingRead } from './01-always-being-read'
import { alignment } from './02-alignment'
import { posture } from './03-posture'
import { eyeContact } from './04-eye-contact'
import { hands } from './05-hands'
import { face } from './06-face'
import { nervousVsConfident } from './07-nervous-vs-confident'
import { entryAndExit } from './08-entry-and-exit'
import { onCameraBody } from './09-on-camera-body'
import { oneHabitAtATime } from './10-one-habit-at-a-time'

// Course 3 — the visual channel. Ground it first (alignment, posture), then the signals one at a
// time, then the summary read, then how to actually train it. The arc: always being read · alignment
// · posture · eye contact · hands · face · the whole read · entry & exit · on camera · one habit.
export const body: Course = {
  id: 'body',
  title: 'What They See Before You Speak',
  sections: [
    alwaysBeingRead,
    alignment,
    posture,
    eyeContact,
    hands,
    face,
    nervousVsConfident,
    entryAndExit,
    onCameraBody,
    oneHabitAtATime,
  ],
}
