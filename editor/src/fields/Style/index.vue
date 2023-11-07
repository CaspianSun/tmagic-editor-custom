<script lang="ts" setup>
import type { FieldProps } from '@tmagic/form'
import { ref, shallowRef, computed, watch } from 'vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { ElCollapse, ElCollapseItem, ElRow, ElCol, ElTooltip, ElRadioGroup, ElRadioButton } from 'element-plus'

defineOptions({
  name: 'MStyle'
})
const emit = defineEmits(['change'])
const props = defineProps<FieldProps<any>>()
const style = computed({
  get: () => props.model[props.name],
  set: (val) => emit('change', val)
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

const code = computed({
  get: () => JSON.stringify(style.value, null, 2),
  set: (val) => {
    try {
      const style = JSON.parse(val)
      if (style) {
        newCode.value = val
        isCanSave.value = true
      }
    } catch (e) {
      isCanSave.value = false
    }
  }
})
const newCode = ref('')

const isCanSave = ref(false)
const editorRef = shallowRef()
const handleMount = (editor: any) => (editorRef.value = editor)
const handleSaveCode = () => {
  style.value = JSON.parse(newCode.value)
  isCanSave.value = false
}
const hoverElement = ref('')
const handleHover = (e: MouseEvent) => {
  console.log(e)
  //@ts-ignore
  hoverElement.value = e?.target?.parentElement?.dataset?.element ?? ''
}
const handleHoverLeave = () => {
  hoverElement.value = ''
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
        <ElRow class="flex items-center">
          <div class="mr-5px">布局模式:</div>
          <ElRadioGroup v-model="style['display']">
            <ElTooltip effect="light" placement="top" content="内联布局">
              <ElRadioButton label="inline"> 内联 </ElRadioButton>
            </ElTooltip>
            <ElTooltip effect="light" placement="top" content="弹性布局">
              <ElRadioButton label="flex">弹性</ElRadioButton>
            </ElTooltip>
            <ElTooltip effect="light" placement="top" content="块布局">
              <ElRadioButton label="block">块</ElRadioButton>
            </ElTooltip>
            <ElTooltip effect="light" placement="top" content="内联块布局">
              <ElRadioButton label="inline-block">内联块</ElRadioButton>
            </ElTooltip>
            <ElTooltip effect="light" placement="top" content="隐藏">
              <ElRadioButton label="none">隐藏</ElRadioButton>
            </ElTooltip>
          </ElRadioGroup>
        </ElRow>
        <ElRow class="mt-10px rd-5px">
          <div class="w-full overflow-hidden">
            <div
              class="top-center bg-#eace95 w-99% h-200px"
              :class="[hoverElement ? (hoverElement === 'margin' ? 'hover' : 'noHover') : '']"
            >
              <div data-element="margin">
                <div @mousemove="handleHover" class="top-0 left-0 absolute w-full h-15% flex-center">123</div>
                <div @mousemove="handleHover" class="bottom-0 left-0 absolute w-full h-15% flex-center">123</div>
                <div @mousemove="handleHover" class="left-0 top-0 absolute w-15% h-full flex-center">123</div>
                <div @mousemove="handleHover" class="right-0 top-0 absolute w-15% h-full flex-center">123</div>
              </div>
              <div
                class="top-center bg-#aed29f w-70% h-70%"
                :class="[hoverElement ? (hoverElement === 'padding' ? 'hover' : 'noHover') : '']"
              >
                <div data-element="padding">
                  <div @mousemove="handleHover" class="top-0 left-0 absolute w-full h-25% flex-center">123</div>
                  <div @mousemove="handleHover" class="bottom-0 left-0 absolute w-full h-25% flex-center">123</div>
                  <div @mousemove="handleHover" class="left-0 top-0 absolute w-20% h-full flex-center">123</div>
                  <div @mousemove="handleHover" class="right-0 top-0 absolute w-20% h-full flex-center">123</div>
                </div>
                <div
                  data-element="content"
                  class="top-center bg-#9ae0f1 w-60% h-50%"
                  :class="[hoverElement ? (hoverElement === 'content' ? 'hover' : 'noHover') : '']"
                >
                  <div data-element="content" @mousemove.stop="handleHover" class="full flex-center">
                    <div>{{ style['width'] ?? 'auto' }}</div>
                    <div class="mx-10px">x</div>
                    <div>{{ style['height'] ?? 'auto' }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ElRow>
        <ElRow>
          <ElCol :span="12">3</ElCol>
          <ElCol :span="12">4</ElCol>
        </ElRow>
      </ElCollapseItem>
    </ElCollapse>
  </div>
</template>

<style lang="scss" scoped>
.top-center {
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  border: 1px dashed #000;
  &.noHover {
    background-color: #fff;
  }
}
</style>
