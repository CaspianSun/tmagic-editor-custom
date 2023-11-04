<template>
  <img class="magic-ui-img" :src="config.src" @click="clickHandler" />
</template>
<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'

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
