<script lang="ts" setup>
import { getCurrentInstance, ref, type Ref, onMounted, computed, watch } from 'vue'
import type { MComponent } from '@tmagic/schema'
import { runAnimation } from '@ui/utils/animation'

const props = ref(getCurrentInstance()?.parent?.props) as Ref<{
  config: MComponent
  model?: any
}>
const animationRef = ref<HTMLDivElement>()
const oldAnimation = ref()

onMounted(() => {
  watch(
    () => props.value.config.animation,
    (val) => {
      if (JSON.stringify(val) == JSON.stringify(oldAnimation.value)) return
      if (!animationRef.value) return
      oldAnimation.value = val
      runAnimation(animationRef.value, val, true)
    },
    {
      immediate: true
    }
  )
})

window.addEventListener('message', (event) => {
  if (event.data?.type === 'animation') {
    if (event.data.data?.id == props.value.config.id) {
      if (!animationRef.value) return
      runAnimation(animationRef.value, JSON.parse(event.data.data.animation), true)
      animationRef.value.style.animationPlayState = 'running'
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
