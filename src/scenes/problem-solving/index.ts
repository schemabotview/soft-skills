import type { Scene } from '@graphlearning/flow'
import { framing } from './framing'
import { factsAssumptions } from './facts-assumptions'
import { alternatives } from './alternatives'
import { optionTable } from './option-table'
import { biases } from './biases'
import { reversible } from './reversible'
import { revisiting } from './revisiting'

export const problemSolvingScenes: Scene[] = [framing, factsAssumptions, alternatives, optionTable, biases, reversible, revisiting]
