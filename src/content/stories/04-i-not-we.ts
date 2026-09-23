import type { Section } from '../types'

export const iNotWe: Section = {
  id: 'i-not-we',
  title: 'I, not we',
  scene: 'i-not-we',
  slide: `## I, not we

Every rewrite on the right still credits the team. That is the point — this is not about taking credit, it is about being **findable**.

### Why we say "we"
- It is culturally correct in engineering, and mostly it **is** the truth — teams do build things
- Saying "I" feels like claiming more than your share, and nobody wants to be that person
- Code review, standups and retros all train the collective voice. Interviews do not run on it.

### What it costs, and the fix
- The interviewer is trying to work out **what you would do here**. "We" gives them nothing to go on.
- They cannot tell the difference between *"I led it"* and *"I was nearby"* — and will assume the cheaper one
- It costs most in the written record: a promotion document full of *we* is a document about a team

**The fix:** name the team **and** locate yourself in it — *"Three of us ran the migration; I designed the cutover."*

> You are not claiming their work. You are answering the question they asked.`,
  narration:
    "Every rewrite in the right-hand column still credits the team. I want that clear up front, because the advice to say I rather than we gets heard as advice to be self-promoting, and then people correctly reject it. So first, why do we say we? Because it is culturally correct in engineering, and because most of the time it is simply true — teams do build things, and the migration genuinely was three people. Saying I feels like claiming more than your share, and nobody wants to be the person in the retro taking credit. And everything about how we work trains the collective voice: code review, standups, retros, post-mortems that are deliberately blameless. All of that is good, and none of it prepares you for an interview, which does not run on it. Here is what it costs. The interviewer is trying to work out one thing: what would this person do if we put them in that situation here. We tells them nothing. They cannot distinguish between I led that migration and I was in the room while it happened, and in the absence of information they will assume the cheaper one. It costs most of all in the written record — a promotion document full of we is a document about a team, and it will be read as one. So: name the team and locate yourself in it. Three of us ran the migration, I designed the cutover. That is honest, it is generous, and it answers the question.",
}
