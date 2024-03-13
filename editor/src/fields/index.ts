import type { App } from "vue"

import Animation from "./Animation/index.vue"
import Style from "./Style/index.vue"
import FormField from "./FormField/index.vue"

export default {
  install(app: App) {
    app.component("m-fields-animation", Animation)
    app.component("m-fields-style", Style)
    app.component("m-fields-form-field", FormField)
  }
}
