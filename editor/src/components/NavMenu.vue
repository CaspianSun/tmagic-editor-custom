<template>
  <div class="m-editor-nav-menu">
    <TMagicButton v-for="(item, index) in data" class="menu-item button" :key="index" size="small" text @click="item.handler">
      <TMagicIcon><component :is="item.icon"></component></TMagicIcon><span>{{ item.text }}</span>
    </TMagicButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue"

import { TMagicButton, TMagicIcon } from "@tmagic/design"
import type { MenuButton } from "@tmagic/editor"

export default defineComponent({
  name: "nav-menu",
  props: {
    data: {
      type: Array as PropType<MenuButton[]>,
      default: () => []
    }
  },
  components: { TMagicIcon, TMagicButton }
})
</script>

<style lang="scss">
.m-editor-nav-menu {
  justify-content: flex-end;
  height: 35px;
}
</style>
