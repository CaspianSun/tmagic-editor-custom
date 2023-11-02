import { createApp } from 'vue'
import App from './App.vue'
import Core from '@tmagic/core'
import { DataSourceManager } from '@tmagic/data-source'

Promise.all([
  import('../.tmagic/comp-entry'),
  import('../.tmagic/plugin-entry'),
  import('../.tmagic/datasource-entry')
]).then(([components, plugins, datasources]) => {
  const magicApp = createApp(App)

  Object.entries(components.default).forEach(([type, component]: [string, any]) => {
    magicApp.component(`${type}`, component)
  })

  Object.entries(datasources).forEach(([type, ds]: [string, any]) => {
    DataSourceManager.registe(type, ds)
  })

  Object.values(plugins.default).forEach((plugin: any) => {
    magicApp.use(plugin)
  })

  const app = new Core({
    ua: window.navigator.userAgent,
    platform: 'editor'
  })

  if (app.env.isWeb) {
    app.setDesignWidth(window.document.documentElement.getBoundingClientRect().width)
  }

  window.appInstance = app
  magicApp.config.globalProperties.app = app
  magicApp.provide('app', app)

  magicApp.mount('#app')
})
