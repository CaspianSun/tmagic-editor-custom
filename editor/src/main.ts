//@ts-nocheck
import 'element-plus/dist/index.css'
import '@tmagic/editor/dist/style.css'
import '@tmagic/form/dist/style.css'
import '@/style/index.scss'
import 'animate.css'
import 'virtual:uno.css'

import { loader } from '@guolao/vue-monaco-editor'
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
globalThis.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new CssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new HtmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker()
    }
    return new EditorWorker()
  }
}
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true)
loader.config({ monaco })

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import TMagicDesign from '@tmagic/design'
import TMagicEditor from '@tmagic/editor'
import TMagicElementPlusAdapter from '@tmagic/element-plus-adapter'
import TMagicForm from '@tmagic/form'

import CustomFields from '@/fields/index'

import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn
})
app.use(TMagicDesign, TMagicElementPlusAdapter)
app.use(TMagicEditor)
app.use(TMagicForm)
app.use(CustomFields)
app.mount('#app')
