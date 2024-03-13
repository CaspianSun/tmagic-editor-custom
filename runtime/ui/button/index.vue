<template>
  <Button :plain="props.config.plain" :hairline="true" v-bind="vantProps"></Button>
</template>
<script lang="ts" setup>
import type { MComponent } from "@tmagic/schema"
import useApp from "@ui/utils/useApp"
import { Button } from "vant"
import { computed } from "vue"

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
useApp(props.config)
</script>

<style lang="scss"></style>
