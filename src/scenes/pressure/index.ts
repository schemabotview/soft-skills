import type { Scene } from '@graphlearning/flow'
import { fightOrFlight } from './fight-or-flight'
import { theRush } from './the-rush'
import { silenceIsNotWeakness } from './silence-is-not-weakness'
import { pasr } from './pasr'
import { buyingTimePhrases } from './buying-time-phrases'
import { techniquePerQuestion } from './technique-per-question'
import { iDontKnow } from './i-dont-know'
import { beingChallenged } from './being-challenged'
import { recovering } from './recovering'
import { thePreBrief } from './the-pre-brief'

// Course 6 (pressure) scenes — one per section, mirroring src/content/pressure. Renderer order, no
// two adjacent the same:
//   flow · compare · board · framework · script · compare · script · framework · script · board
export const pressureScenes: Scene[] = [
  fightOrFlight,
  theRush,
  silenceIsNotWeakness,
  pasr,
  buyingTimePhrases,
  techniquePerQuestion,
  iDontKnow,
  beingChallenged,
  recovering,
  thePreBrief,
]
