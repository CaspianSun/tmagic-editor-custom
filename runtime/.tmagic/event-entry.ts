import page from '../ui/page/event';
import img from '../ui/img/event';
import container from '../ui/container/event';
import overlay from '../ui/overlay/event';
import button from '../ui/button/event';
import field from '../ui/field/event';
import form from '../ui/form/event';
import check_box from '../ui/checkBox/event';
import radio from '../ui/radio/event';
import sms from '../ui/sms/event';

const events: Record<string, any> = {
  'page': page,
  'img': img,
  'container': container,
  'overlay': overlay,
  'button': button,
  'field': field,
  'form': form,
  'check_box': check_box,
  'radio': radio,
  'sms': sms,
};

export default events;