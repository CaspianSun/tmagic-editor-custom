<template>
  <div>
    <Form
      @submit="submit"
      @failed="failed"
      ref="form"
      v-model="props.config.model"
      v-bind="vantProps"
    >
      <QsContainer
        :config="{
          items: config.items
        }"
      >
        <slot></slot>
      </QsContainer>
    </Form>
  </div>
</template>
<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { Form } from 'vant'
import type { FormInstance } from 'vant'
import { computed, inject, ref } from 'vue'
import QsContainer from '@ui/container/index.vue'
import Core from '@tmagic/core'

const form = ref<FormInstance>()

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

const app = inject<Core>('app')
const node = app?.page?.getNode(props.config.id)

const submit = (values: Record<string, any>) => {
  console.log('submit', values)
  if (app) {
    app.emit('form:submit', node, values)
  }
}
const failed = (errorInfo: { values: Record<string, any>; errors: Record<string, any>[] }) => {
  if (app) {
    app.emit('form:submit:failed', node, errorInfo)
  }
}

const formSubmit = () => {
  form.value?.submit()
}
const formValidate = () => {
  form.value?.validate()
}

const vantProps = computed(() => {
  return props.config.vantProps ?? {}
})

useApp({
  config: props.config,
  methods: {
    formSubmit,
    formValidate
  }
})
</script>

<style lang="scss"></style>
