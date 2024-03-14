<script lang="ts" setup>
import { ossUploadApi } from "@/api"
import { type PropType } from "vue"
import { Field, Uploader, Image, Icon } from "vant"

const imgsList = defineModel({
  type: Array as PropType<string[]>,
  default: () => []
})

const beforeRead = (file: any) => {
  return true
}

const emits = defineEmits(["onConfirm"])
const afterRead = async (file: any) => {
  // const { code, message, result }: any = await ossUpload()
  // if (code == 0) {
  //   imgsList.value.push(result)
  //   emits("onConfirm", imgsList.value)
  // } else {
  //   console.log(message)
  // }
}
const deleteImg = (index: number) => {
  imgsList.value.splice(index, 1)
  emits("onConfirm", imgsList.value)
}
</script>

<template>
  <div class="upload">
    <Field>
      <template #label>
        <slot name="label"></slot>
      </template>
      <template #input>
        <div class="img-list">
          <div class="img-item" v-for="(item, index) in imgsList" :key="index">
            <div class="delete" @click="deleteImg(index)">
              <Icon name="close" />
            </div>
            <Image width="60" height="60" :src="item" />
          </div>
          <Uploader
            v-if="imgsList.length < 1"
            result-type="file"
            max-count="1"
            :after-read="afterRead"
            :before-read="beforeRead"
            :preview-size="60"
          />
        </div>
      </template>
    </Field>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-cell) {
  align-items: center;
}
.upload {
  .img-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .img-item {
      position: relative;
      .delete {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 999;
      }
    }
    .img-item:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
