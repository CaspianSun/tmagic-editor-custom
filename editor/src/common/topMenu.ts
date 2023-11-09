export const menu: MenuBarData = {
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
