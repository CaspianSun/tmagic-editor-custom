const components: Record<string, any> = {
  'page': () => import('../ui/page/src/index.vue'),
  'text': () => import('../ui/text/index.vue'),
  'img': () => import('../ui/img/src/index.vue'),
};

export default components;