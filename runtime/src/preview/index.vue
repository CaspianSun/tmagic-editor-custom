<template>
  <page class="page" v-if="pageConfig" :key="pageConfig.id" :config="pageConfig"></page>
</template>

<script lang="ts" setup>
import { onMounted, provide, reactive } from 'vue'
import Core from '@tmagic/core'
import type { MNode } from '@tmagic/schema'
import { replaceChildNode, getUrlParam } from '@tmagic/utils'
import { getLocalConfig } from '@/utils'

const app = new Core({
  ua: window.navigator.userAgent,
  config: ((getUrlParam('localPreview') ? getLocalConfig() : window.magicDSL) || [])[0] || {},
  curPage: getUrlParam('page'),
  useMock: Boolean(getUrlParam('useMock'))
})
console.log(getLocalConfig())
app.setDesignWidth(
  app.env.isWeb ? window.document.documentElement.getBoundingClientRect().width : 375
)
provide('app', app)
const pageConfig = reactive<any>(app?.page?.data || {})

onMounted(() => {
  console.log(app)
  app?.dataSourceManager?.on('update-data', (nodes: MNode[]) => {
    nodes.forEach((node) => {
      replaceChildNode(reactive(node), [pageConfig as MNode])
    })
  })
  window.appInstance = app
})
</script>
