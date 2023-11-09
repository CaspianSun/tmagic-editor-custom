import { createApp } from 'vue'
import PreviewPage from './preview/index.vue'
import { DataSourceManager } from '@tmagic/data-source'
import './style/index.scss'
import 'animate.css'
import 'virtual:uno.css'
import 'vant/lib/index.css'

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

  magicApp.mount('#app')
})
