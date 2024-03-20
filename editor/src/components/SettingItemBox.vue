<template>
  <div class="config-item-box">
    <NText class="item-left" depth="2">
      <span>
        {{ name }}
      </span>
      <NSpace :size="5">
        <slot name="name"></slot>
      </NSpace>
    </NText>
    <div
      class="item-right"
      :style="{
        gridTemplateColumns: alone ? '1fr' : '1fr 1fr',
        ...itemRightStyle
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NText, NSpace } from "naive-ui"
defineProps({
  name: {
    type: String,
    required: false
  },
  alone: {
    type: Boolean,
    default: false,
    required: false
  },
  itemRightStyle: {
    type: Object,
    default: () => {},
    required: false
  }
})
</script>

<style lang="scss" scoped>
$leftWidth: 60px;
.config-item-box {
  position: relative;
  display: flex;
  margin: 10px 0;
  .item-left {
    width: $leftWidth;
    text-align: left;
    margin-top: 4px;
    margin-left: 10px;
    font-size: 12px;
    > span {
      font-size: 14px;
    }
  }
  .item-right {
    display: grid;
    grid-column-gap: 10px;
    width: calc(100% - #{$leftWidth});
  }
}
</style>
