<template>
  <qs-page class="page" v-if="pageConfig" :key="pageConfig.id" :config="pageConfig"></qs-page>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, provide, reactive, ref } from 'vue'
import Core from '@tmagic/core'
import type { MNode } from '@tmagic/schema'
import { replaceChildNode, getUrlParam } from '@tmagic/utils'
import { getLocalConfig } from '@ui/utils'

/** 去除Injection警告 */
provide('swiperSlide', ref())

const app = new Core({
  ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  config: ((getUrlParam('localPreview') ? getLocalConfig() : window.magicDSL) || [])[0] || {},
  curPage: getUrlParam('page'),
  useMock: Boolean(getUrlParam('useMock'))
})
provide('app', app)
app.setDesignWidth(
  app.env.isWeb ? window.document.documentElement.getBoundingClientRect().width : 375
)
const pageConfig = reactive<MNode | Record<string, any>>(app?.page?.data || {})

const setHtmlFontSize = () => {
  const html = document.documentElement
  const width = html.clientWidth
  console.log(html.style.fontSize)
  html.style.fontSize = width / 3.75 + 'px'
}
onBeforeMount(() => {
  setHtmlFontSize()
  window.addEventListener('resize', setHtmlFontSize)
})

onMounted(() => {
  app?.dataSourceManager?.on('update-data', (nodes: MNode[]) => {
    nodes.forEach((node) => {
      replaceChildNode(reactive(node), [pageConfig as MNode])
    })
  })
  window.appInstance = app
})
</script>

<style>
.page {
  overflow-x: hidden;
}
</style>
