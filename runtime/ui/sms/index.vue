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
      <template #button>
        <Button @click="handleSendCode" size="small" type="primary">{{ buttonText }}</Button>
      </template>
    </Field>
  </div>
</template>
<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { Field, Button } from 'vant'
import { computed, inject, ref } from 'vue'
import MInput from './input.vue'
import Core from '@tmagic/core'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const time = ref(0)
const buttonText = computed(() => {
  return time.value > 0 ? `${time.value}s` : '发送验证码'
})

const app = inject<Core>('app')
const node = app?.page?.getNode(props.config.id)
const handleSendCode = () => {
  return new Promise((resolve, reject) => {
    app?.emit('sms:send', node)
  })
}
const vantProps = computed(() => {
  return props.config.vantProps ?? {}
})
useApp({
  config: props.config,
  methods: {}
})
</script>

<style lang="scss"></style>
