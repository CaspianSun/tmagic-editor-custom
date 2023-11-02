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
      /^white$/,
      () => ({
        opacity: '1',
        animation: 'none'
      })
    ],
    [/^fixed$/, () => ({})],
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
      /^w-calc-(.+)-(.+)$/,
      ([, a, b]) => ({
        width: `calc(${a} - ${b})`
      })
    ]
  ],
  shortcuts: [
    {
      full: 'w-full h-full',
      'abs-full': 'absolute inset-0',
      'flex-center': 'flex items-center justify-center'
    }
  ]
})
