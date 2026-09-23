import type { Section } from '../types'

export const quantifying: Section = {
  id: 'quantifying',
  title: 'Finding the number',
  scene: 'quantifying',
  focus: 'risk',
  slide: `## Finding the number

*"Quantify your impact"* is useless advice until you know where numbers hide.

### Six places to look
- **Time** — *"six hours a week, every week"*
- **Money** — *"£1,400 a month in compute"*
- **Volume** — *"40 GB a day, up from 4"*
- **Quality** — *"zero rework after the validation check"*
- **People** — *"four analysts unblocked"*
- **Risk** — *"no repeat in eight months"*

### Two rules
- **An estimate is fine**, if you say it is one: *"roughly a day a week across the team"*
- **Risk is the one engineers never count.** Prevented incidents leave no trace, so nobody claims them — and prevention is most of what good engineering is.

> A rough honest number beats a precise number you cannot defend, and beats no number by a mile.`,
  narration:
    "Quantify your impact is useless advice until somebody tells you where the numbers actually hide, so here are six places to look. Time: six hours a week, every week — and note that the every week matters, because a one-off saving and a recurring one are very different things. Money: fourteen hundred pounds a month in compute. Volume: forty gigabytes a day, up from four, which tells a scale story without any adjectives. Quality: zero rework after the validation check went in. People: four analysts unblocked, which converts your work into somebody else's throughput. And risk: no repeat in eight months. Two rules. First, an estimate is completely fine as long as you say it is one. Roughly a day a week across the team is a perfectly good number, and it is much better than silence. What is not fine is a precise-sounding figure you cannot defend, because the follow-up question will arrive and it will not go well. Second, and this is the one I would press on: risk is the category engineers never count. Prevented incidents leave no trace. If you add a validation check and the bad data never ships again, nothing happens — and nothing happening is invisible, so nobody claims it, including you. But prevention is most of what good engineering actually is. Learn to say, that class of failure has not recurred in eight months. That is a result. A rough honest number beats no number by an enormous margin.",
}
