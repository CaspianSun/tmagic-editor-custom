import { ref } from "vue"
import { defineStore } from "pinia"
export const useDataStore = defineStore(
  "data",
  () => {
    const magicDSL = ref<string>("")
    const setMagicDSL = (dsl: string) => {
      magicDSL.value = dsl
    }
    const actId = ref<string>("195")
    const actCode = ref<string>("0hRkA")
    const baseFormCode = ref<string>("CxDe")
    return { magicDSL, setMagicDSL, actId, actCode, baseFormCode }
  },
  {
    persist: true
  }
)
