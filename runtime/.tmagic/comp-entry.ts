import page from '../ui/page/index.vue';
import text from '../ui/text/index.vue';
import img from '../ui/img/index.vue';
import container from '../ui/container/index.vue';
import overlay from '../ui/overlay/index.vue';

const components: Record<string, any> = {
  'page': page,
  'text': text,
  'img': img,
  'container': container,
  'overlay': overlay,
};

export default components;