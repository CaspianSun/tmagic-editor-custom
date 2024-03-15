import type { CreateEditDialog } from "@/components/EditDialog"
import { DeviceType, uaMap } from "@/constant"
import { Document, Coin, Connection } from "@element-plus/icons-vue"
import type { TMagicEditor } from "@tmagic/editor"
import serialize from "serialize-javascript"
import { toRaw, type Ref, nextTick } from "vue"
import { useDataStore } from "@/stores/modules/data"

export const createMenu = (
  value: Ref<any>,
  editor: Ref<InstanceType<typeof TMagicEditor>>,
  iframe: Ref<HTMLIFrameElement>,
  previewVisible: Ref<boolean>,
  save: () => Promise<void>,
  LoadVersionDialog: CreateEditDialog<any>
) => {
  const dataStore = useDataStore()
  return {
    left: [
      {
        type: "text",
        text: "趣深"
      }
    ],
    center: ["delete", "undo", "redo", "guides", "rule", "zoom"],
    right: [
      {
        type: "button",
        text: "加载版本数据",
        icon: Coin,
        handler: () => {
          LoadVersionDialog.open({})
        }
      },
      {
        type: "button",
        text: "预览",
        icon: Connection,
        handler: async () => {
          try {
            const string = serialize(toRaw(value.value), {
              space: 2,
              unsafe: true
            }).replace(/"(\w+)":\s/g, "$1: ")
            dataStore.setMagicDSL(string)
            editor.value?.editorService.resetModifiedNodeId()
          } catch (e) {
            console.log(e)
          }
          previewVisible.value = true
          await nextTick(() => {})
          if (!iframe.value?.contentWindow) return
          Object.defineProperty(iframe.value.contentWindow.navigator, "userAgent", {
            value: uaMap[DeviceType.Phone],
            writable: true
          })
        }
      },
      {
        type: "button",
        text: "保存",
        icon: Coin,
        handler: () => {
          save()
        }
      },
      {
        type: "button",
        text: "保存并关闭",
        icon: Coin,
        handler: async () => {
          await save()
          window.opener.focus()
          window.close()
        }
      },
      "/",
      {
        type: "button",
        icon: Document,
        tooltip: "源码",
        handler: (service: any) => service?.uiService.set("showSrc", !service?.uiService.get("showSrc"))
      }
    ]
  }
}
