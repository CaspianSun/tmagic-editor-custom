<template>
  <Animation>
    <p ref="textRef">{{ config.text }}</p>
  </Animation>
</template>

<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/useApp'
import { onMounted, ref } from 'vue'
import Animation from '@ui/components/Animate.vue'

const textRef = ref<HTMLElement>()
const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

onMounted(() => {})
useApp({
  config: props.config,
  methods: {}
})
</script>
