import type { Scene } from '@graphlearning/flow'
import { ownershipAuthority } from './ownership-authority'
import { priorities } from './priorities'
import { nextActions } from './next-actions'
import { capacity } from './capacity'
import { renegotiate } from './renegotiate'
import { followThrough } from './follow-through'

export const ownershipScenes: Scene[] = [ownershipAuthority, priorities, nextActions, capacity, renegotiate, followThrough]
