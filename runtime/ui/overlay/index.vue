<template>
  <Overlay :lazy-render="true" :show="show">
    <div class="wrapper">
      <QsContainer
        :config="{
          id: config.id,
          items: config.items
        }"
      >
        <slot></slot>
      </QsContainer>
    </div>
  </Overlay>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { MComponent, MNode } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { Overlay } from 'vant'
import QsContainer from '@ui/container/index.vue'

const show = ref(false)

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const openOverlay = () => {
  show.value = true
  if (app) {
    app.emit('overlay:open', node)
  }
}

const closeOverlay = () => {
  show.value = false
  if (app) {
    app.emit('overlay:close', node)
  }
}

const app = useApp({
  config: props.config,
  methods: {
    openOverlay,
    closeOverlay
  }
})

const node = app?.page?.getNode(props.config.id)

app?.page?.on('editor:select', (info, path) => {
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
