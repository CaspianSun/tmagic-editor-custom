export default [
  {
    name: 'vantProps',
    labelWidth: '80px',
    items: [
      {
        name: 'labelWidth',
        type: 'data-source-input',
        text: '左侧宽度'
      },
      {
        name: 'labelAlign',
        type: 'select',
        text: '左侧对齐',
        options: [
          {
            text: '左对齐',
            value: 'left'
          },
          {
            text: '居中',
            value: 'center'
          },
          {
            text: '右对齐',
            value: 'right'
          },
          {
            text: '上对齐',
            value: 'top'
          }
        ]
      },
      {
        name: 'inputAlign',
        type: 'select',
        text: '输入对齐',
        options: [
          {
            text: '左对齐',
            value: 'left'
          },
          {
            text: '居中',
            value: 'center'
          },
          {
            text: '右对齐',
            value: 'right'
          }
        ]
      },
      {
        name: 'colon',
        type: 'switch',
        text: '冒号'
      },
      {
        name: 'required',
        type: 'switch',
        text: '必填星号'
      }
    ]
  }
]
