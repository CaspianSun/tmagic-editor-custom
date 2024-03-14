<template>
  <div class="w-full flex flex-col items-center">
    <div>表单</div>
    <Form @submit="submit" class="w-full">
      <FieldToDom :fields="fields" :form="form"></FieldToDom>
      <Button type="primary" round block @click="submit">提交</Button>
    </Form>
  </div>
</template>
<script lang="ts" setup>
import { getFormFieldsApi, saveFormApi, getFormSubmitApi } from "@/api"
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

const form = ref<Record<string, any>>({})

const fields = ref<defs.h5.Field[]>([])
const targetKey = ref("openid")
const loadFieldList = async () => {
  if (!window.formCode) return
  const { result } = await getFormFieldsApi(window.formCode)
  fields.value = result.fieldData
  fields.value.forEach((field) => {
    if (field.isTarget) targetKey.value = field.fieldCode
    form.value[field.fieldCode] = null
    if ([FieldType.复选框, FieldType.图片上传].includes(field.type as FieldType)) {
      form.value[field.fieldCode] = []
    }
  })
  if (targetKey.value == "openid") {
    const { result } = await getFormSubmitApi({
      targetKey: window.openid,
      formCode: window.formCode
    })
    form.value = result
  } else {
    const local = localStorage.getItem("form")
    if (local) {
      form.value = JSON.parse(local)
    }
  }
}

const submit = async () => {
  if (!window.formCode) return
  const { result } = await saveFormApi({
    content: form.value,
    formCode: window.formCode,
    targetKey: targetKey.value == "openid" ? window.openid : form.value[targetKey.value]
  })
  if (result.id) {
    localStorage.setItem("form", JSON.stringify(result.content))
  }
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
