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
import type { MComponent, MNode } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { inject } from 'vue'
import UiContainer from '@ui/container/index.vue'
import Core from '@tmagic/core'
import { SwiperSlide } from 'swiper/vue'
import { useSwiper } from 'swiper/vue'
const swiper = useSwiper()

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

const app = inject<Core>('app')
const node = app?.page?.getNode(props.config.id)

useApp({
  config: props.config,
  methods: {}
})

app?.page?.on('editor:select', (info, path) => {
  const index = info.parent.items.findIndex((item: MNode) => item.id === info.node.id)
  if (index > -1) {
    console.log('editor:select', index)
    swiper.value.slideTo(index)
  }
})
</script>

<style lang="scss"></style>
