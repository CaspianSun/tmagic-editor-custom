<template>
  <div
    :id="`${config.id || ''}`"
    :class="`magic-ui-page-fragment magic-ui-container magic-layout-${config.layout}${config.className ? ` ${config.className}` : ''}`"
    :style="style"
  >
    <slot></slot>
    <MComponent v-for="item in config.items" :key="item.id" :config="item"></MComponent>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue"
import MComponent from "@ui/Component.vue"
import Core from "@tmagic/core"
import type { MPageFragment } from "@tmagic/schema"
import useApp from "@ui/utils/useApp"

const props = withDefaults(
  defineProps<{
    config: MPageFragment
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const app: Core | undefined = inject("app")

const style = computed(() => app?.transformStyle(props.config.style || {}))

useApp(props.config)
</script>
