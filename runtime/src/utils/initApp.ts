import { createApp, type Component, type ComputedOptions, type MethodOptions } from "vue"
import { DataSourceManager } from "@tmagic/data-source"
import "../style/index.scss"
import "virtual:uno.css"
import "vant/lib/index.css"

export async function initApp(root: Component<any, any, any, ComputedOptions, MethodOptions, {}, any>) {
  const [components, plugins, datasources] = await Promise.all([
    import("../../.tmagic/comp-entry"),
    import("../../.tmagic/plugin-entry"),
    import("../../.tmagic/datasource-entry")
  ])
  const app = createApp(root)
  Object.entries(components.default).forEach(([type, component]: [string, any]) => {
    app.component(`qs-${type}`, component)
  })
  Object.entries(datasources).forEach(([type_1, ds]: [string, any]) => {
    DataSourceManager.register(type_1, ds)
  })
  Object.values(plugins.default).forEach((plugin: any) => {
    app.use(plugin)
  })
  return app
}
