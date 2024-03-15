import "element-plus/dist/index.css"
import "@tmagic/editor/dist/style.css"
import "@tmagic/form/dist/style.css"
import "@/style/index.scss"
import "virtual:uno.css"

import { createApp } from "vue"
import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import TMagicDesign from "@tmagic/design"
import TMagicEditor from "@tmagic/editor"
import TMagicElementPlusAdapter from "@tmagic/element-plus-adapter"
import TMagicForm from "@tmagic/form"

import Fields from "@/fields/index"
import App from "./App.vue"
import store from "@/stores"
import "@/utils/loadMonaco"

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.use(TMagicDesign, TMagicElementPlusAdapter)
app.use(TMagicEditor)
app.use(TMagicForm)
app.use(Fields)
app.use(store)
app.mount("#app")
