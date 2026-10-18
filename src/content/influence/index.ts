import type { Course } from '../types'
import { leadershipAsBehaviour } from './01-leadership-as-behaviour'
import { stakeholdersSection } from './02-stakeholders'
import { buildingSupport } from './03-building-support'
import { coordinatingSection } from './04-coordinating'
import { mentoringSection } from './05-mentoring'
import { ethicalInfluenceSection } from './06-ethical-influence'

// Chapter 11: explain how initiative, trust and coordination help a group move toward a shared goal.
export const influence: Course = {
  id: 'influence',
  title: 'Leadership and influence without formal authority',
  sections: [leadershipAsBehaviour, stakeholdersSection, buildingSupport, coordinatingSection, mentoringSection, ethicalInfluenceSection],
}
