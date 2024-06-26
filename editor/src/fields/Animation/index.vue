<script lang="ts" setup>
import { ref } from "vue"
import { ElButton, ElCollapse, ElCollapseItem, ElDrawer, ElInputNumber, ElScrollbar, ElIcon } from "element-plus"
import { CaretRight, Delete } from "@element-plus/icons-vue"
import type { FieldProps } from "@tmagic/form"
import animateCssData from "./animateCssData"
import { cloneDeep, isArray } from "lodash-es"
import { editorService } from "@tmagic/editor"
import { watch } from "vue"
import type anime from "animejs"

const emit = defineEmits(["change"])

interface AnimeParams extends anime.AnimeParams {
  duration?: number
  delay?: number
}

const props = defineProps<FieldProps<AnimeParams>>()

const animationList = ref<AnimeParams[]>(cloneDeep(props.model[props.name] || []))

watch(
  () => props.model[props.name],
  (val) => (animationList.value = cloneDeep(val))
)

watch(
  () => animationList,
  (val) => {
    if (JSON.stringify(val.value) === JSON.stringify(props.model[props.name])) return
    emit("change", val.value)
  },
  {
    deep: true
  }
)

const handleDeleteAnimate = (index: number) => {
  animationList.value = animationList.value.filter((_, i) => i !== index)
}

const activeName = ref("进入")
const showAnimatePanel = ref(false)
const hoverPreviewAnimate = ref("")
const reSelectAnimateIndex = ref<number>()

const handleAdd = (status = true) => {
  showAnimatePanel.value = status
  reSelectAnimateIndex.value = void 0
}

const handleChooseAnimate = (item: { label: string; value: string }) => {
  showAnimatePanel.value = false
  if (reSelectAnimateIndex.value == void 0) {
    const obj = { ...item, duration: 1000, delay: 0, loop: 1 }
    if (isArray(animationList.value)) animationList.value.push(obj)
    else animationList.value = [obj]
  } else {
    animationList.value[reSelectAnimateIndex.value].label = item.label
    animationList.value[reSelectAnimateIndex.value].value = item.value
  }
}

const handleShowChooseAnimatePanel = (index: number) => {
  reSelectAnimateIndex.value = index
  showAnimatePanel.value = true
}

const handlePreviewAnimate = (animation: anime.AnimeAnimParams[]) => {
  const id = editorService.get("node")?.id
  const iframe = editorService.get("stage")?.renderer.iframe
  iframe?.contentWindow?.postMessage({ type: "animation", data: { animation: JSON.stringify(animation), id } }, "*")
}
</script>

<template>
  <div class="flex flex-col flex-1">
    <div class="mb-15px">
      <ElButton size="small" type="primary" @click="handleAdd()">添加动画</ElButton>
      <ElButton size="small" type="default" @click="handlePreviewAnimate(animationList)">预览动画</ElButton>
    </div>
    <div class="el-animate-list-wrapper" v-show="animationList.length">
      <ElCollapse accordion>
        <ElCollapseItem v-for="(item, index) in animationList" :key="index">
          <template #title>
            <div class="flex-1 flex items-center justify-between">
              <div class="flex items-center">
                <span class="inline-block vertical-middle text-14px font-bold w-55px"> 动画 {{ index }} </span>
                <div
                  class="h-24px max-w-140px c-#333 truncate bg-#fafafa rd-100px pa-4px-16px mx-10px-20px hover:c-white hover:bg-[var(--el-color-primary)] flex-center"
                  @click.stop.prevent="handleShowChooseAnimatePanel(index)"
                >
                  {{ item.label }}
                  <ElIcon><CaretRight></CaretRight></ElIcon>
                </div>
              </div>
              <div class="mr-20px items-center">
                <span class="el-animate-title-btn flex-center" @click.stop.prevent="handlePreviewAnimate([item])">
                  <ElIcon><CaretRight></CaretRight></ElIcon>
                </span>
                <span class="el-animate-title-btn flex-center" @click.stop.prevent="handleDeleteAnimate(index)">
                  <ElIcon><Delete></Delete></ElIcon>
                </span>
              </div>
            </div>
          </template>

          <div class="flex flex-col">
            <div class="attr-item-edit-wrapper">
              <span class="attr-item-title">动画时长：</span>
              <div>
                <ElInputNumber
                  size="small"
                  :model-value="item.duration"
                  @update:model-value="item.duration = $event"
                  controls-position="right"
                  :min="0"
                  :step="100"
                />
              </div>
            </div>
            <div class="attr-item-edit-wrapper">
              <span class="attr-item-title">动画延迟：</span>
              <div>
                <ElInputNumber
                  size="small"
                  :model-value="item.delay"
                  @update:model-value="item.delay = $event"
                  controls-position="right"
                  :min="0"
                  :step="100"
                />
              </div>
            </div>
            <div class="attr-item-edit-wrapper">
              <span class="attr-item-title">循环次数：</span>
              <div>
                <ElInputNumber size="small" controls-position="right" :model-value="Number(item.loop)" />
              </div>
              <div class="ml-10px">
                <ElCheckbox v-model="item.loop" label="infinite" border size="small"> 循环播放 </ElCheckbox>
              </div>
            </div>
          </div>
        </ElCollapseItem>
      </ElCollapse>
    </div>
    <ElDrawer v-model="showAnimatePanel">
      <ElTabs v-model="activeName">
        <ElTabPane v-for="item in animateCssData" :key="item.label" :label="item.label" :name="item.label">
          <ElScrollbar class="h-full">
            <div
              class="w-25% inline-block c-#76838f mb-20px"
              v-for="(animate, index) in item.children"
              :key="index"
              @mouseover="hoverPreviewAnimate = animate.value"
              @mouseleave="hoverPreviewAnimate = ''"
              @click="handleChooseAnimate(animate)"
            >
              <div class="flex flex-col items-center cursor-pointer mx-10px">
                <span
                  class="h-30px w-30px bg-#ccc animate__animated"
                  :class="[hoverPreviewAnimate === animate.value && `animate__${animate.value}`]"
                ></span>
                <p>{{ animate.label }}</p>
              </div>
            </div>
          </ElScrollbar>
        </ElTabPane>
      </ElTabs>
    </ElDrawer>
  </div>
</template>

<style lang="scss" scoped>
.attr-item-edit-wrapper {
  padding-left: 15px;
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  .attr-item-title {
    font-size: 12px;
    line-height: 28px;
  }
}

.el-animate-title-btn {
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 4px;
  background: #25a58914;
  margin-left: 6px;
  &:hover {
    color: white;
    background: var(--el-color-primary);
  }
}
:deep() {
  .el-drawer__header {
    margin-bottom: -20px;
  }
  .el-input__wrapper {
    border-radius: var(--el-input-border-radius, var(--el-border-radius-base)) !important;
  }
}
</style>
