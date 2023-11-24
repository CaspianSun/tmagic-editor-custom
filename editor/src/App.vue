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
    <LoadVersionDialog.Dialog>
      <ElForm ref="LoadVersionFormInstance" el-width="80px" :model="LoadVersionForm">
        <ElFormItem label="版本" prop="versionId" :rules="[{ required: true, message: '请选择版本', trigger: 'blur' }]">
          <ElSelect v-model="LoadVersionForm.versionId" placeholder="请选择版本">
            <ElOption v-for="item in versionList" :key="item.id" :label="item.version" :value="item.id"></ElOption>
          </ElSelect>
        </ElFormItem>
      </ElForm>
    </LoadVersionDialog.Dialog>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { computed, nextTick, ref, toRaw } from 'vue'
import { NodeType } from '@tmagic/schema'
import { asyncLoadJs } from '@tmagic/utils'
import type { CustomizeMoveableOptionsCallbackConfig } from '@tmagic/stage'
import { tMagicMessage, TMagicDialog } from '@tmagic/design'
import { TMagicEditor } from '@tmagic/editor'
import type { DatasourceTypeOption, MoveableOptions } from '@tmagic/editor'
import { Document, Coin, Connection } from '@element-plus/icons-vue'
import serialize from 'serialize-javascript'
import DeviceGroup from './components/DeviceGroup.vue'
import { uaMap } from './const'
import { componentGroupList } from '@/configs/componentGroupList'
import dsl from '@/configs/dsl'
import { useCustomService } from '@/common/customServices'
import { getDslVersionListApi, saveDslApi, getVersionInfoApi } from '@/api/index'
import { CreateEditDialog } from '@/components/EditDialog'
import type { FormInstance } from 'element-plus'

const LoadVersionForm = ref({
  versionId: undefined
})
const LoadVersionFormInstance = ref<FormInstance>()
const LoadVersionDialog = new CreateEditDialog({
  addTitle: '加载版本',
  addConfirmButtonText: '加载',
  confirm: async () => {
    await LoadVersionFormInstance.value?.validate().then(async () => {
      await initLoadDsl(LoadVersionForm.value.versionId)
      tMagicMessage.success('加载成功')
    })
  },
  closeCallback: () => {
    LoadVersionFormInstance.value?.resetFields()
  }
})

window.addEventListener(
  'message',
  async (e) => {
    if (e.data.type == 'init') {
      window.actId = e.data.params.actId
      window.version = e.data.params.version
      await getList(e.data.params.actId)
      await initLoadDsl()
    }
    if (e.data.type == 'check') {
      window.opener.postMessage(
        {
          type: 'check',
          status: window?.actId == e.data?.params?.actId && window?.version == e.data?.params?.version
        },
        '*'
      )
    }
  },
  false
)
window.opener?.postMessage(
  {
    type: 'onload'
  },
  '*'
)

const isDev = import.meta.env.MODE == 'development'

const versionList = ref<Pick<defs.agent.CodeManagement, 'id' | 'version'>[]>([])

const getList = async (actId: number) => {
  const { result } = await getDslVersionListApi(actId)
  versionList.value = result.sort((a, b) => {
    const aArr = a.version.split('.')
    const bArr = b.version.split('.')
    if (aArr[0] > bArr[0]) {
      return -1
    } else if (aArr[0] < bArr[0]) {
      return 1
    } else {
      if (aArr[1] > bArr[1]) {
        return -1
      } else if (aArr[1] < bArr[1]) {
        return 1
      } else {
        if (aArr[2] > bArr[2]) {
          return -1
        } else if (aArr[2] < bArr[2]) {
          return 1
        } else {
          return 0
        }
      }
    }
  })
}

const initLoadDsl = async (id?: number) => {
  if (versionList.value.length == 0) return
  const { result } = await getVersionInfoApi(id ?? versionList.value[0].id)
  if (result.dsl) {
    const data = eval(`(${result.dsl})`)[0]
    editor.value.editorService.set('root', data)
    editor.value?.editorService.select(data.items?.[0]?.id ?? null)
  }
}

useCustomService()
const value = ref(isDev ? dsl : {})
const datasourceList: DatasourceTypeOption[] = []
//@ts-ignore
const defaultSelected = ref(value.value?.items?.[0]?.id ?? null)
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

const url = window.location.origin.replace(/\/$/, '')
const runtimeUrl = `${url}/code/runtime/index.html`
const previewUrl = computed(() => `${url}/code/runtime/preview.html?localPreview=1&page=${editor.value?.editorService.get('page')?.id}`)

const getUrl = (url: string) => {
  return new URL(url, window.location.href).href
}
asyncLoadJs(getUrl('./entry/config/index.umd.js')).then(() => {
  propsConfigs.value = (globalThis as any).magicPresetConfigs
})
asyncLoadJs(getUrl(`./entry/value/index.umd.js`)).then(() => {
  propsValues.value = (globalThis as any).magicPresetValues
})
asyncLoadJs(getUrl(`./entry/event/index.umd.js`)).then(() => {
  eventMethodList.value = (globalThis as any).magicPresetEvents
})
asyncLoadJs(getUrl(`./entry/ds-config/index.umd.js`)).then(() => {
  dataSourceConfigs.value = (globalThis as any).magicPresetDsConfigs
})
asyncLoadJs(getUrl(`./entry/ds-value/index.umd.js`)).then(() => {
  datasourceValues.value = (globalThis as any).magicPresetDsValues
})

const menu = {
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
      text: '加载版本数据',
      icon: Coin,
      handler: () => {
        LoadVersionDialog.open({})
      }
    },
    {
      type: 'button',
      text: '预览',
      icon: Connection,
      handler: async () => {
        try {
          localStorage.setItem(
            'magicDSL',
            serialize(toRaw(value.value), {
              space: 2,
              unsafe: true
            }).replace(/"(\w+)":\s/g, '$1: ')
          )
          editor.value?.editorService.resetModifiedNodeId()
        } catch (e) {
          console.log(e)
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
      }
    },
    {
      type: 'button',
      text: '保存并关闭',
      icon: Coin,
      handler: async () => {
        await save()
        window.opener.focus()
        window.close()
      }
    },
    '/',
    {
      type: 'button',
      icon: Document,
      tooltip: '源码',
      handler: (service: any) => service?.uiService.set('showSrc', !service?.uiService.get('showSrc'))
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

const saveId = ref<number>()
const save = async () => {
  if (!window.actId || !window.version) return
  const { result } = await saveDslApi({
    id: saveId.value,
    actId: window.actId,
    version: window.version,
    dsl: serialize(toRaw([value.value]), {
      unsafe: true
    })
  })
  saveId.value = result.id
  editor.value?.editorService.resetModifiedNodeId()
  window.opener.postMessage(
    {
      type: 'save'
    },
    '*'
  )
  tMagicMessage.success('保存成功')
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
    flex-direction: column;
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
