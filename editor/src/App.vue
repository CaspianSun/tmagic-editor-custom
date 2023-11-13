<template>
  <div class="editor-app">
    <TMagicEditor
      ref="editor"
      v-model="value"
      :menu="menu"
      :runtime-url="runtimeUrl"
      :props-values="propsValues"
      :props-configs="propsConfigs"
      :event-method-list="eventMethodList"
      :datasource-event-method-list="datasourceEventMethodList"
      :datasource-configs="dataSourceConfigs"
      :datasource-values="datasourceValues"
      :component-group-list="componentGroupList"
      :datasource-list="datasourceList"
      :default-selected="defaultSelected"
      :moveable-options="moveableOptions"
      :auto-scroll-into-view="true"
      :stage-rect="stageRect"
      :can-select="canSelect"
      :code-options="codeOptions"
    >
      <template #workspace-content>
        <DeviceGroup ref="deviceGroup" v-model="stageRect"></DeviceGroup>
      </template>
    </TMagicEditor>
    <TMagicDialog v-model="previewVisible" destroy-on-close class="pre-viewer" title="预览" :width="stageRect && stageRect.width">
      <iframe
        v-if="previewVisible"
        ref="iframe"
        width="100%"
        style="border: none"
        :height="stageRect && stageRect.height"
        :src="previewUrl"
      ></iframe>
    </TMagicDialog>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { computed, nextTick, ref, toRaw } from 'vue'
import { NodeType } from '@tmagic/schema'
import { asyncLoadJs } from '@tmagic/utils'
import type { CustomizeMoveableOptionsCallbackConfig } from '@tmagic/stage'
import { tMagicMessage, TMagicDialog, tMagicMessageBox } from '@tmagic/design'
import { TMagicEditor } from '@tmagic/editor'
import type { DatasourceTypeOption, MenuBarData, MoveableOptions } from '@tmagic/editor'
import { Document, Coin, Connection } from '@element-plus/icons-vue'
import serialize from 'serialize-javascript'
import DeviceGroup from './components/DeviceGroup.vue'
import { uaMap } from './const'
import { componentGroupList } from '@/configs/componentGroupList'
import dsl from '@/configs/dsl'
import { useCustomService } from '@/common/customServices'

useCustomService()
const { VITE_ENTRY_PATH } = import.meta.env
const value = ref(dsl)
const datasourceList: DatasourceTypeOption[] = []
const defaultSelected = ref(value.value.items[0].id)
const previewVisible = ref(false)
const editor = ref<InstanceType<typeof TMagicEditor>>()
const deviceGroup = ref<InstanceType<typeof DeviceGroup>>()
const iframe = ref<HTMLIFrameElement>() as Ref<HTMLIFrameElement>
const propsValues = ref<Record<string, any>>({})
const propsConfigs = ref<Record<string, any>>({})
const eventMethodList = ref<Record<string, any>>({})
const dataSourceConfigs = ref<Record<string, any>>({})
const datasourceValues = ref<Record<string, any>>({})
const datasourceEventMethodList = ref<Record<string, any>>({
  base: {
    events: [],
    methods: []
  }
})
const stageRect = ref({
  width: 375,
  height: 812
})
const codeOptions = ref({
  theme: 'vs-light',
  fixedOverflowWidgets: true,
  automaticLayout: true,
  glyphMargin: false,
  folding: false,
  tabSize: 2,
  lineDecorationsWidth: 6,
  lineNumbersMinChars: 0
})

const runtimeUrl = '/code/runtime/'
const previewUrl = computed(() => `/code/runtime/preview.html?localPreview=1&page=${editor.value?.editorService.get('page')?.id}`)

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
  datasourceValues.value = (globalThis as any).magicPresetDsValues
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
      text: '预览',
      icon: Connection,
      handler: async (services) => {
        if (services?.editorService.get('modifiedNodeIds').size > 0) {
          try {
            await tMagicMessageBox.confirm('有修改未保存，是否先保存再预览', '提示', {
              confirmButtonText: '保存并预览',
              cancelButtonText: '预览',
              type: 'warning'
            })
            save()
            tMagicMessage.success('保存成功')
          } catch (e) {
            console.error(e)
          }
        }
        previewVisible.value = true
        await nextTick(() => {})
        if (!iframe.value?.contentWindow || !deviceGroup.value?.viewerDevice) return
        Object.defineProperty(iframe.value.contentWindow.navigator, 'userAgent', {
          value: uaMap[deviceGroup.value.viewerDevice],
          writable: true
        })
      }
    },
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
const canSelect = (el: HTMLElement): Boolean => el.classList.contains('magic-ui-component') || el.classList.contains('magic-ui-container')

const moveableOptions = (config?: CustomizeMoveableOptionsCallbackConfig): MoveableOptions => {
  const options: MoveableOptions = {}

  if (!editor.value) return options

  const page = editor.value.editorService.get('page')

  const ids = config?.targetElIds || []
  let isPage = page && ids.includes(`${page.id}`)

  if (!isPage) {
    const id = config?.targetElId
    if (id) {
      const node = editor.value.editorService.getNodeById(id)
      isPage = node?.type === NodeType.PAGE
    }
  }

  options.draggable = !isPage
  options.resizable = !isPage
  options.rotatable = !isPage
  return options
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
