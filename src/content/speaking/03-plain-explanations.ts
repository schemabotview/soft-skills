import type { Section } from '../types'

export const plainExplanationsSection: Section = {
  id: 'plain-explanations',
  title: 'Explaining technical ideas in plain language',
  scene: 'plain-explanations',
  focus: 'versions',
  slide: `## Plain words, honest analogies

Technical detail is precise among specialists and opaque to everyone else. Plain language starts from the **effect** on the listener and uses analogies **with their limits stated**.

### The same delay, two ways
- **Engineers** — "The ingest job hit a lock timeout."
- **Priya** — "The data arrived three hours late."
- Both are true; each fits its listener

### Using analogies well
- **Like** a delivery that comes twice a day
- **Unlike** a delivery, paying more cannot rush it
- Say where it **breaks**, before anyone relies on it

### Checks
- Lead with the **effect** on them; define at most one term
- Describe **what** happened, not **who** to blame
- Ask if it made sense, and listen
- Offer the technical version to anyone who wants it`,
  narration:
    "Explaining a technical problem to someone outside the field is a skill of its own. For engineers, Jordan would say the ingest job hit a lock timeout. That is precise, and almost meaningless to Priya. For Priya, Sam says the morning data arrived three hours late. Both are true; each fits its audience. Plain language starts from the effect on the listener, not from the mechanism. Analogies help, but they need limits. The data feed is like a delivery that comes twice a day, which explains why the numbers are a few hours old. But unlike a delivery, paying more cannot make it come faster, because the delay is in the source system. If Sam leaves that limit unsaid, Priya may reasonably ask why the team does not just pay for an express service. Say where an analogy breaks before someone relies on it. A few checks keep a plain explanation honest. Lead with the effect. Define one term at most, and only if it is needed. Describe what happened, not who to blame. And ask whether it made sense, then actually listen to the answer. Next, making requests.",
}
