import type { Course } from '../types'
import { noPerfectVoice } from './01-no-perfect-voice'
import { howVoiceIsMade } from './02-how-voice-is-made'
import { tension } from './03-tension'
import { breath } from './04-breath'
import { theFiveDimensions } from './05-the-five-dimensions'
import { pace } from './06-pace'
import { pitchAndTone } from './07-pitch-and-tone'
import { pause } from './08-pause'
import { fillerWords } from './09-filler-words'
import { voiceOnCamera } from './10-voice-on-camera'

// Course 2 — the vocal channel. Clear the interference first (tension, breath), then the five dials
// one at a time. The arc: no perfect voice · how it is made · tension · breath · the five dimensions
// · pace · pitch & tone · pause · fillers · on camera. The ten-section plot is in COURSE-PLAN.md.
export const voice: Course = {
  id: 'voice',
  title: 'Your Voice Is an Instrument',
  sections: [
    noPerfectVoice,
    howVoiceIsMade,
    tension,
    breath,
    theFiveDimensions,
    pace,
    pitchAndTone,
    pause,
    fillerWords,
    voiceOnCamera,
  ],
}
