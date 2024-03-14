import PreviewPage from "./preview/index.vue"
import axios from "axios"
import { getUrlParam } from "@tmagic/utils"
import { initApp } from "./utils/initApp"

//@ts-ignore
globalThis.axios = axios

initApp(PreviewPage).then((app) => {
  if (!getUrlParam("localPreview")) {
    if (!window.dslPath) return new Error("dslPath is not defined")
    const script = document.createElement("script")
    script.src = window.dslPath
    script.onload = () => {
      app.mount("#app")
      document.title = window.magicDSL[0].name || ""
    }
    document.head.appendChild(script)
  } else {
    app.mount("#app")
  }
})
