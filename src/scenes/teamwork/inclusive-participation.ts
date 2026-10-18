import type { Scene } from '@graphlearning/flow'

// §4 — who gets heard when the meeting runs on whoever speaks first, and what widens it.
export const inclusiveParticipation: Scene = {
  id: 'inclusive-participation',
  title: 'Inclusive participation',
  flow: 'TB',
  nodes: [
    {
      id: 'default',
      label: 'Whoever speaks first',
      sub: 'who the meeting hears',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'fast', label: 'Fast talkers', sub: 'in their first language', pattern: 'warn', icon: 'zap' },
        { id: 'senior', label: 'Senior voices', sub: 'others defer', pattern: 'warn', icon: 'scale' },
        { id: 'room', label: 'In the room', sub: 'remote people wait', pattern: 'warn', icon: 'building' },
        { id: 'missing', label: 'Missing', sub: 'Mei, at 01:00 local', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    {
      id: 'widen',
      label: 'What widens it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'agenda', label: 'Agenda early', sub: 'a day ahead, with questions', pattern: 'service', icon: 'calendar' },
        { id: 'written', label: 'Written input', sub: 'before anyone speaks', pattern: 'service', icon: 'pencil' },
        { id: 'round', label: 'A round', sub: 'everyone, in turn, may pass', pattern: 'service', icon: 'repeat' },
        { id: 'captions', label: 'Captions', sub: 'and a shared document', pattern: 'service', icon: 'monitor' },
        { id: 'rotate', label: 'Rotate times', sub: 'share the late slots', pattern: 'service', icon: 'clock' },
        { id: 'pause', label: 'Pauses', sub: 'silence before deciding', pattern: 'service', icon: 'waves' },
      ],
    },
  ],
  edges: [{ source: 'default', target: 'widen', label: 'instead', dashed: true }],
}
