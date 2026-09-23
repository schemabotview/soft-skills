import type { Course } from '../types'
import { fightOrFlight } from './01-fight-or-flight'
import { theRush } from './02-the-rush'
import { silenceIsNotWeakness } from './03-silence-is-not-weakness'
import { pasr } from './04-pasr'
import { buyingTimePhrases } from './05-buying-time-phrases'
import { techniquePerQuestion } from './06-technique-per-question'
import { iDontKnow } from './07-i-dont-know'
import { beingChallenged } from './08-being-challenged'
import { recovering } from './09-recovering'
import { thePreBrief } from './10-the-pre-brief'

// Course 6 — the three channels under a clock. Physiology first, so the techniques read as
// compensations for a known deficit rather than as poise. Then the pause and its named shape, the
// phrases that make it legible, and the four situations that break people: not knowing, being
// challenged, fumbling, and the ten minutes before.
export const pressure: Course = {
  id: 'pressure',
  title: 'Thinking Under Pressure',
  sections: [
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
  ],
}
