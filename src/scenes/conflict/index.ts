import type { Scene } from '@graphlearning/flow'
import { conflictTypes } from './conflict-types'
import { preparing } from './preparing'
import { opening } from './opening'
import { positionsInterests } from './positions-interests'
import { optionsCriteria } from './options-criteria'
import { batna } from './batna'
import { routes } from './routes'

export const conflictScenes: Scene[] = [conflictTypes, preparing, opening, positionsInterests, optionsCriteria, batna, routes]
