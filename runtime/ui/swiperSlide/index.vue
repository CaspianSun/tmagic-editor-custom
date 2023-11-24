<template>
  <SwiperSlide>
    <UiContainer
      :config="{
        items: config.items
      }"
    >
      <slot></slot>
    </UiContainer>
  </SwiperSlide>
</template>

<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import UiContainer from '@ui/container/index.vue'
import { SwiperSlide } from 'swiper/vue'

defineOptions({
  name: 'SwiperSlide'
})

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

useApp({
  config: props.config,
  methods: {}
})
</script>

<style lang="scss"></style>
