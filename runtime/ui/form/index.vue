<template>
  <div>
    <Form
      @submit="submitAfter"
      @failed="failed"
      ref="form"
      v-model="props.config.model"
      v-bind="vantProps"
    >
      <QsContainer
        :config="{
          id: config.id,
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
const submit = () => {
  form.value?.submit()
}
const submitAfter = (values: object) => {
  if (app) {
    app.emit('form:submit:succeed', values)
  }
}
const failed = (errorInfo: { values: object; errors: object[] }) => {
  if (app) {
    app.emit('form:submit:failed', errorInfo)
  }
}
const validate = () => {
  form.value?.validate()
}

const vantProps = computed(() => {
  return props.config.vantProps ?? {}
})
const app = useApp({
  config: props.config,
  methods: {
    submit,
    validate
  }
})

defineExpose({
  submit
})
</script>

<style lang="scss"></style>
