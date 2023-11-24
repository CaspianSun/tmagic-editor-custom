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
import { inject, ref, provide } from 'vue'
import { toLine } from '@tmagic/utils'
import { swiperAnimate, swiperAnimateCache } from '@ui/utils/animation'
import SwiperClass from 'swiper'
import { Swiper } from 'swiper/vue'
import Core from '@tmagic/core'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import { watch } from 'vue'

provide('isSwiper', true)

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

const onSlideChange = (e: SwiperClass) => {}

const app = inject<Core>('app')
const node = app?.page?.getNode(props.config.id)

const slideTo = (index: number) => {
  swiperRef.value?.slideTo(index)
}

const slideNext = () => {
  swiperRef.value?.slideNext()
}
const slidePrev = () => {
  swiperRef.value?.slidePrev()
}

useApp({
  config: props.config,
  methods: {
    slideTo,
    slideNext,
    slidePrev
  }
})
</script>

<style lang="scss"></style>
