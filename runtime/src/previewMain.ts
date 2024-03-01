import { createApp } from 'vue'
import PreviewPage from './preview/index.vue'
import { DataSourceManager } from '@tmagic/data-source'
import './style/index.scss'
import 'virtual:uno.css'
import 'vant/lib/index.css'
import axios from 'axios'
import { getUrlParam } from '@tmagic/utils'

//@ts-ignore
globalThis.axios = axios

Promise.all([
  import('../.tmagic/comp-entry'),
  import('../.tmagic/plugin-entry'),
  import('../.tmagic/datasource-entry')
]).then(([components, plugins, datasources]) => {
  const magicApp = createApp(PreviewPage)

  Object.entries(components.default).forEach(([type, component]: [string, any]) => {
    magicApp.component(`qs-${type}`, component)
  })

  Object.entries(datasources).forEach(([type, ds]: [string, any]) => {
    DataSourceManager.registe(type, ds)
  })

  Object.values(plugins.default).forEach((plugin: any) => {
    magicApp.use(plugin)
  })
  if (!getUrlParam('localPreview')) {
    if (!window.dslPath) return new Error('dslPath is not defined')
    const script = document.createElement('script')
    script.src = window.dslPath
    script.onload = () => {
      magicApp.mount('#app')
    }
    document.head.appendChild(script)
  } else {
    magicApp.mount('#app')
  }
})
