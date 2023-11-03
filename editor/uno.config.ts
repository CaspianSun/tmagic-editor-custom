import { defineConfig } from 'unocss'
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [
      'hidden',
      {
        display: 'block'
      }
    ],
    [
      /^ma-(.+)-(.+)$/,
      ([, a, b]) => ({
        margin: `${a} ${b}`
      })
    ],
    [
      /^pa-(.+)-(.+)$/,
      ([, a, b]) => ({
        padding: `${a} ${b}`
      })
    ],
    [
      /^px-(.+)-(.+)$/,
      ([, a, b]) => ({
        'padding-left': `${a}`,
        'padding-right': `${b}`
      })
    ],
    [
      /^py-(.+)-(.+)$/,
      ([, a, b]) => ({
        'padding-top': `${a}`,
        'padding-bottom': `${b}`
      })
    ],
    [
      /^mx-(.+)-(.+)$/,
      ([, a, b]) => ({
        'margin-left': `${a}`,
        'margin-right': `${b}`
      })
    ],
    [
      /^my-(.+)-(.+)$/,
      ([, a, b]) => ({
        'margin-top': `${a}`,
        'margin-bottom': `${b}`
      })
    ]
  ],
  shortcuts: [
    {
      full: 'w-full h-full',
      'abs-full': 'absolute inset-0',
      'flex-center': 'flex items-center justify-center',
      'items-center': 'flex items-center',
      'justify-center': 'flex justify-center'
    }
  ]
})
