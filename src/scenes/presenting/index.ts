import type { Scene } from '@graphlearning/flow'
import { centralMessage } from './central-message'
import { projectStory } from './project-story'
import { annotatedVisual } from './annotated-visual'
import { rehearsal } from './rehearsal'
import { answering } from './answering'
import { closing } from './closing'

export const presentingScenes: Scene[] = [centralMessage, projectStory, annotatedVisual, rehearsal, answering, closing]
