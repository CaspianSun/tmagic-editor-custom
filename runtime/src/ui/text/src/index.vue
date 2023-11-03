<template>
  <p>{{ config.text }}</p>
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
onMounted(() => {})
useApp({
  config: props.config,
  methods: {}
})
</script>
