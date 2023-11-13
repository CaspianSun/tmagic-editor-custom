<template>
  <div>
    <Field v-bind="vantProps">
      <template #input>
        <RadioGroup v-model="data" direction="horizontal">
          <Radio
            style="margin-top: 2px"
            v-for="item in props.config.options"
            :key="item.value"
            :name="item.name"
            :label="item.label"
            :disabled="item.disabled"
          >
            {{ item.label }}
          </Radio>
        </RadioGroup>
      </template>
    </Field>
  </div>
</template>
<script lang="ts" setup>
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { Field, Radio, RadioGroup } from 'vant'
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)
const data = ref('')
const vantProps = computed(() => {
  return props.config.vantProps ?? {}
})

useApp({
  config: props.config,
  methods: {}
})
</script>

<style lang="scss"></style>
