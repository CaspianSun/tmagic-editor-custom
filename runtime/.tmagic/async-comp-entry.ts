const components: Record<string, any> = {
  'page': () => import('../ui/page/index.vue'),
  'text': () => import('../ui/text/index.vue'),
  'img': () => import('../ui/img/index.vue'),
  'container': () => import('../ui/container/index.vue'),
  'overlay': () => import('../ui/overlay/index.vue'),
  'button': () => import('../ui/button/index.vue'),
  'field': () => import('../ui/field/index.vue'),
  'form': () => import('../ui/form/index.vue'),
  'check_box': () => import('../ui/checkBox/index.vue'),
  'radio': () => import('../ui/radio/index.vue'),
  'qr_code': () => import('../ui/qrCode/index.vue'),
  'sms': () => import('../ui/sms/index.vue'),
  'swiper': () => import('../ui/swiper/index.vue'),
  'music': () => import('../ui/music/index.vue'),
  'page-fragment': () => import('../ui/pageFragment/PageFragment.vue'),
  'page-fragment-container': () => import('../ui/pageFragmentContainer/PageFragmentContainer.vue'),
};

export default components;