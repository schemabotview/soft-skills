import type { Scene } from '@graphlearning/flow'
import { channels } from './channels'
import { messageAnatomy } from './message-anatomy'
import { statusUpdate } from './status-update'
import { decisionRecord } from './decision-record'
import { timeZones } from './time-zones'
import { beforeSend } from './before-send'

export const writingScenes: Scene[] = [channels, messageAnatomy, statusUpdate, decisionRecord, timeZones, beforeSend]
