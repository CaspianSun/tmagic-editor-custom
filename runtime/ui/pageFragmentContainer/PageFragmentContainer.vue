<template>
  <div :id="`${config.id || ''}`" class="magic-ui-page-fragment-container">
    <UiContainer :config="containerConfig" :model="model"></UiContainer>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue"
import Core from "@tmagic/core"
import type { MComponent, MNode } from "@tmagic/schema"
import UiContainer from "@ui/container/index.vue"
import useApp from "@ui/utils/useApp"

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const app: Core | undefined = inject("app")
const fragment = computed(() => app?.dsl?.items?.find((page) => page.id === props.config.pageFragmentId))
const containerConfig = computed(() => {
  if (!fragment.value) return { items: [] }
  const { id, type, items, ...others } = fragment.value
  const itemsWithoutId = items.map((item: MNode) => {
    const { id, ...otherConfig } = item
    return otherConfig
  })
  if (app?.platform === "editor") {
    return {
      ...others,
      items: itemsWithoutId
    }
  }
  return {
    ...others,
    items
  }
})

useApp(props.config)
</script>
<style scoped>
.in-editor .magic-ui-page-fragment-container {
  min-width: 100px;
  min-height: 100px;
}
</style>
