import page from '../ui/page/event';
import img from '../ui/img/event';
import container from '../ui/container/event';
import overlay from '../ui/overlay/event';
import button from '../ui/button/event';
import field from '../ui/field/event';

const events: Record<string, any> = {
  'page': page,
  'img': img,
  'container': container,
  'overlay': overlay,
  'button': button,
  'field': field,
};

export default events;