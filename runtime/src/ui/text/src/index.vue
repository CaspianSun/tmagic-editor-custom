<template>
  <p>{{ config.text }}123</p>
</template>

<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'

import useApp from '../../useApp'
import { onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)
onMounted(() => {
  console.log('mounted')
})
useApp({
  config: props.config,
  methods: {}
})
</script>
