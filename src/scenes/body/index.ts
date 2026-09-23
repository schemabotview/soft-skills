import type { Scene } from '@graphlearning/flow'
import { silentMinutes } from './silent-minutes'
import { alignment } from './alignment'
import { posture } from './posture'
import { eyeContact } from './eye-contact'
import { hands } from './hands'
import { face } from './face'
import { nervousVsConfident } from './nervous-vs-confident'
import { entryAndExit } from './entry-and-exit'
import { onCameraBody } from './on-camera-body'
import { oneHabit } from './one-habit'

// Course 3 (body) scenes — one per section, mirroring src/content/body. Renderer order, with no two
// adjacent the same:
//   script · flow · compare · board · compare · board · compare · framework · board · script
export const bodyScenes: Scene[] = [
  silentMinutes,
  alignment,
  posture,
  eyeContact,
  hands,
  face,
  nervousVsConfident,
  entryAndExit,
  onCameraBody,
  oneHabit,
]
