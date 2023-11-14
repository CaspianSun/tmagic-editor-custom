<template>
  <div>
    <Field v-bind="vantProps">
      <template #input>
        <MInput
          :type="vantProps.type"
          :placeholder="vantProps.placeholder"
          :maxlength="vantProps.maxlength"
        ></MInput>
      </template>
    </Field>
  </div>
</template>
<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { Field } from 'vant'
import { computed, ref } from 'vue'
import MInput from './input.vue'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)
const vantProps = computed(() => {
  return props.config.vantProps ?? {}
})

useApp({
  config: props.config,
  methods: {}
})
</script>

<style lang="scss"></style>
