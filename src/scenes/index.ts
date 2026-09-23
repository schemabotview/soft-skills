import type { Scene } from '@graphlearning/flow'
import { presenceScenes } from './presence'
import { voiceScenes } from './voice'
import { bodyScenes } from './body'
import { structureScenes } from './structure'
import { listeningScenes } from './listening'
import { pressureScenes } from './pressure'
import { storiesScenes } from './stories'
import { pitchScenes } from './pitch'
import { roomScenes } from './room'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are globally unique across courses, so the flat lookup below is
// unambiguous. The nine-course spine is declared in src/content/index.ts from day one, but a
// course's scenes appear here only once that course has actually been authored.
const ALL: Scene[] = [...presenceScenes, ...voiceScenes, ...bodyScenes, ...structureScenes, ...listeningScenes, ...pressureScenes, ...storiesScenes, ...pitchScenes, ...roomScenes]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}
