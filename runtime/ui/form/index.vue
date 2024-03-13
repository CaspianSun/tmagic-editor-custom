<template>
  <div class="w-full flex flex-col items-center">
    <div>表单</div>
    <Form @submit="" class="w-full">
      <FieldToDom :fields="fields" :form="form"></FieldToDom>
      <Button type="primary" round block @click="submit">提交</Button>
    </Form>
  </div>
</template>
<script lang="ts" setup>
import { getFormFields } from "@/api"
import type { MComponent } from "@tmagic/schema"
import useApp from "@ui/utils/useApp"
import { onMounted, ref } from "vue"
import { Form, Button } from "vant"
import { FieldToDom, FieldType } from "./components/fieldToDom"

const props = withDefaults(
  defineProps<{
    config: MComponent
  }>(),
  {}
)

const submit = () => {
  console.log("form", form)
}

const form = ref<Record<string, any>>({})

const fields = ref<defs.h5.Field[]>([])

const actCode = localStorage.getItem("actCode")

const loadFieldList = async () => {
  const { result } = await getFormFields("CxDe")
  fields.value = result.fieldData
  result.fieldData.forEach((field) => {
    form.value[field.fieldCode] = null
    if ([FieldType.复选框, FieldType.图片上传].includes(field.type as FieldType)) {
      form.value[field.fieldCode] = []
    }
  })
}

onMounted(() => {
  loadFieldList()
})

/** 监听消息传递 */
window.addEventListener("message", (event) => {
  console.log("event", event)
  if (event.data === "refresh") {
    window.location.reload()
  }
})

useApp(props.config)
</script>

<style lang="scss"></style>
