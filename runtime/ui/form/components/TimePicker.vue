<script lang="ts" setup>
import { ref } from "vue"
import { Field, Popup, TimePicker, type PickerConfirmEventParams, type TimePickerColumnType } from "vant"
import dayjs from "dayjs"
const showPicker = ref(false)

const props = withDefaults(
  defineProps<{
    field: defs.h5.Field
    placeholder?: string
    columnsType?: TimePickerColumnType[]
    modelValue?: string
  }>(),
  {
    columnsType: () => ["hour", "minute"]
  }
)

const value = defineModel({
  type: String,
  default: ""
})

function checkTimeArray(timeArray: TimePickerColumnType[] | string) {
  let currentTime: string[] = []
  let time = value.value
  if (!time) time = dayjs().toString()
  if (timeArray.includes("hour") && timeArray.includes("minute") && timeArray.includes("second")) {
    currentTime = dayjs(time).format("HH:mm:ss").split(":")
  } else if (timeArray.includes("hour") && timeArray.includes("minute")) {
    currentTime = dayjs(time).format("HH:mm").split(":")
  } else if (timeArray.includes("hour")) {
    currentTime = dayjs(time).format("HH").split(":")
  } else {
    console.log("timeArray中没有匹配项")
  }
  return currentTime
}

const currentTime = ref(checkTimeArray(props.columnsType))
const confirm = (e: PickerConfirmEventParams) => {
  const { selectedValues } = e
  value.value = selectedValues.join(":")
  showPicker.value = false
}
</script>

<template>
  <div>
    <Field :model-value="value" :placeholder="placeholder" readonly is-link @Click="() => (showPicker = true)">
      <template #label>
        <slot name="label"></slot>
      </template>
    </Field>
    <Popup v-model:show="showPicker" readonly position="bottom">
      <TimePicker v-model="currentTime" @confirm="confirm" @cancel="() => (showPicker = false)" :columns-type="columnsType" />
    </Popup>
  </div>
</template>

<style lang="scss" scoped></style>
