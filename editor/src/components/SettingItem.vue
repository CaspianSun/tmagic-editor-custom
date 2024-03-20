<template>
  <div class="setting-item" :style="{ width: width + 'px' }">
    <slot></slot>
    <NText class="name" depth="3">{{ name }}</NText>
  </div>
</template>

<script setup lang="ts">
import { NText } from "naive-ui"
defineProps({
  name: {
    type: String,
    required: false
  },
  width: {
    type: Number,
    required: false
  }
})
</script>

<style lang="scss" scoped>
.setting-item {
  display: flex;
  flex-direction: column;
  min-width: 110px;
  text-align: start;
  margin-bottom: 5px;
  .name {
    margin-top: 2px;
    margin-left: 4px;
  }
  :deep() {
    .el-color-picker__trigger {
      width: 100%;
    }
  }
}
</style>
