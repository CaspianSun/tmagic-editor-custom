<script lang="ts" setup>
import type { FieldProps } from "@tmagic/form"
import {} from "vue"
const props = defineProps<FieldProps<any>>()
console.log("props", props)
</script>

<template>
  <div>
    <ElButton link type="primary">编辑</ElButton>
  </div>
</template>

<style lang="scss" scoped></style>
