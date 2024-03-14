<script lang="ts" setup>
import { ref } from "vue"
import { areaList } from "@vant/area-data"
import { Field, Popup, Area, type PickerConfirmEventParams } from "vant"

const props = defineProps<{
  placeholder?: string
}>()

const value = defineModel({
  type: String,
  default: ""
})

const showPicker = ref(false)

const onConfirm = (e: PickerConfirmEventParams) => {
  console.log(e)
  const { selectedOptions } = e
  value.value = selectedOptions.map((option) => option?.text).join("-")
  showPicker.value = false
}
</script>

<template>
  <Field :model-value="value" :placeholder="placeholder" readonly is-link @Click="() => (showPicker = true)">
    <template #label>
      <slot name="label"></slot>
    </template>
  </Field>
  <Popup v-model:show="showPicker" position="bottom" safe-area-inset-bottom teleport="body">
    <Area :area-list="areaList" @confirm="onConfirm" @cancel="showPicker = false" />
  </Popup>
</template>

<style lang="scss" scoped></style>
