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
        ref="previewIframeRef"
        id="previewIframe"
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
import { computed, ref, toRaw, type Ref } from "vue"
import { NodeType } from "@tmagic/schema"
import { asyncLoadJs } from "@tmagic/utils"
import type { CustomizeMoveableOptionsCallbackConfig } from "@tmagic/stage"
import { tMagicMessage, TMagicDialog } from "@tmagic/design"
import { TMagicEditor } from "@tmagic/editor"
import type { DatasourceTypeOption, MoveableOptions } from "@tmagic/editor"
import serialize from "serialize-javascript"
import type { FormInstance } from "element-plus"
import { getDslVersionListApi, saveDslApi, getVersionInfoApi } from "@/api/index"
import { CreateEditDialog } from "@/components/EditDialog"
import { useServices } from "@/hooks/useServices"
import { createMenu } from "@/configs/menu"
import dsl from "@/configs/dsl"
import { componentGroupList } from "@/configs/componentGroupList"
import { compareVersions } from "@/utils/version"
import { useDataStore } from "./stores/modules/data"

/** 本地数据仓库 */
const dataStore = useDataStore()
/** 获取版本列表 */
const getList = async (actId: number) => {
  const { result } = await getDslVersionListApi(actId)
  versionList.value = result.sort((a, b) => {
    return compareVersions(a.version, b.version)
  })
}
/** 加载版本表单 */
const LoadVersionForm = ref({ versionId: undefined })
const versionList = ref<Pick<defs.agent.CodeManagement, "id" | "version">[]>([])
const LoadVersionFormInstance = ref<FormInstance>()
const LoadVersionDialog = new CreateEditDialog({
  title: "加载版本",
  addTitle: "加载版本",
  addConfirmButtonText: "加载",
  confirm: async () => {
    await LoadVersionFormInstance.value?.validate().then(async () => {
      await initLoadDsl(LoadVersionForm.value.versionId)
      tMagicMessage.success("加载成功")
    })
  },
  closeCallback: () => {
    LoadVersionFormInstance.value?.resetFields()
  }
})
/** 初始化加载dsl */
const initLoadDsl = async (id?: number) => {
  if (versionList.value.length == 0) return
  const { result } = await getVersionInfoApi(id ?? versionList.value[0].id)
  if (result.dsl) {
    const data = eval(`(${result.dsl})`)[0]
    editor.value.editorService.set("root", data)
    editor.value?.editorService.select(data.items?.[0]?.id ?? null)
  }
}

useServices()
/** 是否开发环境 */
const isDev = import.meta.env.MODE == "development"
/** 编辑器数据 */
const value = ref(isDev ? dsl : { type: "app", id: "1", items: [] })
/** 组件分组列表 */
const datasourceList: DatasourceTypeOption[] = []
/** 默认选中 */
const defaultSelected = ref(value.value?.items?.[0]?.id ?? null)
/** 预览是否可见 */
const previewVisible = ref(false)
/** 编辑器实例 */
const editor = ref<InstanceType<typeof TMagicEditor>>()
/** 预览iframe */
const previewIframeRef = ref<HTMLIFrameElement>() as Ref<HTMLIFrameElement>
/** 组件属性值 */
const propsValues = ref<Record<string, any>>({})
/** 组件属性配置 */
const propsConfigs = ref<Record<string, any>>({})
/** 事件方法列表 */
const eventMethodList = ref<Record<string, any>>({})
/** 数据源配置 */
const dataSourceConfigs = ref<Record<string, any>>({})
/** 数据源值 */
const datasourceValues = ref<Record<string, any>>({})
/** 数据源事件方法列表 */
const datasourceEventMethodList = ref<Record<string, any>>({ base: { events: [], methods: [] } })
/** 页面尺寸 */
const stageRect = ref({ width: 375, height: 812 })
/** 代码编辑器配置 */
const codeOptions = ref({
  theme: "vs-light",
  fixedOverflowWidgets: true,
  automaticLayout: true,
  glyphMargin: false,
  folding: false,
  tabSize: 2,
  lineDecorationsWidth: 6,
  lineNumbersMinChars: 0
})
/** url */
const url = window.location.origin.replace(/\/$/, "")
/** 运行时url */
const runtimeUrl = `${url}/code/runtime/index.html`
/** 预览url */
const previewUrl = computed(() => `${url}/code/runtime/preview.html?localPreview=1&page=${editor.value?.editorService.get("page")?.id}`)

/** 加载entry js */
const entryList = ["/config", "/value", "/event", "/ds-config", "/ds-value"] as const
entryList.forEach((entry) => {
  asyncLoadJs(new URL(`./entry${entry}/index.umd.js`, window.location.href).href).then(() => {
    const that = globalThis as any
    switch (entry) {
      case "/config":
        propsConfigs.value = that.magicPresetConfigs
        break
      case "/value":
        propsValues.value = that.magicPresetValues
        break
      case "/event":
        eventMethodList.value = that.magicPresetEvents
        break
      case "/ds-config":
        dataSourceConfigs.value = that.magicPresetDsConfigs
        break
      case "/ds-value":
        datasourceValues.value = that.magicPresetDsValues
        break
    }
  })
})
/** 是否可以选中 */
const canSelect = (el: HTMLElement): Boolean =>
  (el.classList.contains("magic-ui-component") || el.classList.contains("magic-ui-container")) && Boolean(el.id)

/** 移动配置 */
const moveableOptions = (config?: CustomizeMoveableOptionsCallbackConfig): MoveableOptions => {
  const options: MoveableOptions = {}
  if (!editor.value) return options
  const page = editor.value.editorService.get("page")
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
  if (!dataStore.actId) return
  const lastVersion = versionList.value[0].version
  const lastVersionActId = lastVersion.split(".")
  const { result } = await saveDslApi({
    id: saveId.value,
    actId: Number(dataStore.actId),
    version: `${lastVersionActId[0]}.${lastVersionActId[1]}.${Number(lastVersionActId[2]) + 1}`,
    dsl: serialize(toRaw([value.value]), {
      unsafe: true
    }) as unknown as Record<string, any>
  })
  saveId.value = result.id
  editor.value?.editorService.resetModifiedNodeId()
  window.opener.postMessage(
    {
      type: "save"
    },
    "*"
  )
  await getList(Number(dataStore.actId))
  tMagicMessage.success("保存成功")
}
const menu = createMenu(value, editor, previewIframeRef, previewVisible, save, LoadVersionDialog)

window.addEventListener(
  "message",
  async (e) => {
    if (e.data.type == "init") {
      e.data.params.actId && (dataStore.actId = e.data.params.actId)
      e.data.params.actCode && (dataStore.actCode = e.data.params.actCode)
      e.data.params.baseFormCode && (dataStore.baseFormCode = e.data.params.baseFormCode)
      await getList(e.data.params.actId)
      await initLoadDsl()
    }
    if (e.data.type == "check") {
      window.opener.postMessage(
        {
          type: "check",
          status: dataStore.actId == e.data?.params?.actId && window?.version == e.data?.params?.version
        },
        "*"
      )
    }
  },
  false
)
window.opener?.postMessage({ type: "onload" }, "*")
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
