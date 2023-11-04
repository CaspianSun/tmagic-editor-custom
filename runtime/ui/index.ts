import Page from './page'
import Text from './text'

const ui: Record<string, any> = {
  page: Page,
  'qs-text': Text
}

console.log('ui', Object.keys(ui))
export default ui
