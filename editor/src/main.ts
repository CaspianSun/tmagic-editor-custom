import 'element-plus/dist/index.css'
import '@tmagic/editor/dist/style.css'
import '@tmagic/form/dist/style.css'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
import 'animate.css'
import 'virtual:uno.css'

// import * as monaco from 'monaco-editor'
// import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
// import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
// import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
// import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import TMagicDesign from '@tmagic/design'
import TMagicEditor from '@tmagic/editor'
import TMagicElementPlusAdapter from '@tmagic/element-plus-adapter'
import TMagicForm from '@tmagic/form'

import App from './App.vue'
import Animation from '@/components/Animation/index.vue'

createApp(App)
  .use(createPinia())
  .use(ElementPlus)
  .use(TMagicDesign, TMagicElementPlusAdapter)
  .use(TMagicEditor)
  .use(TMagicForm)
  .component('m-fields-animation', Animation)
  .mount('#app')
