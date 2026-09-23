import type { Scene } from '@graphlearning/flow'
import { noPerfectVoice } from './no-perfect-voice'
import { howVoiceIsMade } from './how-voice-is-made'
import { tension } from './tension'
import { breath } from './breath'
import { fiveDimensions } from './five-dimensions'
import { pace } from './pace'
import { uptalk } from './uptalk'
import { thePause } from './the-pause'
import { fillers } from './fillers'
import { onCamera } from './on-camera'

// Course 2 (voice) scenes — one per section, mirroring src/content/voice. Renderer order, per
// COURSE-PLAN.md's budget, with no two adjacent the same:
//   compare · flow · board · flow · board · compare · script · framework · script · board
export const voiceScenes: Scene[] = [
  noPerfectVoice,
  howVoiceIsMade,
  tension,
  breath,
  fiveDimensions,
  pace,
  uptalk,
  thePause,
  fillers,
  onCamera,
]
