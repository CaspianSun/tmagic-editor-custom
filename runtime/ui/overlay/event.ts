export default {
  methods: [
    {
      label: '打开遮罩',
      value: 'openOverlay'
    },
    {
      label: '关闭遮罩',
      value: 'closeOverlay'
    }
  ],
  events: [
    {
      label: '打开遮罩',
      value: 'overlay:open'
    },
    {
      label: '关闭遮罩',
      value: 'overlay:close'
    }
  ]
}
