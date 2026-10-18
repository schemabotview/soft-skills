import type { Scene } from '@graphlearning/flow'
import { feedbackPurpose } from './feedback-purpose'
import { sbi } from './sbi'
import { intent } from './intent'
import { receiving } from './receiving'
import { nextStep } from './next-step'
import { powerAccuracy } from './power-accuracy'

export const feedbackScenes: Scene[] = [feedbackPurpose, sbi, intent, receiving, nextStep, powerAccuracy]
