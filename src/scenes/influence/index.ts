import type { Scene } from '@graphlearning/flow'
import { leadingBehaviours } from './leading-behaviours'
import { stakeholders } from './stakeholders'
import { consulting } from './consulting'
import { coordinating } from './coordinating'
import { mentoring } from './mentoring'
import { ethicalInfluence } from './ethical-influence'

export const influenceScenes: Scene[] = [leadingBehaviours, stakeholders, consulting, coordinating, mentoring, ethicalInfluence]
