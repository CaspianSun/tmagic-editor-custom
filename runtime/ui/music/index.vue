<template>
  <div class="music" @click="handleClick">
    <img ref="musicIcon" src="https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/music.png" />
  </div>
</template>
<script lang="ts" setup>
import type { MComponent } from "@tmagic/schema"
import useApp from "@ui/utils/useApp"
import PlayMusic from "./useAutoPlayMusic"
import { onMounted, ref } from "vue"
const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const musicIcon = ref<HTMLElement | null>(null)
const handleClick = async () => {
  console.log(music.loadedState)
  if (!music.loadedState) {
    await music.loadMusic(props.config.src)
  }
  const state = music.toggle()
  if (state) {
    musicIcon.value?.style.setProperty("animation-play-state", "running")
  } else {
    musicIcon.value?.style.setProperty("animation-play-state", "paused")
  }
}

const music = new PlayMusic({
  url: props.config.src,
  loadAutoPlay: props.config.loadAutoPlay
})

onMounted(() => {
  setTimeout(() => {
    music?.state && musicIcon.value?.style.setProperty("animation-play-state", "running")
  }, 1000)
})

useApp(props.config)
</script>

<style lang="scss">
.music {
  z-index: 999;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    animation: rotation 5s linear infinite;
    animation-play-state: paused;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
