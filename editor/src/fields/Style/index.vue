<script lang="ts" setup>
import type { FieldProps } from '@tmagic/form'
import { ref, computed, watch, onMounted, toRaw } from 'vue'
import * as monaco from 'monaco-editor'
import { ElCollapse, ElCollapseItem } from 'element-plus'
import Layout from './components/Layout.vue'
import { parseToCssCode, parseToStyleData } from '@/utils/css'

defineOptions({
  name: 'MStyle'
})
const props = defineProps<FieldProps<any>>()
const emit = defineEmits(['change'])
const style = computed({
  get: () => props.model[props.name] ?? {},
  set: async (val) => {
    if (JSON.stringify(val) === JSON.stringify(props.model[props.name])) return
    emit('change', val, 'style')
  }
})

watch(
  () => props.model[props.name],
  (val, pre) => {
    if (JSON.stringify(val) !== JSON.stringify(pre)) {
      setEditorValue(parseToCssCode(val))
    }
  },
  { deep: true }
)
const activeNames = ref<string[]>(['layout'])
const values = ref('')
const newValue = ref('')
const isCanSave = computed(() => values.value !== newValue.value)
const codeEditor = ref<HTMLDivElement>()
const handleSaveCode = () => {
  const newCode = getEditorValue()
  values.value = newCode ?? ''
  style.value = parseToStyleData(newCode ?? '')
}

const setEditorValue = async (v: string | any) => {
  toRaw(vsEditor.value)?.setValue(v)
  values.value = v
}
const getEditorValue = () => toRaw(vsEditor.value)?.getValue()

const vsEditor = ref<monaco.editor.IStandaloneCodeEditor>()
const init = async () => {
  if (!codeEditor.value) return
  const options = {
    language: 'css',
    theme: 'vs-light',
    fixedOverflowWidgets: true,
    automaticLayout: true,
    glyphMargin: false,
    folding: false,
    tabSize: 2,
    lineDecorationsWidth: 6,
    lineNumbersMinChars: 0
  }
  vsEditor.value = monaco.editor.create(codeEditor.value, options)
  setEditorValue(parseToCssCode(style.value))
  newValue.value = getEditorValue() ?? ''
  vsEditor.value.onDidChangeModelContent(() => {
    const value = getEditorValue()
    newValue.value = value ?? ''
  })
  codeEditor.value.addEventListener('keydown', (e) => {
    if (e.keyCode === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
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
  <div class="flex flex-col flex-1 w-full min-w-300px">
    <div class="rd-5px overflow-hidden border border-solid border-transparent hover:(border-#ccc) focus-within:(border-#ccc)">
      <div class="flex justify-between p-4px">
        <div></div>
        <ElButton type="primary" @click="handleSaveCode" :disabled="!isCanSave" size="small"> 保存 </ElButton>
      </div>
      <div class="h-400px w-full">
        <div ref="codeEditor" class="full m-0"></div>
      </div>
    </div>
    <!-- <ElCollapse v-model="activeNames">
      <ElCollapseItem title="布局" name="layout">
        <Layout v-model="style"></Layout>
      </ElCollapseItem>
    </ElCollapse> -->
  </div>
</template>
