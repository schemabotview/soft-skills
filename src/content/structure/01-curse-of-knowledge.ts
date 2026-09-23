import type { Section } from '../types'

export const curseOfKnowledge: Section = {
  id: 'curse-of-knowledge',
  title: 'The curse of knowledge',
  scene: 'curse-of-knowledge',
  slide: `## The curse of knowledge

The person who understands the system best is, reliably, the worst at explaining it. This is a structural problem, not a character flaw.

### Why expertise makes it harder
- You **cannot un-know** the model in your head, and you cannot see that they lack it
- What is obvious to you feels insulting to say — so you skip it, and that is the missing piece
- You narrate in **discovery order** because that is how you experienced it
- You optimise for **precision**. They need a **decision**.

### What actually fixes it
- Ask what decision they are trying to make, then say only what bears on it
- Lead with the **effect**, not the cause
- Assume no shared model, then add back exactly as much as the decision needs

> Clarity is not saying less. It is saying the part that is load-bearing for *them*.`,
  narration:
    "Here is an uncomfortable fact about explaining things: the person who understands a system best is reliably the worst at explaining it, and that is structural rather than a character flaw. It is called the curse of knowledge, and it works like this. Once you know something, you cannot un-know it, and — this is the important half — you cannot accurately see that somebody else does not know it. Your brain does not keep a record of what it felt like before you understood. So three things follow. First, the piece that is most obvious to you feels almost insulting to say out loud, so you skip it. That skipped piece is very often exactly the piece they were missing. Second, you narrate in discovery order, because that is the order you experienced it in — first I checked this, then I noticed that — which means the conclusion arrives last, after they have stopped following. And third, you optimise for precision, because precision is what your profession rewards. But the person in front of you is not trying to be precise. They are trying to make a decision. So the fix is not the advice everybody gives, which is be clearer, or use simpler words. It is more specific than that. Find out what decision they are trying to make. Lead with the effect rather than the cause. Assume no shared model, and then add back exactly as much of it as that decision actually needs. Clarity is not saying less. It is saying the part that is load-bearing for them.",
}
