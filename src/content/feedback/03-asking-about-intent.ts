import type { Section } from '../types'

export const askingAboutIntent: Section = {
  id: 'asking-about-intent',
  title: 'Asking about intent and hearing another account',
  scene: 'intent',
  focus: 'exchange',
  slide: `## Ask what was going on

The CCL's extension, **SBII**, adds a fourth step: ask about **intent**. People act for reasons you cannot see, and the reason often changes what the right fix is.

### The exchange
- Sam: "What was going on for you on Wednesday?"
- Jordan: "I got pulled into another team's outage."
- Sam: "That makes sense. It still left Mei waiting."
- Jordan: "Fair. I should have said so."
- Then **listen** to the whole answer

### What the account changes
- The **impact** stays: Mei still waited
- The **fix** changes: a named backup, not "try harder"
- Intent is **asked**, never assumed or diagnosed
- Context explains; it is not a free pass
- Listening fully is the step most often skipped
- A good intent can still have a poor impact`,
  narration:
    "SBI describes what happened and its effect. The Center for Creative Leadership's extension, SBII, adds a fourth step: ask about intent. People act for reasons you cannot see from where you sit, and the reason often changes what the right fix is. So after describing the impact, Sam asks: what was going on for you on Wednesday? Jordan explains: another team had an outage, and Jordan was pulled in to help with it all morning. Sam acknowledges that: that makes sense. And keeps the impact in view: it still left Mei waiting. Jordan agrees: fair, I should have said so. Notice what the account changed and what it did not. The impact stays the same; Mei still waited a day. But the fix is different. If the cause had been carelessness, the fix might have been a reminder. Since the cause was being pulled away, the fix is a named backup for handovers and a one-line note when it happens, not try harder. Intent is asked, never assumed and never diagnosed. And context explains a behaviour; it is not a free pass. Next, the other side: receiving feedback.",
}
