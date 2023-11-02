const components: Record<string, any> = {
  'page': () => import('../src/ui/page/src/index.vue'),
  'qs-text': () => import('../src/ui/text/src/index.vue'),
};

export default components;