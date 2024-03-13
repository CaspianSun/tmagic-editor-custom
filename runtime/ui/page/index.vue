<template>
  <div :id="`${config.id || ''}`" :class="`layout-${config.layout}${config.className ? ` ${config.className}` : ''}`" :style="style">
    <slot></slot>
    <MComponent v-for="item in config.items" :key="item.id" :config="item"></MComponent>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue"

import Core from "@tmagic/core"
import type { MPage } from "@tmagic/schema"

import MComponent from "@ui/Component.vue"
import useApp from "@ui/utils/useApp"
import { provide } from "vue"

provide("isSwiper", false)

const props = withDefaults(
  defineProps<{
    config: MPage
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const app = inject<Core>("app")

const style = computed(() => app?.transformStyle(props.config.style || {}))

const refresh = () => {
  window.location.reload()
}

useApp(props.config, {
  methods: { refresh }
})
</script>
