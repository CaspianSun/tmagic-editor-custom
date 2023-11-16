<template>
  <Swiper
    class="swiper"
    direction="vertical"
    :initialSlide="Number(props.config.current)"
    no-swiping-class="no-swiping"
    slides-per-view="auto"
    @init="init"
    @slide-change-transition-end="slideChangeTransitionEnd"
    @slideChange="onSlideChange"
    @swiper="setVSwiperRef"
  >
    <template v-for="item in config.items">
      <component
        :is="`qs-${toLine(item.type)}`"
        :id="item.id"
        :style="app?.transformStyle(item.style)"
        :config="item"
      ></component>
    </template>
  </Swiper>
</template>

<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { inject, ref } from 'vue'
import { toLine } from '@tmagic/utils'
import { swiperAnimate, swiperAnimateCache } from '@ui/utils/swiper'
import SwiperClass from 'swiper'
import { Swiper } from 'swiper/vue'
import Core from '@tmagic/core'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import { watch } from 'vue'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const swiperRef = ref<SwiperClass>()
const setVSwiperRef = (swiper: SwiperClass) => {
  // @ts-ignore
  window.swiper = swiper
  swiperRef.value = swiper
}

watch(
  () => props.config.current,
  (val) => {
    swiperRef.value?.slideTo(Number(val))
  }
)

const init = (e: SwiperClass) => {
  swiperAnimateCache()
  swiperAnimate(e)
}
const slideChangeTransitionEnd = (e: SwiperClass) => {
  swiperAnimate(e)
}

const onSlideChange = (e: SwiperClass) => {
  console.log('onSlideChange', e, swiperRef)
}

const app = inject<Core>('app')
const node = app?.page?.getNode(props.config.id)

useApp({
  config: props.config,
  methods: {}
})
</script>

<style lang="scss"></style>
