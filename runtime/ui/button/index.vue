<template>
  <Button :plain="props.config.plain" v-bind="vantProps"></Button>
</template>
<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { Button } from 'vant'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)
const vantProps = computed(() => {
  return props.config.vantProps ?? {}
})
useApp({
  config: props.config,
  methods: {}
})
</script>

<style lang="scss"></style>
