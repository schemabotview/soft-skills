import type { Scene } from '@graphlearning/flow'
import { mainPoint } from './main-point'
import { structure } from './structure'
import { plainExplanations } from './plain-explanations'
import { specificRequests } from './specific-requests'
import { dontKnow } from './dont-know'
import { disagree } from './disagree'

export const speakingScenes: Scene[] = [mainPoint, structure, plainExplanations, specificRequests, dontKnow, disagree]
