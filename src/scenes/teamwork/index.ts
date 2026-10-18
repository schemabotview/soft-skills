import type { Scene } from '@graphlearning/flow'
import { workingAgreements } from './working-agreements'
import { trustRepair } from './trust-repair'
import { psychologicalSafety } from './psychological-safety'
import { inclusiveParticipation } from './inclusive-participation'
import { meetings } from './meetings'
import { knowledgeCredit } from './knowledge-credit'
import { handovers } from './handovers'

export const teamworkScenes: Scene[] = [workingAgreements, trustRepair, psychologicalSafety, inclusiveParticipation, meetings, knowledgeCredit, handovers]
