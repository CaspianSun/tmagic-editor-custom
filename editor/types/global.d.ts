import type { Magic } from '@tmagic/stage'

declare global {
  interface Window {
    magic?: Magic
    actId?: number
    version?: string
  }
}
