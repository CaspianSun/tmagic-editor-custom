<template>
  <Swiper
    class="swiper"
    direction="vertical"
    :initialSlide="Number(props.config.current)"
    no-swiping-class="no-swiping"
    slides-per-view="auto"
    @init="init"
    @slideChange="onSlideChange"
    @swiper="setVSwiperRef"
  >
    <template v-for="(item, index) in config.fragments" :key="index">
      <SwiperSlide>
        <UiPageFragmentContainer
          :config="{
            id: item.pageFragmentId,
            pageFragmentId: item.pageFragmentId
          }"
        ></UiPageFragmentContainer>
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<script lang="ts" setup>
import type { MComponent } from "@tmagic/schema"
import { watch, ref } from "vue"
import useApp from "@ui/utils/useApp"
import UiPageFragmentContainer from "@ui/pageFragmentContainer"
import SwiperClass from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/free-mode"

const props = defineProps<{
  config: MComponent
}>()

const swiperRef = ref<SwiperClass>()
const setVSwiperRef = (swiper: SwiperClass) => (swiperRef.value = swiper)

watch(
  () => props.config.current,
  (val) => swiperRef.value?.slideTo(Number(val))
)

const init = (e: SwiperClass) => {}
const onSlideChange = (e: SwiperClass) => {}

const slideTo = (index: number) => swiperRef.value?.slideTo(index)
const slideNext = () => swiperRef.value?.slideNext()
const slidePrev = () => swiperRef.value?.slidePrev()

useApp(props.config, {
  methods: {
    slideTo,
    slideNext,
    slidePrev
  }
})
</script>

<style lang="scss">
.swiper {
  z-index: 0 !important;
}
</style>
