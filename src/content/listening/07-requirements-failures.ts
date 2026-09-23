import type { Section } from '../types'

export const requirementsFailures: Section = {
  id: 'requirements-failures',
  title: 'Where projects actually break',
  scene: 'requirements-failures',
  slide: `## Where projects actually break

Every line on the left is a faithful transcription of the one above it. Nobody was careless. It still cost six weeks.

### How a word decays
- **"Region"** was never questioned, because everybody already knew what it meant — differently
- The ticket is a faithful summary. The table is a faithful build. The decay is **invisible at every step**.
- Nobody lied, nobody skimmed, and no amount of code review catches this
- It surfaces at demo, which is the most expensive place for it to surface

### The cheap defence
- Read the **shared noun** back with a definition attached: *"region meaning where the customer is, not the warehouse?"*
- Do it for nouns that sound obvious. Those are the ones that decay — obvious words do not get questioned.
- Put the definition in the ticket, not just in your head

> Requirements do not usually fail on the hard words. They fail on the easy ones.`,
  narration:
    "I want to walk one real failure, because this is where listening stops being a soft skill and starts being the most expensive technical skill in the building. The client says: we need to see returns by region. Completely ordinary sentence. It goes into a ticket as: add a region dimension to the returns dashboard. That ticket is a faithful summary — you would sign it off in refinement without a second thought. Somebody builds returns by region, grouped by warehouse region, because that is the region column that exists in the warehouse schema and it is obviously the one they meant. And what they meant was customer region. Six weeks. Now, notice what did not happen here. Nobody lied. Nobody skimmed. Nobody was careless. Every step was a faithful transcription of the one above it, and there is no amount of code review that catches this, because the code is correct — it correctly implements the wrong noun. And it surfaces at the demo, which is the single most expensive place for it to surface, because by then it is in front of the client and it is also in the pipeline. The defence costs one sentence. Read the shared noun back with a definition attached: region, meaning where the customer is, not where the warehouse is? And here is the counter-intuitive bit — do that for the nouns that sound obvious. Region. Active. Complete. Daily. Those are exactly the ones that decay, precisely because being obvious is what stops anybody questioning them.",
}
