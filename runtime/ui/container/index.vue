<template>
  <div
    v-if="display()"
    :id="`${config.id || ''}`"
    :class="`magic-layout-${config.layout}${config.className ? ` ${config.className}` : ''}`"
    :style="style"
  >
    <slot></slot>
    <MComponent v-for="item in config.items" :key="item.id" :config="item"></MComponent>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

import Core from '@tmagic/core'
import type { MContainer } from '@tmagic/schema'

import MComponent from '@ui/Component.vue'
import useApp from '@ui/utils/useApp'
import useCommonMethod from '@ui/utils/useCommonMethod'

const props = withDefaults(
  defineProps<{
    config: MContainer
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const app: Core | undefined = inject('app')

const style = computed(() => app?.transformStyle(props.config.style || {}))

const display = () => {
  const displayCfg = props.config?.display

  if (typeof displayCfg === 'function') {
    return displayCfg(app)
  }
  return displayCfg !== false
}

useApp({
  config: props.config,
  methods: {
    ...useCommonMethod(props)
  }
})
</script>
@/ui/utils/useApp@/ui/utils/useCommonMethod
