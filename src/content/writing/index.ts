import type { Course } from '../types'
import { choosingAChannel } from './01-choosing-a-channel'
import { messageStructure } from './02-message-structure'
import { statusUpdates } from './03-status-updates'
import { decisionRecords } from './04-decision-records'
import { asyncAndTimeZones } from './05-async-and-time-zones'
import { beforeYouSend } from './06-before-you-send'

// Chapter 4: explain how written artefacts help people understand, decide and act.
export const writing: Course = {
  id: 'writing',
  title: 'Professional writing and asynchronous communication',
  sections: [choosingAChannel, messageStructure, statusUpdates, decisionRecords, asyncAndTimeZones, beforeYouSend],
}
