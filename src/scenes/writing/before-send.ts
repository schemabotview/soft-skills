import type { Scene } from '@graphlearning/flow'

// §6 — checks before sending: audience, confidentiality, accessibility, tone and length.
export const beforeSend: Scene = {
  id: 'before-send',
  title: 'Checks before you send',
  flow: 'TB',
  nodes: [
    {
      id: 'near-miss',
      label: 'A near miss',
      sub: 'forwarding a thread to the partner',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'names', label: 'Names', sub: 'store staff in the logs', pattern: 'warn', icon: 'users' },
        { id: 'internal', label: 'Internal', sub: '"Priya keeps changing it"', pattern: 'warn', icon: 'lock' },
      ],
    },
    {
      id: 'checks',
      label: 'Six checks',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'recipients', label: 'Recipients', sub: 'who needs it, who doesn’t', pattern: 'user', icon: 'users' },
        { id: 'sensitive', label: 'Sensitive', sub: 'remove what isn’t needed', pattern: 'warn', icon: 'shieldcheck' },
        { id: 'accessible', label: 'Accessible', sub: 'headings, alt text, plain', pattern: 'service', icon: 'scanface' },
        { id: 'tone', label: 'Tone', sub: 'read it as the recipient', pattern: 'network', icon: 'search' },
        { id: 'length', label: 'Length', sub: 'cut what they won’t use', pattern: 'service', icon: 'scissors' },
        { id: 'ask-first', label: 'Ask first', sub: 'the request near the top', pattern: 'storage', icon: 'pencil' },
      ],
    },
  ],
  edges: [{ source: 'near-miss', target: 'checks' }],
}
