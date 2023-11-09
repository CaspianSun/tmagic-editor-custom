<script lang="ts" setup>
import type { FieldProps } from '@tmagic/form'
import { ref, shallowRef, computed, watch, onMounted, toRef } from 'vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { ElCollapse, ElCollapseItem } from 'element-plus'
import { cloneDeep } from 'lodash'
import Layout from './components/Layout.vue'

defineOptions({
  name: 'MStyle'
})
const props = defineProps<FieldProps<any>>()
const emit = defineEmits(['change', 'addDiffCount'])
const style = computed({
  get: () => props.model[props.name] ?? {},
  set: async (val) => {
    emit('change', cloneDeep(val), 'style')
  }
})

const activeNames = ref<string[]>(['layout'])
const MONACO_EDITOR_OPTIONS = {
  fixedOverflowWidgets: true,
  automaticLayout: true,
  glyphMargin: false,
  folding: false,
  tabSize: 2,
  lineDecorationsWidth: 6,
  lineNumbersMinChars: 0
}
watch(
  () => style,
  () => {
    console.log('style', style.value, props.model)
  },
  {
    deep: true
  }
)
const newCode = ref('')
const code = computed({
  get: () => JSON.stringify(style.value, null, 2),
  set: (val) => {
    try {
      JSON.parse(val)
      newCode.value = val
      isCanSave.value = true
    } catch (e) {
      isCanSave.value = false
    }
  }
})
const isCanSave = ref(false)
const editorRef = shallowRef()
const handleMount = (editor: any) => (editorRef.value = editor)
const handleSaveCode = () => {
  isCanSave.value = false
  style.value = JSON.parse(newCode.value)
}
</script>

<template>
  <div class="flex flex-col flex-1 w-full min-w-300px">
    <div class="rd-5px overflow-hidden border border-solid border-transparent hover:(border-#ccc) focus-within:(border-#ccc)">
      <div class="flex justify-between p-4px">
        <div></div>
        <ElButton type="primary" @click="handleSaveCode" :disabled="!isCanSave" size="small"> 保存 </ElButton>
      </div>
      <VueMonacoEditor
        height="150px"
        v-model:value="code"
        language="json"
        theme="vs-light"
        :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount"
      />
    </div>
    <ElCollapse v-model="activeNames">
      <ElCollapseItem title="布局" name="layout">
        <Layout v-model="style"></Layout>
      </ElCollapseItem>
    </ElCollapse>
  </div>
</template>
