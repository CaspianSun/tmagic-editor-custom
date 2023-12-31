import Page from './page'
import Text from './text'
import Img from './img'
import Container from './container'
import Overlay from './overlay'
import Button from './button'
import Field from './field'
import Form from './form'
import CheckBox from './checkBox'
import Radio from './radio'
import QrCode from './qrCode'
import Sms from './sms'
import Swiper from './swiper'
import SwiperSlide from './swiperSlide'
import Music from './music'

const ui: Record<string, any> = {
  page: Page,
  text: Text,
  img: Img,
  container: Container,
  overlay: Overlay,
  button: Button,
  field: Field,
  form: Form,
  check_box: CheckBox,
  radio: Radio,
  qr_code: QrCode,
  sms: Sms,
  swiper: Swiper,
  swiper_slide: SwiperSlide,
  music: Music
}

export default ui
