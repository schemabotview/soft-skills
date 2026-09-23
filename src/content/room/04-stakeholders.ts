import type { Section } from '../types'

export const stakeholders: Section = {
  id: 'stakeholders',
  title: 'Who is actually across the table',
  scene: 'stakeholders',
  slide: `## Who is actually across the table

What each one *wants* is guessable. What each one **fears** is not — and it explains the questions that otherwise seem arbitrary.

### The four
- **Your manager** — wants predictability; fears being surprised in their own review
- **A client** — wants reassurance; fears paying for the same problem twice
- **An executive** — wants a decision; fears risk nobody has quantified
- **A peer team** — wants not to be blocked; fears your work becoming their on-call

### What the fear column buys you
- A manager asking *"are you sure?"* for the third time is not doubting you. They are managing **their** exposure.
- Answer the fear and the repeated question stops: *"If it slips, you'll know on Tuesday, not Friday."*
- An exec's *"what's the risk?"* wants a **bounded** answer, not a reassuring one

> Address what they want and you have answered. Address what they fear and you have finished.`,
  narration:
    "What each of these people wants is fairly guessable. What each of them fears is not, and the fear column is the one that changes how you handle them, because it explains questions that otherwise seem arbitrary or even insulting. Your manager wants predictability and fears being surprised in their own review — surprised in front of their boss, specifically. A client wants reassurance and fears paying for the same problem twice. An executive wants a decision and fears risk that nobody has quantified — note that they are not afraid of risk, they are afraid of unquantified risk, which is a completely different thing. And a peer team wants not to be blocked, and fears your work becoming their on-call burden. Now, what does the fear column actually buy you? Take the manager who asks are you sure for the third time. Your instinct is that they are doubting your competence, and that feels bad, and you get defensive. They are not doubting you. They are managing their own exposure, and they will keep asking until that exposure is addressed. So address it directly: if it slips, you will know on Tuesday rather than Friday. The repeated question stops immediately, because you just answered the real one. Same with an executive asking what is the risk — they want a bounded answer, not a reassuring one. Worst case we lose a week and no data is affected is a far better answer than it should be fine. Address what they want and you have answered them. Address what they fear and you have finished.",
}
