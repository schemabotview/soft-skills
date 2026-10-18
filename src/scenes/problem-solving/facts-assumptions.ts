import type { Scene } from '@graphlearning/flow'

// §2 — statements from the team's discussion, sorted by kind and by how to check them.
export const factsAssumptions: Scene = {
  id: 'facts-assumptions',
  title: 'Facts, assumptions, opinions and missing evidence',
  flow: 'TB',
  nodes: [
    {
      id: 'sort',
      kind: 'table',
      label: 'Sorting what was said in the meeting',
      headers: ['statement', 'kind', 'check by'],
      values: [
        ['"Jordan missed two updates"', 'fact', 'the update log'],
        ['"Jordan isn’t trying"', 'assumption', 'asking Jordan'],
        ['"The fix takes a week"', 'estimate', 'Jordan’s breakdown'],
        ['"Finance needs every column"', 'assumption', 'asking finance'],
        ['"The old report was better"', 'opinion', 'what "better" means'],
      ],
    },
    {
      id: 'missing',
      label: 'What nobody knows yet',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'columns', label: 'Columns', sub: 'which finance really uses', pattern: 'warn', icon: 'table' },
        { id: 'cause', label: 'Cause', sub: 'of the late loads', pattern: 'warn', icon: 'bug' },
      ],
    },
  ],
  edges: [{ source: 'sort', target: 'missing', dashed: true }],
}
