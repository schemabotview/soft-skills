import type { Section } from '../types'

export const beforeYouSend: Section = {
  id: 'before-you-send',
  title: 'Confidentiality, audience checks, accessibility and editing',
  scene: 'before-send',
  focus: 'checks',
  slide: `## Six checks before you send

A message, once sent, can be **forwarded**, **searched** and **kept**. A short check before sending catches what you would not want read out of context.

### A near miss
- Sam nearly forwarded a whole thread to Priya
- It included **store staff names** from the logs
- And an internal line: "Priya keeps changing it"
- Once sent, assume it **can** be forwarded

### The six checks
- **Recipients** — who needs this, and who does not
- **Sensitive** — remove personal or private detail not needed
- **Accessible** — headings, alt text, plain words
- **Tone** — read it as the recipient would
- **Length** — cut what the reader will not use
- **Ask first** — the request near the top`,
  narration:
    "A written message, once sent, can be forwarded, searched and kept for years. That is its strength, and the reason for a short check before sending. Here is a near miss. To save time, Sam was about to forward a whole thread to Priya. Scrolling down, Sam noticed two things. The thread included the names of store staff, copied from data logs, which Priya had no need to see. And it contained an internal comment: Priya keeps changing it. Neither belonged in the message. Six checks catch most problems like this. Recipients: who needs this, and who does not; reply-all is rarely the answer. Sensitive information: remove personal or private detail that the reader does not need. Accessibility: use headings, give images alternative text, and prefer plain words, so the message works for screen readers and for people reading in a second language. Tone: read it once as the recipient would. Length: cut what the reader will not use. And put the request near the top, where it will be seen. These take a minute, and they protect other people as well as you. Next chapter: teamwork.",
}
