const components: Record<string, any> = {
  'page': () => import('../ui/page/index.vue'),
  'text': () => import('../ui/text/index.vue'),
  'img': () => import('../ui/img/index.vue'),
  'container': () => import('../ui/container/index.vue'),
  'overlay': () => import('../ui/overlay/index.vue'),
  'button': () => import('../ui/button/index.vue'),
};

export default components;