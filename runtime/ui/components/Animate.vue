<script lang="ts" setup>
import { getCurrentInstance, ref, watchEffect, type Ref } from 'vue'
import type { MComponent } from '@tmagic/schema'
import { runAnimation } from '@ui/utils/animation'

const props = ref(getCurrentInstance()?.parent?.props) as Ref<{
  config: MComponent
  model?: any
}>
const animationRef = ref<HTMLDivElement>()

watchEffect(() => {
  if (!animationRef.value) return
  runAnimation(animationRef.value, props.value.config.animation, true)
})
window.addEventListener('message', (event) => {
  if (event.data?.type === 'animation') {
    if (event.data.data?.id == props.value.config.id) {
      if (!animationRef.value) return
      runAnimation(animationRef.value, JSON.parse(event.data.data.animation), true)
      animationRef.value.style.animationPlayState = 'running'
      console.log('animation', animationRef.value)
    }
  }
})
</script>

<template>
  <div ref="animationRef">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
