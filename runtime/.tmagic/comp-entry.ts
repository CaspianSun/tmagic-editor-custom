import page from '../ui/page/index.vue';
import text from '../ui/text/index.vue';
import img from '../ui/img/index.vue';
import container from '../ui/container/index.vue';
import overlay from '../ui/overlay/index.vue';
import button from '../ui/button/index.vue';
import field from '../ui/field/index.vue';
import form from '../ui/form/index.vue';
import check_box from '../ui/checkBox/index.vue';
import radio from '../ui/radio/index.vue';
import qr_code from '../ui/qrCode/index.vue';
import sms from '../ui/sms/index.vue';
import swiper from '../ui/swiper/index.vue';
import music from '../ui/music/index.vue';
import pageFragment from '../ui/pageFragment/PageFragment.vue';
import pageFragmentContainer from '../ui/pageFragmentContainer/PageFragmentContainer.vue';

const components: Record<string, any> = {
  'page': page,
  'text': text,
  'img': img,
  'container': container,
  'overlay': overlay,
  'button': button,
  'field': field,
  'form': form,
  'check_box': check_box,
  'radio': radio,
  'qr_code': qr_code,
  'sms': sms,
  'swiper': swiper,
  'music': music,
  'page-fragment': pageFragment,
  'page-fragment-container': pageFragmentContainer,
};

export default components;