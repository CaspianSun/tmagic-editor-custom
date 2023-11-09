import page from '../ui/page/index.vue';
import text from '../ui/text/index.vue';
import img from '../ui/img/index.vue';
import container from '../ui/container/index.vue';
import overlay from '../ui/overlay/index.vue';
import button from '../ui/button/index.vue';
import field from '../ui/field/index.vue';

const components: Record<string, any> = {
  'page': page,
  'text': text,
  'img': img,
  'container': container,
  'overlay': overlay,
  'button': button,
  'field': field,
};

export default components;