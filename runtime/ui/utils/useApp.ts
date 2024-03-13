/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2023 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { inject, onMounted, onUnmounted } from "vue"

import Core from "@tmagic/core"
import type { Id, MComponent } from "@tmagic/schema"

interface MComponentConfig extends Omit<MComponent, "id"> {
  id?: Id
}
interface UseAppOptions {
  methods?: {
    [key: string]: Function
  }
}

export default (config: MComponentConfig, options?: UseAppOptions) => {
  const app = inject<Core>("app")
  const node = app?.page?.getNode(config.id!)

  const emitData = {
    config,
    ...(options?.methods || {})
  }

  node?.emit("created", emitData)

  onMounted(() => {
    node?.emit("mounted", emitData)
  })

  onUnmounted(() => {
    node?.emit("destroy", emitData)
  })

  return {
    app,
    node
  }
}
