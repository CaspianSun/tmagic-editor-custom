<script lang="ts" setup>
import * as monaco from "monaco-editor"
import { computed, onMounted, ref, toRaw, watch, defineModel } from "vue"
import { parseToCssCode, parseToStyleData } from "@/utils/css"

const style = defineModel<Record<string, any>>("style", {
  required: true
})

const codeEditor = ref<HTMLDivElement>()
const vsEditor = ref<monaco.editor.IStandaloneCodeEditor>()
const values = ref("")
const newValue = ref("")
const isCanSave = computed(() => {
  return values.value !== newValue.value
})

watch(
  () => style.value,
  (val, pre) => {
    if (JSON.stringify(val) !== JSON.stringify(pre)) {
      setEditorValue(parseToCssCode(val))
    }
  },
  { deep: true }
)

const setEditorValue = async (v: string | any) => {
  toRaw(vsEditor.value)?.setValue(v)
  values.value = v
}
const handleSaveCode = () => {
  const newCode = getEditorValue()
  values.value = newCode || ""
  style.value = parseToStyleData(newCode || "")
}
const getEditorValue = () => toRaw(vsEditor.value)?.getValue()

const init = async () => {
  if (!codeEditor.value) return
  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    language: "css",
    theme: "vs-light",
    fixedOverflowWidgets: true,
    automaticLayout: true,
    glyphMargin: false,
    folding: false,
    tabSize: 2,
    lineDecorationsWidth: 6,
    lineNumbersMinChars: 0,
    minimap: {
      enabled: false
    }
  }
  vsEditor.value = monaco.editor.create(codeEditor.value, options)
  setEditorValue(parseToCssCode(style.value))
  newValue.value = getEditorValue() || ""
  vsEditor.value.onDidChangeModelContent(() => {
    const value = getEditorValue()
    newValue.value = value || ""
  })
  codeEditor.value.addEventListener("keydown", (e) => {
    if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.preventDefault()
      e.stopPropagation()
      handleSaveCode()
    }
  })
}
onMounted(() => {
  init()
})
</script>

<template>
  <div class="rd-5px overflow-hidden border border-solid border-#ccc px-4px">
    <div class="flex justify-between p-4px">
      <div></div>
      <ElButton type="primary" @click="handleSaveCode" :disabled="!isCanSave" size="small"> 保存 </ElButton>
    </div>
    <div class="h-250px w-full">
      <div ref="codeEditor" class="full m-0"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
