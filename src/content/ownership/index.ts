import type { Course } from '../types'
import { ownershipAndAuthority } from './01-ownership-and-authority'
import { prioritising } from './02-prioritising'
import { nextActionsSection } from './03-next-actions'
import { realisticCapacity } from './04-realistic-capacity'
import { renegotiating } from './05-renegotiating'
import { followThroughSection } from './06-follow-through'

// Chapter 6: explain how to make, track and renegotiate realistic commitments.
export const ownership: Course = {
  id: 'ownership',
  title: 'Ownership, prioritisation and time management',
  sections: [ownershipAndAuthority, prioritising, nextActionsSection, realisticCapacity, renegotiating, followThroughSection],
}
