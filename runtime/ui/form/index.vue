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
import { computed, ref } from 'vue'
import QsContainer from '@ui/container/index.vue'

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
const formSubmit = () => {
  form.value?.submit()
}
const submit = (values: object) => {
  console.log('submit', values)
  if (app) {
    app.emit('form:submit', values)
  }
}
const failed = (errorInfo: { values: object; errors: object[] }) => {
  console.log('failed')
  if (app) {
    app.emit('form:submit:failed', errorInfo)
  }
}
const formValidate = () => {
  form.value?.validate()
}

const vantProps = computed(() => {
  return props.config.vantProps ?? {}
})
const app = useApp({
  config: props.config,
  methods: {
    formSubmit,
    formValidate
  }
})
</script>

<style lang="scss"></style>
