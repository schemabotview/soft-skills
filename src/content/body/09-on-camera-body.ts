import type { Section } from '../types'

export const onCameraBody: Section = {
  id: 'on-camera-body',
  title: 'Your body on a call',
  scene: 'on-camera-body',
  focus: 'lens',
  slide: `## Your body on a call

The camera crops you to a rectangle and throws away most of the visual channel. What is left inside that rectangle carries more, not less.

### The frame — set it once
- **Camera at eye level.** Below it, you loom; above it, you shrink. A stack of books is the whole fix.
- **Sit back a little** — head and shoulders in shot, not a face filling the screen
- **Light in front of you.** A window behind you erases you into a silhouette.

### Inside the frame — every call
- **Look at the lens**, not their face and definitely not your own preview
- **Keep your hands in shot** — gestures still work on camera, and they are gone if they are under the desk
- **Be stiller than you would be in a room** — small motion reads as large in a small rectangle

> Watching your own thumbnail is the commonest bad habit on video calls. Hide your self-view.`,
  narration:
    "The camera crops you to a rectangle and throws away most of the visual channel — no full posture, no hands unless you put them there, no room presence at all. And the counter-intuitive consequence is that what is left inside that rectangle carries more weight than it would in a room, not less. Three things to set once. Camera at eye level: below it you loom over people and it is genuinely unflattering; above it you shrink and look like you are being interviewed by a security camera. A stack of books under the laptop is the entire fix. Sit back a little, so it is head and shoulders in shot rather than a face filling the frame — too close is the most common setup mistake and it makes conversations feel oddly confrontational. And get your light in front of you, because a window behind you turns you into a silhouette and people spend the whole call talking to a shape. Then three things on every call. Look at the lens rather than at their face, and definitely rather than at your own preview. Keep your hands in shot — gestures still work perfectly well on camera, and they are simply gone if your hands are under the desk. And be a little stiller than you would be in a room, because small movements read as large inside a small rectangle. One last thing. Watching your own thumbnail is the commonest bad habit on video calls, it makes you self-conscious, and it is visible. Hide your self-view.",
}
