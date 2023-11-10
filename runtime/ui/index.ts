import Page from './page'
import Text from './text'
import Img from './img'
import Container from './container'
import Overlay from './overlay'
import Button from './button'
import Field from './field'
import Form from './form'
import CheckBox from './checkbox'
import Radio from './radio'

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
  radio: Radio
}

export default ui
