<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue'
import { ElRow, ElCol, ElTooltip, ElRadioGroup, ElRadioButton } from 'element-plus'
import { cloneDeep } from 'lodash'

const props = defineProps<{
  modelValue: Record<string, any>
}>()
const emit = defineEmits(['update:modelValue'])
const style = ref<Record<string, any>>(cloneDeep(props.modelValue ?? {}))
watch(
  () => props.modelValue,
  (val) => {
    style.value = cloneDeep(val)
  }
)
watch(
  () => style,
  (val) => {
    if (JSON.stringify(val.value) === JSON.stringify(props.modelValue)) return
    emit('update:modelValue', val.value)
  },
  {
    deep: true
  }
)

const marginConfig = [{ value: 'margin-top' }, { value: 'margin-bottom' }, { value: 'margin-left' }, { value: 'margin-right' }]
const paddingConfig = [{ value: 'padding-top' }, { value: 'padding-bottom' }, { value: 'padding-left' }, { value: 'padding-right' }]

const hoverElement = ref('')

const hoverElementResolve = ref()
const handleHoverEnter = (e: MouseEvent) => {
  if (isEditText.value)
    new Promise((resolve) => (hoverElementResolve.value = resolve)).then(
      //@ts-ignore
      () => (hoverElement.value = e?.target?.parentElement?.dataset?.element ?? '')
    )
  //@ts-ignore
  else hoverElement.value = e?.target?.parentElement?.dataset?.element ?? ''
}
const handleHoverLeave = () => {
  if (isEditText.value)
    new Promise((resolve) => (hoverElementResolve.value = resolve)).then(
      //@ts-ignore
      () => (hoverElement.value = '')
    )
  //@ts-ignore
  else hoverElement.value = ''
}
const isEditText = ref('')
const handleEditText = (e: MouseEvent, item: string) => {
  isEditText.value = item
  nextTick(() => {
    const ele = document.getElementById(item) as Node
    if (window.getSelection) {
      const selection = window.getSelection()
      const range = document.createRange()
      if (!e.target || !selection || !ele) return
      range.selectNodeContents(ele)
      selection.removeAllRanges()
      selection.addRange(range)
    }
    ele?.addEventListener('paste', (e) => {
      e.preventDefault()
      e.stopPropagation()
      let text
      // @ts-ignore
      let clp = (e.originalEvent || e).clipboardData
      if (clp === undefined || clp === null) {
        // @ts-ignore
        text = window.clipboardData.getData('text') || ''
        if (text !== '') {
          if (window.getSelection) {
            let newNode = document.createElement('span')
            newNode.innerHTML = text
            window.getSelection()?.getRangeAt(0).insertNode(newNode)
          } else {
            // @ts-ignore
            document.selection.createRange().pasteHTML(text)
          }
        }
      } else {
        text = clp.getData('text/plain') || ''
        if (text !== '') {
          document.execCommand('insertText', false, text)
        }
      }
    })
  })
}
const handleUpdateText = () => {
  const modifiedText = document.getElementById(isEditText.value)?.innerText
  if (style.value[isEditText.value] !== modifiedText && modifiedText !== '-') {
    style.value[isEditText.value] = modifiedText
  }
  hoverElementResolve.value()
  isEditText.value = ''
}

//监听回车按下
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.keyCode === 13) {
    if (isEditText.value === '') return
    else handleUpdateText()
  }
}
window.addEventListener('keydown', handleKeyDown)
</script>

<template>
  <div>
    <ElRow class="flex items-center">
      <div class="mr-5px">布局模式:</div>
      <ElRadioGroup :model-value="style['display']" @change="(e) => (style['display'] = e)">
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
          @mouseleave="handleHoverLeave"
          class="top-center bg-#eace95 w-99% h-200px"
          :class="[hoverElement ? (hoverElement === 'margin' ? 'hover' : 'noHover') : '']"
        >
          <div data-element="margin">
            <template v-for="item in marginConfig" :key="item.value">
              <div
                @mouseenter="handleHoverEnter"
                class="absolute flex-center"
                :style="{
                  [item.value === 'margin-bottom' ? 'bottom' : 'top']: 0,
                  [item.value === 'margin-right' ? 'right' : 'left']: 0,
                  [item.value === 'margin-top' || item.value === 'margin-bottom' ? 'height' : 'width']: '15%',
                  [item.value === 'margin-top' || item.value === 'margin-bottom' ? 'width' : 'height']: '100%'
                }"
              >
                <div
                  v-if="isEditText == item.value"
                  @blur="handleUpdateText()"
                  class="bg-white w-50px text-center rd-2px"
                  contenteditable="true"
                  :id="item.value"
                  v-html="style[item.value] ?? '-'"
                />
                <div v-else @dblclick="handleEditText($event, item.value)">{{ style[item.value] ?? '-' }}</div>
              </div>
            </template>
          </div>
          <div class="top-center bg-#aed29f w-70% h-70%" :class="[hoverElement ? (hoverElement === 'padding' ? 'hover' : 'noHover') : '']">
            <div data-element="padding">
              <template v-for="item in paddingConfig" :key="item.value">
                <div
                  @mouseenter="handleHoverEnter"
                  class="absolute flex-center"
                  :style="{
                    [item.value === 'padding-bottom' ? 'bottom' : 'top']: 0,
                    [item.value === 'padding-right' ? 'right' : 'left']: 0,
                    [['padding-top', 'padding-bottom'].includes(item.value) ? 'height' : 'width']: [
                      'padding-top',
                      'padding-bottom'
                    ].includes(item.value)
                      ? '25%'
                      : '20%',
                    [item.value === 'padding-top' || item.value === 'padding-bottom' ? 'width' : 'height']: '100%'
                  }"
                >
                  <div
                    v-if="isEditText == item.value"
                    @blur="handleUpdateText()"
                    class="bg-white w-50px text-center rd-2px"
                    contenteditable="true"
                    :id="item.value"
                    v-html="style[item.value] ?? '-'"
                  />
                  <div v-else @dblclick="handleEditText($event, item.value)">{{ style[item.value] ?? '-' }}</div>
                </div>
              </template>
            </div>
            <div
              data-element="content"
              class="top-center bg-#9ae0f1 w-60% h-50%"
              :class="[hoverElement ? (hoverElement === 'content' ? 'hover' : 'noHover') : '']"
            >
              <div data-element="content" @mouseenter.stop="handleHoverEnter" class="full flex-center">
                <div
                  v-if="isEditText == 'width'"
                  @blur="handleUpdateText()"
                  class="bg-white w-50px text-center rd-2px"
                  contenteditable="true"
                  :id="'width'"
                  v-html="style['width'] ?? '-'"
                />
                <div v-else @dblclick="handleEditText($event, 'width')">{{ style['width'] ?? '-' }}</div>
                <div class="mx-10px">x</div>
                <div
                  v-if="isEditText == 'height'"
                  @blur="handleUpdateText()"
                  class="bg-white w-50px text-center rd-2px"
                  contenteditable="true"
                  :id="'height'"
                  v-html="style['height'] ?? '-'"
                />
                <div v-else @dblclick="handleEditText($event, 'height')">{{ style['height'] ?? '-' }}</div>
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
