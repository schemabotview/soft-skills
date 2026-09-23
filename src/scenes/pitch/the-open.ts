import type { Scene } from '@graphlearning/flow'

// §4 the-open [script] — the first sentence, three attempts. Too little and too much are both
// common and both fail by under-selecting. The third is the formula stated as a sentence: role,
// years, domain, and nothing else. The trailing comment is the rule, kept on the frame because this
// is the one sentence in the course worth memorising verbatim.
export const theOpen: Scene = {
  id: 'the-open',
  padding: 0.16,
  nodes: [
    {
      id: 'open',
      kind: 'code',
      filename: 'the first sentence',
      label: [
        '# too little — true, and says nothing',
        '"Hi, I am Arjun. I am a developer."',
        '',
        '# too much — the list nobody retains',
        '"Hi, I am Arjun. I know Java, Spring Boot, microservices,',
        ' AWS, Docker, Kubernetes, Kafka and a bit of Terraform."',
        '',
        '# the open',
        '"Hi, I am Arjun — a Java backend engineer, five years,',
        ' in fintech."',
        '',
        '# role · years · domain. one sentence. no technology list.',
      ].join('\n'),
    },
  ],
  edges: [],
}
