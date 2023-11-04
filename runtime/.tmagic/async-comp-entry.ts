const components: Record<string, any> = {
  'page': () => import('../ui/page/src/index.vue'),
  'qs-text': () => import('../ui/text/index.vue'),
};

export default components;