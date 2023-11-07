<template>
  <div>
    <Image
      :fit="config.fit"
      class="image"
      width="100%"
      height="100%"
      :src="config.src"
      @click="clickHandler"
    ></Image>
  </div>
</template>
<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { Image } from 'vant'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const clickHandler = () => {
  if (props.config.url) window.location.href = props.config.url
}

useApp({
  config: props.config,
  methods: {}
})
</script>

<style lang="scss">
.image {
  font-size: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
