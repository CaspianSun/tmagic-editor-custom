export default [
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
        name: 'name',
        type: 'data-source-input',
        text: '表单标识'
      },
      {
        name: 'rules',
        type: 'vs-code',
        text: '校验规则',
        height: '200px',
        language: 'javascript',
        parse: true,
        options: {
          theme: 'vs-light',
          fixedOverflowWidgets: true,
          automaticLayout: true,
          glyphMargin: false,
          folding: false,
          tabSize: 2,
          lineDecorationsWidth: 6,
          lineNumbersMinChars: 0
        }
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
      }
    ]
  },
  {
    type: 'table',
    name: 'options',
    items: [
      {
        name: 'label',
        label: '选项文本'
      },
      {
        name: 'name',
        label: '标识符'
      },
      {
        name: 'disabled',
        label: '禁用',
        defaultValue: false,
        type: 'switch'
      },
      {
        name: 'shape',
        label: '形状',
        type: 'select',
        defaultValue: 'round',
        options: [
          {
            text: '方形',
            value: 'square'
          },
          {
            text: '圆形',
            value: 'round'
          }
        ]
      }
    ]
  }
]
