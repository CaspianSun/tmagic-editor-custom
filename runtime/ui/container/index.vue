<template>
  <div
    v-if="display()"
    :id="`${config.id || ''}`"
    :class="`${config.className ? ` ${config.className}` : ''}`"
    :style="style"
  >
    <slot></slot>
    <MComponent
      v-for="item in config.items"
      :key="item.id"
      :config="{
        ...item
      }"
    ></MComponent>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

import Core from '@tmagic/core'
import type { Id, MContainer } from '@tmagic/schema'

import MComponent from '@ui/Component.vue'
import useApp from '@ui/utils/useApp'
import useCommonMethod from '@ui/utils/useCommonMethod'

interface MContainerConfig extends Omit<MContainer, 'id'> {
  id?: Id
}
const props = withDefaults(
  defineProps<{
    config: MContainerConfig
    model?: any
    type?: string
  }>(),
  {
    model: () => ({})
  }
)

const app = inject<Core>('app')

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
