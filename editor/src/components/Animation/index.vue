<script lang="ts" setup>
import { defineProps, defineOptions, ref } from 'vue'
import {
  ElButton,
  ElCollapse,
  ElCollapseItem,
  ElDrawer,
  ElInputNumber,
  ElScrollbar
} from 'element-plus'
import { computed } from 'vue'
import type { FieldProps } from '@tmagic/form'
import animateCssData from './animateCssData'
import { isArray } from 'lodash'

defineOptions({
  name: 'MAnimation'
})
const emit = defineEmits(['change'])
const props = defineProps<FieldProps<any>>()
const animationList = computed({
  get: () => props.model[props.name],
  set: (e) => {
    onChangeHandler(e)
  }
})
const onChangeHandler = (e: any) => {
  emit('change', e)
}

const runAnimate = (index: number) => {
  console.log(index)
}
const handleDeleteAnimate = () => {
  console.log('删除动画')
}

const activeName = ref('进入')
const showAnimatePanel = ref(false)
const hoverPreviewAnimate = ref('')
const reSelectAnimateIndex = ref<number>()

const handleAdd = (status = true) => {
  showAnimatePanel.value = status
  reSelectAnimateIndex.value = undefined
}

const handleChooseAnimate = (item: any) => {
  console.log(item)
  showAnimatePanel.value = false
  if (isArray(animationList)) {
    animationList.value.push({
      ...item
    })
  } else {
    animationList.value = [
      {
        ...item
      }
    ]
  }
}

const handleShowChooseAnimatePanel = (index: number) => {
  reSelectAnimateIndex.value = index
  showAnimatePanel.value = true
}
</script>

<template>
  <div class="flex flex-col flex-1">
    <div class="mb-15px">
      <ElButton size="small" type="primary" @click="handleAdd()">添加动画</ElButton>
      <ElButton size="small" type="default">预览动画</ElButton>
    </div>
    <div class="el-animate-list-wrapper paddingT20" v-show="animationList.length">
      <ElCollapse accordion>
        <ElCollapseItem v-for="(item, index) in animationList" :key="index">
          <template #title>
            <span class="el-animate-title-name">动画 {{ index }}</span>
            <div class="el-animate-title-type-wrapper">
              <span
                class="el-animate-title-type"
                @click.stop.prevent="handleShowChooseAnimatePanel(index)"
                >{{ item.type }} <i class="el-icon-caret-right size-mini"></i>
              </span>
            </div>
            <span class="el-animate-title-btn" @click.stop.prevent="runAnimate(index)">
              <i class="el-icon-caret-right"> </i>
            </span>
            <span class="el-animate-title-btn" @click.stop.prevent="handleDeleteAnimate">
              <i class="el-icon-delete"> </i>
            </span>
          </template>
          <div class="el-animate-item">
            <div class="attr-item-edit-wrapper">
              <p class="attr-item-title">动画时长：</p>
              <div class="col-2 attr-item-edit-input">
                <ElInputNumber
                  size="small"
                  v-model="item.duration"
                  controls-position="right"
                  :min="0"
                  :step="0.1"
                />
              </div>
            </div>
            <div class="attr-item-edit-wrapper">
              <p class="attr-item-title">动画延迟：</p>
              <div class="col-2 attr-item-edit-input">
                <ElInputNumber
                  size="small"
                  v-model="item.delay"
                  controls-position="right"
                  :min="0"
                  :step="0.1"
                />
              </div>
            </div>
            <div class="attr-item-edit-wrapper">
              <p class="attr-item-title">循环次数：</p>
              <div class="col-2 attr-item-edit-input">
                <ElInputNumber
                  size="small"
                  v-model="item.interationCount"
                  controls-position="right"
                />
                <div class="attr-item-edit-input-des">次数</div>
              </div>
              <div class="col-2 attr-item-edit-input">
                <ElCheckbox v-model="item.infinite" label="infinite" border size="small">
                  循环播放
                </ElCheckbox>
              </div>
            </div>
          </div>
        </ElCollapseItem>
      </ElCollapse>
    </div>
    <ElDrawer v-model="showAnimatePanel">
      <ElTabs v-model="activeName">
        <ElTabPane
          v-for="item in animateCssData"
          :key="item.label"
          :label="item.label"
          :name="item.label"
        >
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
  padding-left: 4px;
  display: flex;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  .attr-item-title {
    text-align: left;
    min-width: 60px;
    font-size: 12px;
    line-height: 28px;
  }
  .attr-item-edit-input {
    &.col-2 {
      width: 90px;
      margin-left: 10px;
    }
    &.col-1 {
      width: 250px;
    }
    &.col-3 {
      width: 60px;
      margin-left: 10px;
    }
    &.col-4 {
      width: 50px;
      margin-left: 10px;
    }
    .attr-item-edit-input-des {
      text-align: center;
      line-height: 1;
      margin-top: 2px;
      font-size: 12px;
      color: #ccc;
    }
  }
}

.el-animate-list-wrapper {
  .el-animate-title-name {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    font-weight: bold;
    width: 55px;
  }
  .el-animate-title-type-wrapper {
    display: inline-block;
    width: 164px;
  }
  .el-animate-title-type {
    display: inline-block;
    vertical-align: middle;
    max-width: 140px;
    height: 24px;
    line-height: 1px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #fafafa;
    border-radius: 60px;
    padding: 4px 16px;
    border: none;
    cursor: pointer;
    margin: 0 20px 0 10px;
    &:hover {
      color: white;
      background: var(--el-color-primary);
    }
  }
  .el-animate-title-btn {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    color: #666;
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-radius: 4px;
    background: rgba(37, 165, 137, 0.08);
    margin-left: 6px;
    &:hover {
      color: white;
      background: var(--el-color-primary);
    }
  }
}
</style>

<style lang="scss">
.components-attr-edit {
  .el-tabs {
    height: 100%;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
  }
}

.el-drawer__header {
  margin-bottom: -20px;
}
</style>
