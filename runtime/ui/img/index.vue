<template>
  <div class="text-0 full">
    <img :src="config.src" class="full" />
  </div>
</template>
<script lang="ts" setup>
import type { MComponent } from "@tmagic/schema"
import useApp from "@ui/utils/useApp"

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

useApp(props.config)
</script>

<style lang="scss"></style>
