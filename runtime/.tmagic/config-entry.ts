import page from '../ui/page/formConfig';
import text from '../ui/text/formConfig';
import img from '../ui/img/formConfig';
import container from '../ui/container/formConfig';
import overlay from '../ui/overlay/formConfig';
import button from '../ui/button/formConfig';
import field from '../ui/field/formConfig';
import form from '../ui/form/formConfig';
import check_box from '../ui/checkBox/formConfig';
import radio from '../ui/radio/formConfig';
import qr_code from '../ui/qrCode/formConfig';
import sms from '../ui/sms/formConfig';
import swiper from '../ui/swiper/formConfig';
import swiper_slide from '../ui/swiperSlide/formConfig';
import music from '../ui/music/formConfig';

const configs: Record<string, any> = {
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
  'swiper_slide': swiper_slide,
  'music': music,
};

export default configs;