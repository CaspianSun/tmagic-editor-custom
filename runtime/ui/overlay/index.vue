<template>
  <Overlay :show="show">
    <div class="wrapper" @click.stop>
      <qs-container :config="{ items: config.items }">
        <slot></slot>
      </qs-container>
    </div>
  </Overlay>
</template>
<script lang="ts" setup>
import { inject, ref } from 'vue'

import Core from '@tmagic/core'
import type { MComponent, MNode } from '@tmagic/schema'

import useApp from '@ui/utils/useApp'
import { Overlay } from 'vant'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const show = ref(false)
const app: Core | undefined = inject('app')
const node = app?.page?.getNode(props.config.id)

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

app?.page?.on('editor:select', (info, path) => {
  if (path.find((node: MNode) => node.id === props.config.id)) {
    openOverlay()
  } else {
    closeOverlay()
  }
})

useApp({
  config: props.config,
  methods: {
    openOverlay,
    closeOverlay
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
