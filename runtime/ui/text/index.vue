<template>
  <p>{{ config.text }}</p>
</template>

<script lang="ts" setup>
import type { MComponent } from "@tmagic/schema"
import useApp from "@ui/utils/useApp"
import { onMounted, ref } from "vue"

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
useApp(props.config)
</script>
@/ui/utils/
