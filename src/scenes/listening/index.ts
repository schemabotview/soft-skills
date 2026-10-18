import type { Scene } from '@graphlearning/flow'
import { listenToUnderstand } from './listen-to-understand'
import { questionTypes } from './question-types'
import { paraphrase } from './paraphrase'
import { needsConstraints } from './needs-constraints'
import { acrossBackgrounds } from './across-backgrounds'
import { cuesSilence } from './cues-silence'
import { confirmNextSteps } from './confirm-next-steps'

export const listeningScenes: Scene[] = [listenToUnderstand, questionTypes, paraphrase, needsConstraints, acrossBackgrounds, cuesSilence, confirmNextSteps]
