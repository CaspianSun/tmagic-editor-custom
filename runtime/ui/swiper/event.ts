export default {
  methods: [
    {
      label: '跳转到指定页面',
      value: 'slideTo',
      params: [
        {
          label: '指定页面',
          field: 'index',
          type: 'number',
          value: 0,
        },
        {
          label: '切换速度',
          field: 'speed',
          type: 'number',
          value: 300,
        },
        {
          label: '是否启用动画',
          field: 'runCallbacks',
          type: 'boolean',
          value: true,
        },
      ],
    },
    {
      label: '跳转到下一个页面',
      value: 'slideNext',
    },
    {
      label: '跳转到上一个页面',
      value: 'slidePrev',
    },
  ],
  events: []
}
