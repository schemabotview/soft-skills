import type { Scene } from '@graphlearning/flow'
import { behavioursInContext } from './behaviours-in-context'
import { strengthsEvidence } from './strengths-evidence'
import { observationInterpretation } from './observation-interpretation'
import { threeResponses } from './three-responses'
import { perspective } from './perspective'
import { assertiveBoundaries } from './assertive-boundaries'

export const selfAwarenessScenes: Scene[] = [behavioursInContext, strengthsEvidence, observationInterpretation, threeResponses, perspective, assertiveBoundaries]
