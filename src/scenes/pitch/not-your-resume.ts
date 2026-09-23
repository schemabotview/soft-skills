import type { Scene } from '@graphlearning/flow'

// §2 not-your-resume [script] — the resume read aloud against the pitch. The first block is not a
// straw man: it is what people genuinely produce when asked to summarise themselves, because summary
// is the wrong instruction. The comment under each names the job it is doing, which is the section's
// actual claim — one is a record, the other is an invitation.
export const notYourResume: Scene = {
  id: 'not-your-resume',
  padding: 0.14,
  nodes: [
    {
      id: 'two',
      kind: 'code',
      filename: 'summary, and pitch',
      label: [
        '# the resume, read aloud',
        '"I did my BE in Computer Science at Pune. I joined Infosys',
        ' as a graduate, spent two years in support, moved to the',
        ' data team in 2021, and since then I have worked on ETL,',
        ' reporting, and some cloud migration work."',
        '# complete. accurate. answers nothing they asked.',
        '',
        '# the pitch',
        '"I am a data engineer — I spend most of my time making',
        ' pipelines that people actually trust. Last year I took',
        ' our nightly load from six hours to forty minutes."',
        '# incomplete on purpose. earns the next question.',
      ].join('\n'),
    },
  ],
  edges: [],
}
