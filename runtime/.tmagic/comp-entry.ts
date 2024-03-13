import page from '../ui/page/index.vue';
import text from '../ui/text/index.vue';
import img from '../ui/img/index.vue';
import container from '../ui/container/index.vue';
import overlay from '../ui/overlay/index.vue';
import button from '../ui/button/index.vue';
import qr_code from '../ui/qrCode/index.vue';
import swiper from '../ui/swiper/index.vue';
import music from '../ui/music/index.vue';
import pageFragment from '../ui/pageFragment/PageFragment.vue';
import pageFragmentContainer from '../ui/pageFragmentContainer/PageFragmentContainer.vue';
import form from '../ui/form/index.vue';

const components: Record<string, any> = {
  'page': page,
  'text': text,
  'img': img,
  'container': container,
  'overlay': overlay,
  'button': button,
  'qr_code': qr_code,
  'swiper': swiper,
  'music': music,
  'page-fragment': pageFragment,
  'page-fragment-container': pageFragmentContainer,
  'form': form,
};

export default components;