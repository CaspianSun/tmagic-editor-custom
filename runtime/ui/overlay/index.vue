<template>
  <Overlay :z-index="9999999" :lazy-render="true" :show="show">
    <div class="wrapper">
      <UiContainer
        :config="{
          id: config.id,
          items: config.items
        }"
      >
        <slot></slot>
      </UiContainer>
    </div>
  </Overlay>
</template>
<script lang="ts" setup>
import { inject, ref } from "vue"
import type { MComponent, MNode } from "@tmagic/schema"
import Core from "@tmagic/core"
import useApp from "@ui/utils/useApp"
import UiContainer from "@ui/container/index.vue"
import { Overlay } from "vant"

const show = ref(false)

const props = defineProps<{
  config: MComponent
}>()

const openOverlay = () => {
  show.value = true
  if (app) {
    app.emit("overlay:open", node)
  }
}

const closeOverlay = () => {
  show.value = false
  if (app) {
    app.emit("overlay:close", node)
  }
}

const { app, node } = useApp(props.config, {
  methods: {
    openOverlay,
    closeOverlay
  }
})

app?.page?.on("editor:select", (info, path) => {
  if (path.find((node: MNode) => node.id === props.config.id)) {
    openOverlay()
  } else {
    closeOverlay()
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
