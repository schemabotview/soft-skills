import type { Scene } from '@graphlearning/flow'
import { changeResponse } from './change-response'
import { improvementNote } from './improvement-note'
import { mentoringRequest } from './mentoring-request'
import { starAnswer } from './star-answer'
import { timeline } from './timeline'
import { sustainable } from './sustainable'

export const growthScenes: Scene[] = [changeResponse, improvementNote, mentoringRequest, starAnswer, timeline, sustainable]
