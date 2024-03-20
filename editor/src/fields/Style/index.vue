<script lang="ts" setup>
import { ref, watch } from "vue"
import type { FieldProps } from "@tmagic/form"
import Origin from "./components/Origin.vue"
import { NColorPicker, NInputNumber, NSelect, NDivider } from "naive-ui"
import { FontWeightEnum, FontWeightObject, WritingModeEnum, WritingModeObject, TextAlignEnum, TextAlignObject } from "./constant"

const props = defineProps<FieldProps>()

const emit = defineEmits(["change"])
const style = ref<Record<string, any>>(props.model.style || {})
watch(
  () => style.value,
  (val) => {
    if (JSON.stringify(val) === JSON.stringify(props.model.style)) return
    emit("change", val, "style")
  },
  { deep: true }
)
watch(
  () => props.model.style,
  (val) => {
    style.value = val
  },
  { deep: true }
)

const fontWeightOptions = Object.keys(FontWeightObject).map((key) => ({
  label: key,
  value: FontWeightObject[key as FontWeightEnum]
}))

const writingModeOptions = Object.keys(WritingModeObject).map((key) => ({
  label: key,
  value: WritingModeObject[key as WritingModeEnum]
}))

const textAlignOptions = Object.keys(TextAlignObject).map((key) => ({
  label: key,
  value: TextAlignObject[key as TextAlignEnum]
}))
</script>

<template>
  <div class="flex flex-col flex-1 w-full min-w-300px">
    <Origin v-model:style="style"></Origin>
    <NDivider class="mb-10px!"></NDivider>
    <SettingItemBox name="文字">
      <SettingItem name="颜色">
        <NColorPicker size="small" :modes="['hex']" v-model:value="style.color"></NColorPicker>
      </SettingItem>
      <SettingItem name="字体大小">
        <NInputNumber
          size="small"
          placeholder="字体大小"
          :value="Number(style['font-size'] || 14)"
          @update:value="(e) => (style['font-size'] = e)"
        ></NInputNumber>
      </SettingItem>
      <SettingItem name="字体粗细">
        <NSelect
          size="small"
          placeholder="字体粗细"
          v-model:value="style['font-weight']"
          :default-value="FontWeightObject[FontWeightEnum.NORMAL]"
          :options="fontWeightOptions"
        ></NSelect>
      </SettingItem>
      <SettingItem name="字间距">
        <NInputNumber
          size="small"
          placeholder="字间距"
          :value="Number(style['letter-spacing'] || 0)"
          @update:value="(e) => (style['letter-spacing'] = e)"
        ></NInputNumber>
      </SettingItem>
      <SettingItem name="文字方向">
        <NSelect
          size="small"
          placeholder="文字方向"
          v-model:value="style['writing-mode']"
          :options="writingModeOptions"
          :default-value="WritingModeObject[WritingModeEnum.HORIZONTAL]"
        ></NSelect>
      </SettingItem>
      <SettingItem name="文字对齐">
        <NSelect
          size="small"
          placeholder="文字对齐"
          v-model:value="style['text-align']"
          :options="textAlignOptions"
          :default-value="TextAlignObject[TextAlignEnum.LEFT]"
        ></NSelect>
      </SettingItem>
    </SettingItemBox>
    <SettingItemBox name="背景" :alone="true">
      <SettingItem name="背景颜色">
        <NColorPicker size="small" :modes="['hex']" v-model:value="style['background-color']"></NColorPicker>
      </SettingItem>
    </SettingItemBox>
  </div>
</template>
