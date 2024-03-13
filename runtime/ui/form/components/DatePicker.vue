<script lang="ts" setup>
import { ref } from "vue"
import { Field, Popup, DatePicker, type DatePickerColumnType, type PickerConfirmEventParams } from "vant"
import dayjs from "dayjs"

const showPicker = ref(false)

const props = withDefaults(
  defineProps<{
    field: defs.h5.Field
    placeholder?: string
    columnsType?: DatePickerColumnType[]
  }>(),
  {
    columnsType: () => ["year", "month", "day"]
  }
)

const value = defineModel({
  type: String,
  default: ""
})

function checkDateArray(timeArray: DatePickerColumnType[] | string) {
  let currentDate: string[] = []
  let date = value.value
  if (!date) date = dayjs().toString()
  if (timeArray.includes("year") && timeArray.includes("month") && timeArray.includes("day")) {
    currentDate = dayjs(date).format("YYYY-MM-DD").split("-")
  } else if (timeArray.includes("year") && timeArray.includes("month")) {
    currentDate = dayjs(date).format("YYYY-MM").split("-")
  } else if (timeArray.includes("day")) {
    currentDate = dayjs(date).format("DD").split("-")
  } else {
    console.log("timeArray中没有匹配项")
  }
  return currentDate
}

const currentDate = ref(checkDateArray(props.columnsType))
const confirm = (e: PickerConfirmEventParams) => {
  const { selectedValues } = e
  value.value = selectedValues.join("-")
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
      <DatePicker v-model="currentDate" @confirm="confirm" @cancel="() => (showPicker = false)" :columns-type="columnsType" />
    </Popup>
  </div>
</template>

<style lang="scss" scoped></style>
