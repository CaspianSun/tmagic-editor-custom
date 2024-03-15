import type { MApp } from "@tmagic/schema"
import { useDataStore } from "@store/modules/data"

export const getLocalConfig = (): MApp[] => {
  const dataStore = useDataStore()
  const configStr = dataStore.magicDSL
  if (!configStr) return []
  try {
    return [eval(`(${configStr})`)]
  } catch (err) {
    return []
  }
}
