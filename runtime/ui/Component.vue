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
import { computed, inject, ref, watch, onMounted } from 'vue'
import Core from '@tmagic/core'
import { toLine } from '@tmagic/utils'
import {
  createAndPauseAnimation,
  handleAnimation,
  handleRemoveAnimation,
  hiddenEffect
} from './utils/animation'
import { useSwiperSlide } from 'swiper/vue'

const props = withDefaults(
  defineProps<{
    config: Record<string, any>
    model?: Record<string, any>
  }>(),
  {
    config: () => ({}),
    model: () => ({})
  }
)

const app = inject<Core>('app')

const tagName = computed(() => `qs-${toLine(props.config.type)}`)
const style = computed(() => app?.transformStyle(props.config.style))

const swiperSlide = useSwiperSlide() || ref({})

const executeAnimation = () => {
  const el = document.getElementById(`${props.config.id}`)
  if (el && props.config.animation?.length) {
    handleAnimation(el, props.config.animation)
  }
}

watch(swiperSlide, (value) => {
  const el = document.getElementById(`${props.config.id}`)
  if (value?.isPrev) handleRemoveAnimation(el)
  if (value?.isActive) executeAnimation()
})

const setScrollReveal = () => {
  if (!swiperSlide.value && props.config.animation?.length) {
    const el = document.getElementById(`${props.config.id}`)

    if (el) {
      if (hiddenEffect.includes(props.config.animation[0].value)) {
        el.style.opacity = '0'
      }
      let observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              handleAnimation(el, props.config.animation)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )
      observer.observe(el)
    }
  }
}

onMounted(() => {
  setScrollReveal()
})

const display = () => {
  if (props.config.visible === false) return false
  if (props.config.condResult === false) return false
  const displayCfg = props.config?.display
  if (typeof displayCfg === 'function') return displayCfg(app)
  return displayCfg !== false
}

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
