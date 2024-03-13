<script lang="ts" setup>
import { ref, computed } from "vue"
import { Field, Popup, Picker, type PickerConfirmEventParams } from "vant"
const showPicker = ref(false)

const props = defineProps<{
  field: defs.h5.Field
  placeholder?: string
}>()

const value = defineModel({
  type: String,
  default: ""
})

const columns = computed(() => {
  return props.field.dictionary.map((item) => {
    return {
      text: item.name,
      value: item.key
    }
  })
})

const confirm = (e: PickerConfirmEventParams) => {
  value.value = String(e.selectedValues[0])
  showPicker.value = false
}
</script>

<template>
  <div>
    <Field :model-value="value" :placeholder readonly is-link @Click="() => (showPicker = true)">
      <template #label>
        <slot name="label"></slot>
      </template>
    </Field>
    <Popup v-model:show="showPicker" position="bottom">
      <Picker :columns="columns" @confirm="confirm" @cancel="() => (showPicker = false)" />
    </Popup>
  </div>
</template>

<style lang="scss" scoped></style>
