export default [
  {
    name: 'layout',
    text: '容器布局',
    type: 'select',
    defaultValue: 'absolute',
    options: [
      { value: 'absolute', text: '绝对定位' },
      { value: 'relative', text: '流式布局' }
    ],
    onChange: (formState: any, v: string, { model }: any) => {
      if (!model.style) return v
      if (v === 'relative') {
        model.style.height = 'auto'
      } else {
        const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id)
        if (el) {
          model.style.height = el.getBoundingClientRect().height
        }
      }
    }
  },
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
