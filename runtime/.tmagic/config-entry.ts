import page from '../ui/page/formConfig';
import text from '../ui/text/formConfig';
import img from '../ui/img/formConfig';
import container from '../ui/container/formConfig';
import overlay from '../ui/overlay/formConfig';
import button from '../ui/button/formConfig';
import qr_code from '../ui/qrCode/formConfig';
import swiper from '../ui/swiper/formConfig';
import music from '../ui/music/formConfig';
import pageFragment from '../ui/pageFragment/formConfig';
import pageFragmentContainer from '../ui/pageFragmentContainer/formConfig';
import form from '../ui/form/formConfig';

const configs: Record<string, any> = {
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

export default configs;