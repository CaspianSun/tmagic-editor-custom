<template>
  <div class="image">
    <Image :fit="config.fit" :src="config.src"></Image>
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

useApp({
  config: props.config,
  methods: {}
})
</script>

<style lang="scss">
.image {
  font-size: 0;
  .van-image {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
