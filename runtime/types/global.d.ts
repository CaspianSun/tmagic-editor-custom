declare interface Window {
  magicDSL: import('@tmagic/schema').MApp[]
  magic?: import('@tmagic/stage').Magic
  appInstance?: import('@tmagic/core').default
  dslPath?: string
}
declare module 'wow.js'
