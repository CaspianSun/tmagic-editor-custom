<template>
  <qs-page class="page" v-if="pageConfig" :key="pageConfig.id" :config="pageConfig"></qs-page>
</template>

<script lang="ts" setup>
import { onMounted, provide, reactive } from 'vue'
import Core from '@tmagic/core'
import type { MNode } from '@tmagic/schema'
import { replaceChildNode, getUrlParam } from '@tmagic/utils'
import { getLocalConfig } from '@ui/utils'
import WOW from 'wow.js'

const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true,
  callback: function (box: any) {},
  scrollContainer: null,
  resetAnimation: true
})
wow.init()

const app = new Core({
  ua: window.navigator.userAgent,
  config: ((getUrlParam('localPreview') ? getLocalConfig() : window.magicDSL) || [])[0] || {},
  curPage: getUrlParam('page'),
  useMock: Boolean(getUrlParam('useMock'))
})

app.setDesignWidth(
  app.env.isWeb ? window.document.documentElement.getBoundingClientRect().width : 375
)
provide('app', app)
const pageConfig = reactive<any>(app?.page?.data || {})

onMounted(() => {
  app?.dataSourceManager?.on('update-data', (nodes: MNode[]) => {
    nodes.forEach((node) => {
      replaceChildNode(reactive(node), [pageConfig as MNode])
    })
  })
  window.appInstance = app
})
</script>
