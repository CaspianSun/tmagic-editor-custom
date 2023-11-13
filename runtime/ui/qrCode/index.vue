<template>
  <div class="image">
    <Image :fit="config.fit" :src="imgUrl"></Image>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import QRCode from 'qrcode'
import { Image } from 'vant'

import type { MComponent } from '@tmagic/schema'

import useApp from '@ui/utils//useApp'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const imgUrl = ref()

watch(
  () => props.config.text,
  (text = '') => {
    QRCode.toDataURL(text, (e: any, text: string) => {
      if (e) console.error(e)
      imgUrl.value = text
    })
  },
  {
    immediate: true
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
