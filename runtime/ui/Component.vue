<template>
  <component
    v-if="display()"
    :is="tagName"
    :id="config.id"
    :class="`magic-ui-component ${config.className ? `${config.className}` : ''}`"
    :style="style"
    :config="config"
  ></component>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, ref, watch } from 'vue'
import Core from '@tmagic/core'
import { toLine } from '@tmagic/utils'
import { handleAnimation } from './utils/animation'

const isSwiper = inject<boolean>('isSwiper')

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

const app = inject<Core>('app')

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

onMounted(() => {
  const el = document.getElementById(`${props.config.id}`)
  if (el && props.config.animation?.length) {
    handleAnimation(el, props.config.animation)
  }
})

window.addEventListener('message', (event) => {
  if (event.data?.type === 'animation') {
    if (event.data.data?.id == props.config.id) {
      const el = document.getElementById(`${props.config.id}`)
      try {
        const val = JSON.parse(event.data.data.animation)
        handleAnimation(el, val)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
</script>
