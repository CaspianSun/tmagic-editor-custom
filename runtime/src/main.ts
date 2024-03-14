import EditPage from "./editor/index.vue"
import { initApp } from "./utils/initApp"

initApp(EditPage).then((app) => {
  app.mount("#app")
})
