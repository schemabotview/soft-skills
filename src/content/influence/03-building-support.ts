import type { Section } from '../types'

export const buildingSupport: Section = {
  id: 'building-support',
  title: 'Building support through evidence, consultation and trust',
  scene: 'consulting',
  focus: 'consult',
  slide: `## Consult before you recommend

Support for a change is built **before** it is announced. Ask the people affected for their input, write a recommendation that includes their **concerns**, and take it to the person who **decides**.

### Announcing first
- Sam posts: "From Monday we add a 15:00 load."
- Jordan: nobody asked about the feed
- Alex: nobody asked who supports it
- The idea is resisted, then quietly dropped
- A good idea, delivered as something **done to** people

### Consulting, then recommending
- Jordan: feasible if it skips refunds
- Alex: weekdays yes, weekends no
- A short **written note**: evidence, options, both concerns
- **Priya decides**: weekdays, a one-month trial
- The design improved: no refunds, no weekends
- Consulting takes days; announcing costs trust`,
  narration:
    "There are two ways Sam could introduce the three o'clock load. The fast way is to announce it: from Monday, we add a three o'clock load. It takes a minute. Jordan's first reaction is that nobody asked about the feed. Alex's is to ask who supports it at three. The proposal might be a good one, but now it arrives as something done to people, and it is resisted, then quietly dropped. The slower way starts by asking. Jordan says it is feasible if the afternoon load skips the refund recalculation, which can wait for the next morning. Alex says weekday support is fine, but weekends are not. Sam writes a short note with the evidence that shop managers ask for the data, the options, and both concerns stated in Jordan's and Alex's words, then takes it to Priya, who has the right to decide. Priya approves a one-month trial, on weekdays. Consulting took three days. It also produced a better design than Sam's original, and the people who will run it already agree with it. Next, coordinating the trial.",
}
