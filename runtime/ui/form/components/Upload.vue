<script lang="ts" setup>
import { ossUploadApi } from "@/api"
import { type PropType } from "vue"
import { Field, Uploader, Image, Icon, type UploaderFileListItem } from "vant"
import { ref } from "vue"
import { onMounted } from "vue"

const imgsList = defineModel({
  type: Array as PropType<string[]>,
  default: () => []
})

const fileList = ref<UploaderFileListItem[]>([])

const emits = defineEmits(["onConfirm"])
const afterRead = async (file: any) => {
  console.log(file)
  file.status = "uploading"
  file.message = "上传中..."
  const formData = new FormData()
  formData.append("file", file.file)
  const { code, message, result } = await ossUploadApi(formData)
  if (code == 0) {
    file.status = "done"
    imgsList.value.push(result)
  } else {
    console.log(message)
  }
  console.log(fileList.value)
}
const beforeDelete = (
  e: any,
  info: {
    index: number
  }
) => {
  imgsList.value.splice(info.index, 1)
  return true
}

onMounted(() => {
  fileList.value = imgsList.value.map((url) => {
    return {
      url,
      isImage: true
    }
  })
})
</script>

<template>
  <div class="upload">
    <Field>
      <template #label>
        <slot name="label"></slot>
      </template>
      <template #input>
        <div class="img-list">
          <Uploader
            v-model="fileList"
            result-type="file"
            max-count="1"
            :after-read="afterRead"
            :before-delete="beforeDelete"
            :preview-size="60"
          />
        </div>
      </template>
    </Field>
  </div>
</template>

<style lang="scss" scoped></style>
