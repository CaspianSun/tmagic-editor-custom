<template>
  <div class="editor-app">
    <m-editor
      ref="editor"
      v-model="value"
      :menu="menu"
      :runtime-url="runtimeUrl"
      :component-group-list="componentGroupList"
      :props-values="propsValues"
      :props-configs="propsConfigs"
      :event-method-list="eventMethodList"
      :data-source-configs="dataSourceConfigs"
      :stage-rect="stageRect"
      :default-selected="defaultSelected"
    >
      <template #workspace-content>
        <DeviceGroup ref="deviceGroup" v-model="stageRect"></DeviceGroup>
      </template>
    </m-editor>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRaw } from 'vue'
import { asyncLoadJs } from '@tmagic/utils'
import { propsService } from '@tmagic/editor'
import { tMagicMessage } from '@tmagic/design'
import type { MenuBarData, TMagicEditor } from '@tmagic/editor'
import { Document, Coin } from '@element-plus/icons-vue'
import DeviceGroup from './components/DeviceGroup.vue'
import serialize from 'serialize-javascript'

const { VITE_ENTRY_PATH } = import.meta.env

const value = ref({
  type: 'app',
  id: 1,
  items: [
    {
      type: 'page',
      id: 2,
      name: 'index',
      title: '',
      layout: 'absolute',
      style: {
        position: 'relative',
        left: 0,
        top: 0,
        right: '',
        bottom: '',
        width: '100%',
        height: '1728',
        backgroundImage: '',
        backgroundColor: 'rgba(248, 218, 218, 1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        color: '',
        fontSize: '',
        fontWeight: ''
      },
      items: []
    }
  ]
})
const editor = ref<InstanceType<typeof TMagicEditor>>()
const defaultSelected = ref(value.value.items[0].id)
const deviceGroup = ref<InstanceType<typeof DeviceGroup>>()
const propsValues = ref<Record<string, any>>({})
const propsConfigs = ref<Record<string, any>>({})
const eventMethodList = ref<Record<string, any>>({})
const dataSourceConfigs = ref<Record<string, any>>({})
const componentGroupList = ref([
  {
    title: '组件列表',
    items: [
      {
        icon: 'https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png',
        text: 'Button',
        type: 'qs-text'
      }
    ]
  }
])
const stageRect = ref({
  width: 375,
  height: 817
})

const runtimeUrl = 'http://localhost:8078/'

asyncLoadJs(`./${VITE_ENTRY_PATH}/config/index.umd.js`).then(() => {
  propsConfigs.value = (globalThis as any).magicPresetConfigs
})
asyncLoadJs(`./${VITE_ENTRY_PATH}/value/index.umd.js`).then(() => {
  propsValues.value = (globalThis as any).magicPresetValues
})
asyncLoadJs(`./${VITE_ENTRY_PATH}/event/index.umd.js`).then(() => {
  eventMethodList.value = (globalThis as any).magicPresetEvents
})
asyncLoadJs(`./${VITE_ENTRY_PATH}/ds-config/index.umd.js`).then(() => {
  dataSourceConfigs.value = (globalThis as any).magicPresetDsConfigs
})
asyncLoadJs(`./${VITE_ENTRY_PATH}/ds-value/index.umd.js`).then(() => {
  dataSourceConfigs.value = (globalThis as any).magicPresetDsValues
})

const menu: MenuBarData = {
  left: [
    {
      type: 'text',
      text: '趣深'
    }
  ],
  center: ['delete', 'undo', 'redo', 'guides', 'rule', 'zoom'],
  right: [
    {
      type: 'button',
      text: '保存',
      icon: Coin,
      handler: () => {
        save()
        tMagicMessage.success('保存成功')
      }
    },
    '/',
    {
      type: 'button',
      icon: Document,
      tooltip: '源码',
      handler: (service) => service?.uiService.set('showSrc', !service?.uiService.get('showSrc'))
    }
  ]
}

const save = () => {
  localStorage.setItem(
    'magicDSL',
    serialize(toRaw(value.value), {
      space: 2,
      unsafe: true
    }).replace(/"(\w+)":\s/g, '$1: ')
  )
  editor.value?.editorService.resetModifiedNodeId()
}

propsService.usePlugin({
  afterGetPropsConfig(result: any, config: any) {
    const animation = {
      title: '动画',
      items: [
        {
          src: 'component',
          name: 'animation',
          type: 'animation'
        }
      ]
    }
    result[0].items.push(animation)
    return result
  }
})
</script>

<style>
.editor-app {
  width: 100%;
  height: 100%;

  .m-editor {
    flex: 1;
    height: 100%;
  }

  .el-overlay-dialog {
    display: flex;
  }

  .pre-viewer {
    margin: auto;

    .el-dialog__body {
      padding: 0;
    }
  }

  .menu-left {
    .menu-item-text {
      margin-left: 10px;
    }
  }
}
</style>
