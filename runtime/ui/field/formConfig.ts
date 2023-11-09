export default [
  {
    name: 'model',
    type: 'data-source-input',
    text: '绑定值'
  },
  {
    name: 'vantProps',
    labelWidth: '80px',
    items: [
      {
        name: 'size',
        type: 'select',
        text: '尺寸',
        options: [
          {
            text: '默认',
            value: ''
          },
          {
            text: '大号',
            value: 'large'
          }
        ]
      },
      {
        name: 'type',
        type: 'data-source-input',
        text: '类型'
      },
      {
        name: 'label',
        type: 'data-source-input',
        text: '左侧文本'
      },
      {
        name: 'labelWidth',
        type: 'data-source-input',
        text: '左侧宽度'
      },
      {
        name: 'placeholder',
        type: 'data-source-input',
        text: '占位文字'
      },
      {
        name: 'maxlength',
        type: 'data-source-input',
        text: '最大长度'
      },
      {
        name: 'name',
        type: 'data-source-input',
        text: '表单标识'
      },
      {
        name: 'colon',
        type: 'switch',
        text: '冒号'
      },
      {
        name: 'border',
        type: 'switch',
        text: '内边框'
      },
      {
        name: 'required',
        type: 'switch',
        text: '必填星号'
      },
      {
        name: 'center',
        type: 'switch',
        text: '垂直居中'
      },
      {
        name: 'clearable',
        type: 'switch',
        text: '清除控件'
      }
    ]
  }
]
