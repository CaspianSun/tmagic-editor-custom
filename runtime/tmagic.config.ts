import path from 'path'

import { defineConfig } from '@tmagic/cli'

export default defineConfig({
  packages: [path.join(__dirname, './src/ui')],
  componentFileAffix: '.vue',
  dynamicImport: true
})
