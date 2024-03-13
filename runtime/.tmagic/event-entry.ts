import page from '../ui/page/event';
import img from '../ui/img/event';
import container from '../ui/container/event';
import overlay from '../ui/overlay/event';
import button from '../ui/button/event';
import swiper from '../ui/swiper/event';
import music from '../ui/music/event';
import form from '../ui/form/event';

const events: Record<string, any> = {
  'page': page,
  'img': img,
  'container': container,
  'overlay': overlay,
  'button': button,
  'swiper': swiper,
  'music': music,
  'form': form,
};

export default events;