<template>
  <Animation>
    <component
      v-if="display()"
      ref="component"
      :is="tagName"
      :id="config.id"
      :class="`magic-ui-component${config.className ? ` ${config.className}` : ''}`"
      :style="style"
      :config="config"
    ></component>
  </Animation>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import Core from '@tmagic/core'
import { toLine } from '@tmagic/utils'
import Animation from '@ui/components/Animate.vue'

const props = withDefaults(
  defineProps<{
    config: Record<string, any>
    model?: any
  }>(),
  {
    config: () => ({}),
    model: () => ({})
  }
)

const app: Core | undefined = inject('app')

const tagName = computed(() => `qs-${toLine(props.config.type)}`)
const style = computed(() => app?.transformStyle(props.config.style))

const display = () => {
  if (props.config.visible === false) return false
  if (props.config.condResult === false) return false

  const displayCfg = props.config?.display

  if (typeof displayCfg === 'function') {
    return displayCfg(app)
  }
  return displayCfg !== false
}
</script>
