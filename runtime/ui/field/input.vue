<script lang="ts" setup>
import { ref } from 'vue'
import { useCustomFieldValue } from '@vant/use'
const props = defineProps<{
  placeholder?: string
  maxlength?: number | string
  type: string
}>()
const data = ref('')

useCustomFieldValue(() => data.value)
</script>

<template>
  <input
    v-model="data"
    :type="props.type"
    :placeholder="props.placeholder"
    :maxlength="props.maxlength"
  />
</template>

<style lang="scss" scoped>
input {
  border: none;
  width: 100%;
}
</style>
