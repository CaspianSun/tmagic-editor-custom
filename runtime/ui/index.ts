import Page from "./page"
import Text from "./text"
import Img from "./img"
import Container from "./container"
import Overlay from "./overlay"
import Button from "./button"
import QrCode from "./qrCode"
import Swiper from "./swiper"
import Music from "./music"
import PageFragment from "./pageFragment"
import PageFragmentContainer from "./pageFragmentContainer"
import Form from "./form"

const ui: Record<string, any> = {
  page: Page,
  text: Text,
  img: Img,
  container: Container,
  overlay: Overlay,
  button: Button,
  qr_code: QrCode,
  swiper: Swiper,
  music: Music,
  "page-fragment": PageFragment,
  "page-fragment-container": PageFragmentContainer,
  form: Form
}

export default ui
